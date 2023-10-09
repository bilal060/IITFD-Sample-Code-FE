const dtFormInputFields = [
  {
    name: "countries",
    label: "Company Registered Countries",
    type: "country-select",
  },
  {
    name: "firmType",
    label: "Firm Type",
    type: "autocomplete",
    options: [
      { label: "Corporation A", value: "corporationA" },
      { label: "Corporation B", value: "corporationB" },
      { label: "Corporation C", value: "corporationC" },
      { label: "Corporation D", value: "corporationD" },
    ],
  },
  {
    name: "domain",
    label: "Domain",
    type: "text",
  },
  {
    name: "taxNumber",
    label: "Tax Number",
    type: "text",
  },
  {
    name: "instance",
    label: "Instance",
    type: "text",
  },
  {
    name: "taxOffice",
    label: "Tax Office",
    type: "text",
  },
  {
    name: "companyName",
    label: "Company Name",
    type: "text",
  },
];
const dtRegisteredCompaniesDetails = [
  {
    name: "state",
    label: "State",
    type: "country-select",
  },
  {
    name: "city",
    label: "City",
    type: "text",
  },
  {
    name: "postalCode",
    label: "Postal Code",
    type: "text",
  },
  {
    name: "websiteAddress",
    label: "WebSite Address",
    type: "text",
  },
];
const dtMobileNumberFields = [
  {
    title: "Main Phone",
    name: "intCode",
    label: "Int Code",
    placeholder: "Int Code",
    col: 12,
  },
  {
    title: "Mobile Phone",
    name: "areaCode",
    label: "Area Code",
    placeholder: "Area Code",
    col: 12,
  },
  {
    title: "",
    name: "number",
    label: "Number",
    placeholder: "Number",
    col: 12,
  },
];

export { dtRegisteredCompaniesDetails, dtFormInputFields, dtMobileNumberFields };
