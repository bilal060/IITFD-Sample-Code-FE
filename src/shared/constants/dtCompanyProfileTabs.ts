import { tpContacts } from "../types/pages/tpContacts";
import { tpRequestAccess } from "../types/pages/tpRequestAccess";

export const dtProductServiceColumns = [
  { field: "segmentName", headerName: "Segment Name", width: 200 },
  { field: "familyName", headerName: "Family Name", width: 150 },
  { field: "class", headerName: "Class", width: 100 },
  { field: "className", headerName: "Class Name", width: 150 },
  { field: "commodityName", headerName: "Commodity Code", width: 200 },
  { field: "commodityCode", headerName: "Commodity Name", width: 200 },
];

export const dtServingLocationsColumns = [
  { field: "region", headerName: "Region", width: 200 },
  { field: "country", headerName: "Country", width: 130 },
  { field: "city", headerName: "City", width: 100 },
];

export const dtContactColumns = [
  { field: "businessTitle", headerName: "Business Title", width: 150 },
  { field: "MrMrs", headerName: "Mr/Mrs", width: 100 },
  { field: "name", headerName: "Name", width: 100 },
  { field: "lastName", headerName: "Last Name", width: 100 },
  { field: "email", headerName: "Email", width: 100 },
  { field: "phone", headerName: "Phone", width: 100 },
  { field: "mobilePhone", headerName: "Mobile Phone", width: 140 },
  { field: "fax", headerName: "Fax", width: 100 },
  { field: "addressName", headerName: "Address Name", width: 120 },
  { field: "country", headerName: "Country", width: 100 },
  { field: "state", headerName: "State", width: 100 },
  { field: "city", headerName: "City", width: 100 },
  { field: "postCode", headerName: "Post Code", width: 100 },
  { field: "address", headerName: "Address", width: 120 },
];

export const dtContactRows: tpContacts[] = [
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

export const dtServedSectorsColumns = [
  { field: "servedSector", headerName: "Served Sector", width: 200 },
  { field: "subSector", headerName: "Sub Sector", width: 200 },
];

export const dtAdditionalAddressesColumns = [
  { field: "addressName", headerName: "Address Name", width: 200 },
  { field: "country", headerName: "Country", width: 150 },
  { field: "state", headerName: "State", width: 100 },
  { field: "city", headerName: "City", width: 150 },
  { field: "address1", headerName: "Address 1", width: 200 },
  { field: "address2", headerName: "Address 2", width: 200 },
];

export const dtAdditionalDocumentsColumns = [
  { field: "documentType", headerName: "Document Type", width: 150 },
  { field: "documentName", headerName: "Document Name", width: 150 },
  { field: "documentSize", headerName: "Document Size", width: 150 },
  { field: "expirationDate", headerName: "Expiration Date", width: 150 },
  { field: "createdBy", headerName: "Created By", width: 150 },
  { field: "creationDate", headerName: "Creation Date and Time", width: 250 },
];

export const dtRequestAccessColumns = [
  { field: "email", headerName: "E-mail", width: 170 },
  { field: "taxNumber", headerName: "Tax Number", width: 170 },
  { field: "creationDate", headerName: "Creation Date", width: 170 },
  { field: "updatedDate", headerName: "Updated Date", width: 170 },
  { field: "status", headerName: "Status", width: 170 },
];

export const dtRequestAccessRows: tpRequestAccess[] = [
  {
    id: "1",
    email: "Default",
    taxNumber: "Default",
    creationDate: "Default",
    updatedDate: "Default",
    status: "Default",
  },
];
