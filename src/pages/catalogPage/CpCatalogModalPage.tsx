import React from "react";
import { useForm } from "react-hook-form";
import {
  CpGrid,
  CpTypography,
  CpButton,
  CpForm,
  CpBox,
  CpDialog3,
  CpFormTextFieldInput,
} from "../../shared/moduleImports/utModuleImports";
import utAppToast from "../../shared/utils/utToast";
import {
  tpCatalog,
  tpModalProps,
  tpModalFunctionProps,
  tpIndex,
  tpActionButtons,
} from "../../shared/types/pages/tpCatalog";
import {
  apUpdateCatalog,
  apInsertCatalog,
} from "../../shared/ajax/apCatalog";
import "./stCatalogPage.scss";

const toast = utAppToast();

const labels: tpIndex = {
  cName: "Catalog Name",
};

export const CpActionButtons = ({
  cpDeleteCatalog,
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
          onClick={() => cpDeleteCatalog(data.row)}
          variant="contained"
          color="error"
        >
          Delete
        </CpButton>
      </CpBox>
    </CpGrid>
  </CpGrid>
);

const cpOnInsert = async (cpInsert: (row: tpCatalog, rows: tpCatalog[],
    setRows: (rows: tpCatalog[])=> void) => void, props: tpModalFunctionProps) => {
  const resp = await apInsertCatalog(props.data);
  if (resp.status === 200) {
    toast.success(resp.body.message);
    cpInsert(resp.body.data as tpCatalog, props.rows, props.setRows);
    props.setRow({} as tpCatalog);
    props.reset({
      cName: "",
    });
    props.onClose();
  } else {
    toast.error(resp.body.message);
  }
};

const cpOnUpdate = async (cpInsert: (row: tpCatalog, rows: tpCatalog[], setRows: (rows: tpCatalog[])=> void) => void,
  cpUpdateState: (row: tpCatalog, rows: tpCatalog[],
      setRows: (rows: tpCatalog[])=> void) => void, props: tpModalFunctionProps, row: tpCatalog) => {
  if (row && row.cName) {
    const resp = await apUpdateCatalog({ ...{ ctUuid: row.ctUuid }, ...props.data });
    if (resp.status === 200) {
      toast.success(resp.body.message);
      props.setRow({} as tpCatalog);
      cpUpdateState({ ...{ id: row.id, ctUuid: row.ctUuid }, ...props.data }, props.rows, props.setRows);
      props.reset({
        cName: "",
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
    });
  }
};

const CpCatalogModalPage = ({
  open,
  onClose,
  row,
  setRow,
  cpUpdateState,
  cpInsert,
  rows,
  setRows,
}: tpModalProps): JSX.Element => {
  const methods = useForm({
    defaultValues: {
      cName: "",
    },
  });
  if (row && row.cName && methods.getValues("cName") === "") {
    methods.setValue("cName", row.cName);
  }
  const cpOnSubmit = () => {
    methods.handleSubmit(async (data) => {
      cpOnUpdate(cpInsert, cpUpdateState, {
        data, setRow, onClose, reset: methods.reset, rows, setRows,
      }, row);
    })();
  };
  return (
    <CpDialog3 open={open} onClose={() => { setRow({} as tpCatalog); methods.reset({}); onClose(); }} title="Catalog Edit">
      <CpGrid container spacing={2} mt={1}>
        <CpForm methods={methods} onSubmit={cpOnSubmit}>
          <CpGrid item xs={12}>
            <CpTypography
              sx={{ fontWeight: "bold", my: 2 }}
              mr={1}
            >
              {labels.cName}
            </CpTypography>
          </CpGrid>

          <CpGrid item xs={12}>
            <CpFormTextFieldInput fullWidth size="small" name="cName" label="" placeholder="" />
          </CpGrid>
          <CpButton type="submit" fullWidth variant="contained" color="success" sx={{ mt: 3, mb: 2 }}>
            Save
          </CpButton>
        </CpForm>
      </CpGrid>
    </CpDialog3>
  );
};

export default CpCatalogModalPage;
