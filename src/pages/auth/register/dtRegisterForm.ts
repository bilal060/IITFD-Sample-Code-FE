const radioValues = [{ label: "Buyer", value: "buyer" }, { label: "Seller", value: "seller" }];
const formInputFields = [
  {
    name: "companyName",
    label: "Company Name",
    type: "text",
    col: 12,
  },
  {
    name: "taxNumber",
    label: "Tax Number",
    type: "text",
    col: 6,
  },
  {
    name: "dunsNumber",
    label: "DUNS Number",
    type: "text",
    col: 6,
  },
  {
    name: "addressLine1",
    label: "Address Line 1",
    type: "text",
    col: 4,
  },
  {
    name: "addressLine2",
    label: "Address Line 2",
    type: "text",
    col: 4,
  },
  {
    name: "city",
    label: "City",
    type: "text",
    col: 4,
  },
  {
    name: "country",
    label: "Country",
    type: "text",
    col: 4,
  },
  {
    name: "postCode",
    label: "PostCode",
    type: "text",
    col: 4,
  },
  {
    name: "telephone",
    label: "Telephone",
    type: "text",
    col: 4,
  },
  {
    name: "language",
    label: "Language",
    type: "select",
    options: [{ label: "English", value: "english" }, { label: "Urdu", value: "urdu" }],
    col: 6,
  },
  {
    name: "website",
    label: "Website",
    type: "text",
    col: 6,
  },
];

export {
  radioValues,
  formInputFields,
};
