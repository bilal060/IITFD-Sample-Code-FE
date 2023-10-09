import React from "react";
import { useForm } from "react-hook-form";
import {
  CpGrid,
  CpButton,
  CpForm,
  CpBox,
  CpDialog3,
} from "../../shared/moduleImports/utModuleImports";
import utAppToast from "../../shared/utils/utToast";
import {
  tpProductCatalog,
  tpModalProps,
  tpModalFunctionProps,
  tpActionButtons,
} from "../../shared/types/pages/tpProductCatalog";
import {
  apUpdateProductCatalog,
  apInsertProductCatalog,
} from "../../shared/ajax/apProductCatalog";
import "./stProductCatalogPage.scss";
import CpModalFormFields from "./CpProductCatalogForm";

const toast = utAppToast();

export const CpActionButtons = ({
  cpDeleteProductCatalog,
  cpOpenDetailModal,
  data,
}: tpActionButtons): JSX.Element => (
  <CpGrid item container spacing={2} xs={12} m={1}>
    <CpGrid container>
      <CpBox mr={1}>
        <CpButton
          size="small"
          onClick={() => cpOpenDetailModal(data.row)}
          variant="contained"
        >
          Edit
        </CpButton>
      </CpBox>
      <CpBox mr={1}>
        <CpButton
          size="small"
          onClick={() => cpDeleteProductCatalog(data.row)}
          variant="contained"
          color="error"
        >
          Delete
        </CpButton>
      </CpBox>
    </CpGrid>
  </CpGrid>
);

const cpOnInsert = async (cpInsert: (row: tpProductCatalog, rows: tpProductCatalog[],
  setRows: (rows: tpProductCatalog[])=> void) => void, props: tpModalFunctionProps) => {
  const resp = await apInsertProductCatalog(props.data);
  if (resp.status === 200) {
    toast.success(resp.body.message);
    cpInsert(resp.body.data as tpProductCatalog, props.rows, props.setRows);
    props.setRow({} as tpProductCatalog);
    props.reset({
      pcCatalogId: "",
      pcProductId: "",
    });
    props.onClose();
  } else {
    toast.error(resp.body.message);
  }
};

const cpOnUpdate = async (cpInsert: (row: tpProductCatalog, rows: tpProductCatalog[],
  setRows: (rows: tpProductCatalog[])=> void) => void,
cpUpdateState: (row: tpProductCatalog, rows: tpProductCatalog[],
    setRows: (rows: tpProductCatalog[])=> void) => void, props: tpModalFunctionProps, row: tpProductCatalog) => {
  if (row && row.cName) {
    const resp = await apUpdateProductCatalog({ ...{ pcUuid: row.pcUuid }, ...props.data });
    if (resp.status === 200) {
      toast.success(resp.body.message);
      props.setRow({} as tpProductCatalog);
      cpUpdateState({
        ...{
          id: row.id,
          pcUuid: row.pcUuid,
          cName: props.catalogues[0].cName,
          pName: props.products[0].pName,
          pPrice: props.products[0].pPrice,
        },
        ...props.data,
      },
      props.rows, props.setRows);
      props.reset({
        pcCatalogId: "",
        pcProductId: "",
      });
      props.onClose();
    } else {
      toast.error(resp.body.message);
    }
  } else {
    cpOnInsert(cpInsert, {
      data: props.data,
      setRow: props.setRow,
      onClose: props.onClose,
      reset: props.reset,
      rows: props.rows,
      setRows: props.setRows,
      products: props.products,
      catalogues: props.catalogues,
    });
  }
};

const CpModalForm = ({
  onClose, row, setRow, cpUpdateState, cpInsert,
  rows, setRows, products, catalogues,
}: tpModalProps): JSX.Element => {
  const methods = useForm({
    defaultValues: {
      pcCatalogId: "",
      pcProductId: "",
    },
  });
  const productsTemp = [{
    value: "",
    label: "",
  }];
  const cataloguesTemp = [{
    value: "",
    label: "",
  }];
  products.forEach((pro) => {
    productsTemp.push({
      value: pro.pUuid,
      label: pro.pName,
    });
  });
  catalogues.forEach((cata) => {
    cataloguesTemp.push({
      value: cata.ctUuid,
      label: cata.cName,
    });
  });

  if (row && row.pcCatalogId) {
    methods.setValue("pcCatalogId", row.pcCatalogId);
    methods.setValue("pcProductId", row.pcProductId);
  }
  const cpOnSubmit = () => {
    methods.handleSubmit(async (data) => {
      const productIdData = products.filter((item) => item.pUuid === data.pcProductId);
      const catalogIdData = catalogues.filter((item) => item.ctUuid === data.pcCatalogId);
      cpOnUpdate(cpInsert, cpUpdateState, {
        data, setRow, onClose, reset: methods.reset, rows, setRows, products: productIdData, catalogues: catalogIdData,
      }, row);
    })();
  };

  return (
    <CpForm methods={methods} onSubmit={cpOnSubmit}>
      <CpModalFormFields productsTemp={productsTemp} cataloguesTemp={cataloguesTemp} />
    </CpForm>
  );
};

const CpProductCatalogModalPage = ({
  open,
  onClose,
  row,
  setRow,
  cpUpdateState,
  cpInsert,
  rows,
  setRows,
  products,
  catalogues,
}: tpModalProps): JSX.Element => (
  <CpDialog3 open={open} onClose={() => { setRow({} as tpProductCatalog); onClose(); }} title="ProductCatalog Edit">
    <CpGrid container spacing={2} mt={1}>
      <CpModalForm
        open={open}
        row={row}
        onClose={onClose}
        setRow={setRow}
        cpUpdateState={cpUpdateState}
        cpInsert={cpInsert}
        rows={rows}
        setRows={setRows}
        products={products}
        catalogues={catalogues}
      />
    </CpGrid>
  </CpDialog3>
);

export default CpProductCatalogModalPage;
