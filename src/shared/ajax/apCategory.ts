import utRoute from "../utils/utAjax";
import srAjax from "../service/srAjax";
import { TDefaultResponse } from "../types/tpAjaxTypes/tpAjax";
import { tpCategoryUpdate, tpCategoryInsert } from "../types/pages/tpCategory";

const LISTING_ROUTE = "/categories/";

export const apGetListings = ():TDefaultResponse => srAjax.get(utRoute(LISTING_ROUTE));

export const apInsertCategory = (data:tpCategoryInsert):TDefaultResponse => srAjax.post(utRoute(LISTING_ROUTE), data);

export const apUpdateCategory = (data:tpCategoryUpdate):TDefaultResponse => srAjax.put(utRoute(LISTING_ROUTE), data);

export const apDeleteCategory = (data:tpCategoryUpdate):TDefaultResponse => srAjax.post(
  utRoute(LISTING_ROUTE + data.cUuid), data,
);
