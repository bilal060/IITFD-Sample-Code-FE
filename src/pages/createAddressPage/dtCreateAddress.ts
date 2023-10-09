export const dtFormInputFields = [
  {
    name: "addressName",
    label: "Addess Name",
    type: "text",
  },
  {
    name: "countries",
    label: "Country",
    type: "country-select",
  },
  {
    name: "state",
    label: "State",
    type: "autocomplete",
    options: [
      { label: "State A", value: "stateA" },
      { label: "State B", value: "stateB" },
      { label: "State C", value: "stateC" },
      { label: "State D", value: "stateD" },
    ],
  },
  {
    name: "city",
    label: "City",
    type: "text",
  },
  {
    name: "postCode",
    label: "Post Code",
    type: "text",
  },
];
export const dtMobileNumberFields = [
  {
    id: 1,
    title: "Main Phone",
    name: "intCode",
    label: "Int Code",
    placeholder: "Int Code",
    col: 12,
  },
  {
    id: 2,
    title: "Mobile Phone",
    name: "areaCode",
    label: "Area Code",
    placeholder: "Area Code",
    col: 12,
  },
  {
    id: 3,
    title: "",
    name: "number",
    label: "Number",
    placeholder: "Number",
    col: 12,
  },
];
