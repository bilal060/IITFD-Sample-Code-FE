import React from "react";
import {
  CpGrid,
  CpTypography,
  CpButton,
  CpFormSelectionInput,
} from "../../shared/moduleImports/utModuleImports";
import {
  tpModaForm,
  tpIndex,
} from "../../shared/types/pages/tpProductCatalog";

import "./stProductCatalogPage.scss";

const labels: tpIndex = {
  pcCatalogId: "Catalog Name",
  pcProductId: "Product Name",
};

const CpModalFormFields = ({ productsTemp, cataloguesTemp }:tpModaForm): JSX.Element => (
  <>
    <CpGrid item xs={12}>
      <CpTypography
        sx={{ fontWeight: "bold", my: 2 }}
        mr={1}
      >
        {labels.pcCatalogId}
      </CpTypography>
    </CpGrid>

    <CpGrid item xs={12}>
      <CpFormSelectionInput fullWidth size="small" name="pcCatalogId" label="" placeholder="" data={cataloguesTemp} />
    </CpGrid>
    <CpGrid item xs={12}>
      <CpTypography
        sx={{ fontWeight: "bold", my: 2 }}
        mr={1}
      >
        {labels.pcProductId}
      </CpTypography>
    </CpGrid>

    <CpGrid item xs={12}>
      <CpFormSelectionInput fullWidth size="small" name="pcProductId" label="" placeholder="" data={productsTemp} />
    </CpGrid>
    <CpButton type="submit" fullWidth variant="contained" color="success" sx={{ mt: 3, mb: 2 }}>
      Save
    </CpButton>
  </>
);

export default CpModalFormFields;
