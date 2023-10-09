import utRoute from "../utils/utAjax";
import srAjax from "../service/srAjax";
import { TDefaultResponse } from "../types/tpAjaxTypes/tpAjax";
import { tpCatalogUpdate, tpCatalogInsert } from "../types/pages/tpCatalog";

const LISTING_ROUTE = "/catalogues/";

export const apGetListings = ():TDefaultResponse => srAjax.get(utRoute(LISTING_ROUTE));

export const apInsertCatalog = (data:tpCatalogInsert):TDefaultResponse => srAjax.post(utRoute(LISTING_ROUTE), data);

export const apUpdateCatalog = (data:tpCatalogUpdate):TDefaultResponse => srAjax.put(utRoute(LISTING_ROUTE), data);

export const apDeleteCatalog = (data:tpCatalogUpdate):TDefaultResponse => srAjax.post(
  utRoute(LISTING_ROUTE + data.ctUuid), data,
);
