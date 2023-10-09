import React from "react";
import {
  CpGrid,
  CpTypography,
  CpButton,
  CpFormTextFieldInput,
  CpFormSelectionInput,
} from "../../shared/moduleImports/utModuleImports";
import {
  tpModaForm,
  tpIndex,
} from "../../shared/types/pages/tpProduct";

import "./stProductPage.scss";

const labels: tpIndex = {
  pCategoryId: "Category Name",
  pName: "Product Name",
  pPrice: "Product Price",
};

const CpModalFormFields = ({ temp }:tpModaForm): JSX.Element => (
  <>
    <CpGrid item xs={12}>
      <CpTypography
        sx={{ fontWeight: "bold", my: 2 }}
        mr={1}
      >
        {labels.pCategoryId}
      </CpTypography>
    </CpGrid>

    <CpGrid item xs={12}>
      <CpFormSelectionInput fullWidth size="small" name="pCategoryId" label="" placeholder="" data={temp} />
    </CpGrid>
    <CpGrid item xs={12}>
      <CpTypography
        sx={{ fontWeight: "bold", my: 2 }}
        mr={1}
      >
        {labels.pName}
      </CpTypography>
    </CpGrid>

    <CpGrid item xs={12}>
      <CpFormTextFieldInput fullWidth size="small" name="pName" label="" placeholder="" />
    </CpGrid>
    <CpGrid item xs={12}>
      <CpTypography
        sx={{ fontWeight: "bold", my: 2 }}
        mr={1}
      >
        {labels.pPrice}
      </CpTypography>
    </CpGrid>

    <CpGrid item xs={12}>
      <CpFormTextFieldInput type="number" fullWidth size="small" name="pPrice" label="" placeholder="" />
    </CpGrid>
    <CpButton type="submit" fullWidth variant="contained" color="success" sx={{ mt: 3, mb: 2 }}>
      Save
    </CpButton>
  </>
);

export default CpModalFormFields;
