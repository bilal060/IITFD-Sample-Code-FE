module.exports = [
  {
    files: [
      "./src/pages/companyProfile/CpCompanyProfileForm.tsx",
      "./src/components/countryCodeSelect/CpCountryCodeSelect.tsx",
      "./src/components/select/autoComplete/CpAutoComplete.tsx",
      "./src/pages/operationDetailsPage/CpOperationDetailsPage.tsx",
      "./src/components/countrySelect/CpCountrySelect.tsx",
      "./src/pages/sellerForProductPage/CpSellersForProductPage.tsx",
      "./src/components/form/formController/CpFormController.tsx",
      "./src/components/datePicker/CpCustomInputDatePicker.tsx",
      "./src/pages/sellerMembershipPage/CpSellerMembershipPage.tsx",
      "./src/pages/createServiceLocation/CpCreateServiceLocation.tsx",
      "./src/pages/addProductsAndServices/CpAddProductsAndServices.tsx",
      "./src/pages/createBankInformation/CpCreateBankInformation.tsx"
    ],
    rules: {
      "react/jsx-props-no-spreading": "off",
    },
  },
  {
    files: [
      "./src/rtRoutes.tsx",
    ],
    rules: {
      "max-lines-per-function": "off",
    },
  },
];
