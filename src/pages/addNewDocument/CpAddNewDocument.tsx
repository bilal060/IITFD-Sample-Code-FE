import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  tpAddNewDocument,
} from "../../shared/types/pages/tpAddNewDocument";
import {
  CpContainer,
  CpGrid,
  CpPaper,
  CpTypography,
  CpForm,
  CpInputLabel,
  CpFormSelectionInput,
  CpTextarea,
  CpDatePicker,
  CpButton,
  CpBox,
} from "../../shared/moduleImports/utModuleImports";
import {
  dtDocumentTypeOptions,
  dtDocumentSubTypeOptions,
} from "./dtAddNewDocument";
import "./stAddNewDocument.scss";

const CpDateFields = (): JSX.Element => {
  const [validityBeginningDate, setValidityBeginningDate] = useState(new Date());
  const [validityEndDate, setValidityEndDate] = useState(new Date());

  return (
    <>
      <CpGrid item xs={6}>
        <CpInputLabel className="input-label-text">Validity Beginning Date</CpInputLabel>
        <CpDatePicker
          value={validityBeginningDate}
          onChange={(date) => setValidityBeginningDate(date as Date)}
        />
      </CpGrid>
      <CpGrid item xs={6}>
        <CpInputLabel className="input-label-text">Validity End Date</CpInputLabel>
        <CpDatePicker
          value={validityEndDate}
          onChange={(date) => setValidityEndDate(date as Date)}
        />
      </CpGrid>
    </>
  );
};

const CpInputFields = (): JSX.Element => (
  <>
    <CpGrid item xs={12}>
      <CpInputLabel className="input-label-text" htmlFor="document-type">Document Type</CpInputLabel>
      <CpFormSelectionInput
        fullWidth
        data={dtDocumentTypeOptions ?? []}
        size="small"
        label=""
        placeholder="document-type"
        name="document-type"
      />
    </CpGrid>
    <CpGrid item xs={12}>
      <CpInputLabel className="input-label-text" htmlFor="document-sub-type">Document Sub Type</CpInputLabel>
      <CpFormSelectionInput
        fullWidth
        data={dtDocumentSubTypeOptions ?? []}
        size="small"
        label=""
        placeholder="Document Sub Type"
        name="document-sub-type"
      />
    </CpGrid>

    <CpGrid item xs={12}>
      <CpInputLabel className="input-label-text" htmlFor="document-sub-type">Attachment</CpInputLabel>
      <input type="file" />
    </CpGrid>
    <CpGrid item xs={12}>
      <CpInputLabel className="input-label-text" htmlFor="description">Description</CpInputLabel>
      <CpTextarea minRows={3} className="textarea" />
    </CpGrid>
  </>
);

const CpAddNewDocument = (): JSX.Element => {
  const methods = useForm<tpAddNewDocument>({});

  return (
    <>
      <CpContainer component="main" maxWidth="sm" className="cp-add-new-document-root">
        <CpPaper elevation={3} className="paper">
          <CpTypography component="h1" variant="h5" textAlign="start">
            Add New Document
          </CpTypography>
          <hr />

          <CpForm methods={methods}>
            <CpGrid container spacing={1}>
              <CpInputFields />
              <CpDateFields />

              <CpGrid item xs={12}>
                <CpGrid container justifyContent="flex-end">
                  <CpBox mr={3}>
                    <CpButton variant="contained" className="action-button">Save</CpButton>
                  </CpBox>
                  <CpBox>
                    <CpButton variant="contained" className="action-button-cancel">Cancel</CpButton>
                  </CpBox>
                </CpGrid>
              </CpGrid>
            </CpGrid>
          </CpForm>
        </CpPaper>
      </CpContainer>
    </>
  );
};

export default CpAddNewDocument;
