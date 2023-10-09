import React from "react";
import { FormProvider, UseFormReturn } from "react-hook-form";

type PropTypes <FieldValues = Record<string, unknown>, > = {
  children: React.ReactNode;
  methods: UseFormReturn<FieldValues, unknown>,
  onSubmit?: () => void,
}
const CpFormController = <FieldValues, > (
  { children, methods, onSubmit }: PropTypes<FieldValues>,
):JSX.Element => (
  <FormProvider {...methods}>
    <form onSubmit={(e) => {
      e.preventDefault();
      if (onSubmit) onSubmit();
    }}
    >
      {children}
    </form>
  </FormProvider>
  );

CpFormController.defaultProps = {
  onSubmit: undefined,
};

export default CpFormController;
