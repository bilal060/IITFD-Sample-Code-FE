import { dtAddProductsAndServicesColumns } from "../../../pages/addProductsAndServices/dtAddProductsAndServices";
import { tpAutoCompleteValue } from "../tpInput";

export type tpSegment = {
  id: string,
  segment: string,
  segmentName: string,
}

export type tpFamily = {
  id: string,
  family: string,
  familyName: string,
}

export type tpClass = {
  id: string,
  class: string,
  className: string,
}

export type tpCommodity = {
  id: string,
  commodity: string,
  commodityName: string,
}

export type tpSelectedProductsAndServices = {
  id: string,
  unspcCode: string,
  segmentName: string,
  familyName: string,
  className: string,
  commodityName: string,
}

export type tpAddProductsAndServices =
  tpSegment |
  tpFamily |
  tpClass |
  tpCommodity |
  tpSelectedProductsAndServices;

export type tpProductServiceTableWithFilters = {
  rows: tpAddProductsAndServices[],
  columns: dtAddProductsAndServicesColumns,
  size: number,
  title?: string,
  options?: tpAutoCompleteValue[],
  addButton?: boolean,
}
