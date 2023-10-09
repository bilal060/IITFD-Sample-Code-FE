const radioValues = [
  { label: "Public", value: "public" },
  { label: "Private", value: "private" },
];

const formInputFields = [
  {
    name: "Name",
    label: "Name",
    placeholder: "Name",
    type: "text",
    col: 6,
  },
  {
    name: "quantityNeeded",
    label: "Quantity needed",
    placeholder: "Quantity needed",
    type: "text",
    col: 6,
  },
  {
    name: "maxTimeOfDelivery",
    label: "Max time of delivery",
    placeholder: "Max time of delivery",
    type: "text",
    col: 6,
  },
  {
    name: "rfqOpenTillDate",
    label: "RFQ open till date",
    placeholder: "RFQ open till date",
    type: "text",
    col: 6,
  },

];

const formInputAreaFields = [
  {
    name: "description",
    label: "Item description",
    placeholder: "Item description",
    col: 6,
    tableRows: 7,
  },
  {
    name: "specialNotes",
    label: "Special Notes",
    placeholder: "Special Notes",
    col: 12,
    tableRows: 10,
  },
];

export { radioValues, formInputFields, formInputAreaFields };
