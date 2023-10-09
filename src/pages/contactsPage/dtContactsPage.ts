import { tpContacts } from "../../shared/types/pages/tpContacts";

export const dtColumns = [
  { field: "businessTitle", headerName: "Business Title", width: 100 },
  { field: "MrMrs", headerName: "Mr/Mrs", width: 100 },
  { field: "name", headerName: "Name", width: 100 },
  { field: "lastName", headerName: "Last Name", width: 120 },
  { field: "email", headerName: "Email", width: 100 },
  { field: "phone", headerName: "Phone", width: 100 },
  { field: "mobilePhone", headerName: "Mobile Phone", width: 140 },
  { field: "fax", headerName: "Fax", width: 100 },
  { field: "addressName", headerName: "Address Name", width: 120 },
  { field: "country", headerName: "Country", width: 140 },
  { field: "state", headerName: "State", width: 100 },
  { field: "city", headerName: "City", width: 100 },
  { field: "postCode", headerName: "Post Code", width: 100 },
  { field: "address", headerName: "Address", width: 120 },
];
export const dtRows: tpContacts[] = [
  {
    id: "1",
    businessTitle: "Default",
    MrMrs: "Default",
    name: "Default",
    lastName: "Default",
    email: "Default",
    phone: "Default",
    mobilePhone: "Default",
    fax: "Default",
    addressName: "Default",
    country: "Default",
    state: "Default",
    city: "Default",
    postCode: "Default",
    address: "Default",
  },
];
