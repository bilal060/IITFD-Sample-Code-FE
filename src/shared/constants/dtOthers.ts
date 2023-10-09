import { tpFooterNav } from "../types/tpOther";

const dtFooterNavItems = ():tpFooterNav[] => [
  {
    title: "@2023",
    popUpTitle: null,
  },
  {
    title: "user_agreement",
    popUpTitle: "user_agreement",
  },
  {
    title: "privacy_policy",
    popUpTitle: "privacy_policy",
  },
  {
    title: "cookie_policy",
    popUpTitle: "cookie_policy",
  },
  {
    title: "copyright_policy",
    popUpTitle: "copyright_policy",
  },
];

export const dtSellerServingLocationsColumns = [
  { field: "region", headerName: "Region", width: 150 },
  { field: "country", headerName: "Country", width: 150 },
  { field: "city", headerName: "City", width: 150 },
];

export const dtSellerProductAndServiceColumns = [
  { field: "segmentName", headerName: "Setgmen Name", width: 300 },
  { field: "familyName", headerName: "Family Name", width: 100 },
  { field: "class", headerName: "Class", width: 100 },
  { field: "className", headerName: "Class Name", width: 100 },
  { field: "commondityCode", headerName: "Commondity Code", width: 200 },
  { field: "commondityName", headerName: "Commondity Code", width: 200 },
];

export default dtFooterNavItems;
