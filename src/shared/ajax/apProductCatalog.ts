import utRoute from "../utils/utAjax";
import srAjax from "../service/srAjax";
import { TDefaultResponse } from "../types/tpAjaxTypes/tpAjax";
import { tpProductCatalogUpdate, tpProductCatalogInsert } from "../types/pages/tpProductCatalog";

const LISTING_ROUTE = "/product_catalog/";
const PRODUCTSLIST_ROUTE = "/product_catalog/products/";
const CATALOGUESLIST_ROUTE = "/product_catalog/catalogues/";

export const apGetListings = ():TDefaultResponse => srAjax.get(utRoute(LISTING_ROUTE));

export const apGetProductsList = ():TDefaultResponse => srAjax.get(utRoute(PRODUCTSLIST_ROUTE));

export const apGetCataloguesList = ():TDefaultResponse => srAjax.get(utRoute(CATALOGUESLIST_ROUTE));

export const apInsertProductCatalog = (data:tpProductCatalogInsert):TDefaultResponse => srAjax
  .post(utRoute(LISTING_ROUTE), data);

export const apUpdateProductCatalog = (data:tpProductCatalogUpdate):TDefaultResponse => srAjax
  .put(utRoute(LISTING_ROUTE), data);

export const apDeleteProductCatalog = (data:tpProductCatalogUpdate):TDefaultResponse => srAjax.post(
  utRoute(LISTING_ROUTE + data.pcUuid), data,
);
