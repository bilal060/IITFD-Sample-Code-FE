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
  tpProduct,
  tpModalProps,
  tpModalFunctionProps,
  tpActionButtons,
} from "../../shared/types/pages/tpProduct";
import {
  apUpdateProduct,
  apInsertProduct,
} from "../../shared/ajax/apProduct";
import "./stProductPage.scss";
import CpModalFormFields from "./CpProductForm";

const toast = utAppToast();

export const CpActionButtons = ({
  cpDeleteProduct,
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
          onClick={() => cpDeleteProduct(data.row)}
          variant="contained"
          color="error"
        >
          Delete
        </CpButton>
      </CpBox>
    </CpGrid>
  </CpGrid>
);

const cpOnInsert = async (cpInsert: (row: tpProduct, rows: tpProduct[],
  setRows: (rows: tpProduct[])=> void) => void, props: tpModalFunctionProps) => {
  const resp = await apInsertProduct(props.data);
  if (resp.status === 200) {
    toast.success(resp.body.message);
    cpInsert(resp.body.data as tpProduct, props.rows, props.setRows);
    props.setRow({} as tpProduct);
    props.reset({
      pCategoryId: "",
      pName: "",
      pPrice: "",
    });
    props.onClose();
  } else {
    toast.error(resp.body.message);
  }
};

const cpOnUpdate = async (cpInsert: (row: tpProduct, rows: tpProduct[], setRows: (rows: tpProduct[])=> void) => void,
  cpUpdateState: (row: tpProduct, rows: tpProduct[],
    setRows: (rows: tpProduct[])=> void) => void, props: tpModalFunctionProps, row: tpProduct) => {
  if (row && row.cName) {
    const resp = await apUpdateProduct({ ...{ pUuid: row.pUuid }, ...props.data });
    if (resp.status === 200) {
      toast.success(resp.body.message);
      props.setRow({} as tpProduct);
      cpUpdateState({ ...{ id: row.id, pUuid: row.pUuid, cName: props.categories[0].cName }, ...props.data },
        props.rows, props.setRows);
      props.reset({
        pCategoryId: "",
        pName: "",
        pPrice: "",
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
      categories: props.categories,
    });
  }
};

const CpModalForm = ({
  onClose,
  row,
  setRow,
  cpUpdateState,
  cpInsert,
  categories,
  rows,
  setRows,
}: tpModalProps): JSX.Element => {
  const methods = useForm({
    defaultValues: {
      pCategoryId: "",
      pName: "",
      pPrice: "",
    },
  });

  const temp = [{
    value: "",
    label: "",
  }];
  categories.forEach((cate) => {
    temp.push({
      value: cate.cUuid,
      label: cate.cName,
    });
  });

  if (row && row.pName && methods.getValues("pName") === "") {
    methods.setValue("pName", row.pName);
    methods.setValue("pPrice", row.pPrice);
    methods.setValue("pCategoryId", row.pCategoryId);
  }
  const cpOnSubmit = () => {
    methods.handleSubmit(async (data) => {
      const categoryIdData = categories.filter((item) => item.cUuid === data.pCategoryId);
      cpOnUpdate(cpInsert, cpUpdateState, {
        data, setRow, onClose, reset: methods.reset, rows, setRows, categories: categoryIdData,
      }, row);
    })();
  };

  return (
    <CpForm methods={methods} onSubmit={cpOnSubmit}>
      <CpModalFormFields temp={temp} />
    </CpForm>
  );
};

const CpProductModalPage = ({
  open,
  onClose,
  row,
  setRow,
  cpUpdateState,
  cpInsert,
  categories,
  rows,
  setRows,
}: tpModalProps): JSX.Element => (
  <CpDialog3 open={open} onClose={() => { setRow({} as tpProduct); onClose(); }} title="Product Edit">
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
        categories={categories}
      />
    </CpGrid>
  </CpDialog3>
);

export default CpProductModalPage;
