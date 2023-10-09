import {
  tpCity, tpCountry, tpRegion, tpSelectedServiceLocations,
} from "../../shared/types/pages/tpCreateServiceLocation";

export const dtRegionColumns = [
  { field: "region", headerName: "Region", width: 120 },
];

export const dtCountryColumns = [
  { field: "country", headerName: "Country", width: 120 },
];

export const dtCityColumns = [
  { field: "city", headerName: "City", width: 120 },
  { field: "country", headerName: "Country", width: 120 },
];

export const dtSelectedServicesLocationsColumns = [
  { field: "selectedRegion", headerName: "Selected Region", width: 200 },
  { field: "selectedCountry", headerName: "Selected Country", width: 200 },
  { field: "selectedCity", headerName: "Selected City", width: 200 },
];

export const dtRegionRows: tpRegion[] = [
  {
    id: "1",
    region: "Asia",
  } as tpRegion,
];
export const dtCountryRows: tpCountry[] = [
  {
    id: "1",
    country: "Pakistan",
  } as tpCountry,
];
export const dtCityRows: tpCity[] = [
  {
    id: "1",
    city: "Lahore",
    country: "Pakistan",
  } as tpCity,
];
export const dtSelectedRows: tpSelectedServiceLocations[] = [
  {
    id: "1",
    selectedRegion: "Asia",
    selectedCountry: "Pakistan",
    selectedCity: "Lahore",
  },
];

export type dtAddServicesLocationsColumns =
  typeof dtRegionColumns |
  typeof dtCountryColumns |
  typeof dtCityColumns |
  typeof dtSelectedServicesLocationsColumns;
