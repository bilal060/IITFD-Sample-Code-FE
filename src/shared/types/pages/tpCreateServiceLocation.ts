import { dtAddServicesLocationsColumns } from "../../../pages/createServiceLocation/dtCreateServiceLocation";
import { tpAutoCompleteValue } from "../tpInput";

export type tpRegion = {
  id: string,
  region: string,
}

export type tpCountry = {
  id: string,
  country: string
}

export type tpCity = {
  id: string,
  city: string
}

export type tpSelectedServiceLocations = {
  id: string,
  selectedRegion: string,
  selectedCountry: string,
  selectedCity: string
}

export type tpAddServicesLocations =
  tpRegion |
  tpCountry |
  tpCity |
  tpSelectedServiceLocations;

export type tpServiceLocationsTableWithFilters = {
  rows: tpAddServicesLocations[],
  columns: dtAddServicesLocationsColumns,
  size: number,
  title?: string,
  options?: tpAutoCompleteValue[],
  addButton?: boolean,
}
