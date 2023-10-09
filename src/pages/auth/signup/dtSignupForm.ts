export const fieldsArray = [
  {
    name: "email",
    type: "email",
    label: "Email",
  },
  {
    name: "companyCountry",
    type: "select",
    label: "Company Registered Country",
    options: [{ value: "PK", label: "Pakistan" }],
  },
  {
    name: "taxNo",
    type: "number",
    label: "Tax No",
  },
  {
    name: "companyName",
    type: "text",
    label: "Company Name",
  },
  {
    name: "companyCity",
    type: "text",
    label: "City",
  },
  {
    name: "companyWebAddress",
    type: "url",
    label: "Web Site Address",
  },
];

export const workTypes = [
  { label: "Buyer", value: "buyer" },
  { label: "Seller", value: "seller" },
];
