import utRoute from "../utils/utAjax";
import srAjax from "../service/srAjax";
import { TDefaultResponse } from "../types/tpAjaxTypes/tpAjax";
import { tpProductUpdate, tpProductInsert } from "../types/pages/tpProduct";

const LISTING_ROUTE = "/products/";
const CATEGORIESLIST_ROUTE = "/products/categories/";

export const apGetListings = ():TDefaultResponse => srAjax.get(utRoute(LISTING_ROUTE));

export const apGetCategoriesList = ():TDefaultResponse => srAjax.get(utRoute(CATEGORIESLIST_ROUTE));

export const apInsertProduct = (data:tpProductInsert):TDefaultResponse => srAjax.post(utRoute(LISTING_ROUTE), data);

export const apUpdateProduct = (data:tpProductUpdate):TDefaultResponse => srAjax.put(utRoute(LISTING_ROUTE), data);

export const apDeleteProduct = (data:tpProductUpdate):TDefaultResponse => srAjax.post(
  utRoute(LISTING_ROUTE + data.pUuid), data,
);
