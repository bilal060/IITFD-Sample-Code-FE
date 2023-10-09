import utRoute from "../utils/utAjax";
import srAjax from "../service/srAjax";
import { TDefaultResponse } from "../types/tpAjaxTypes/tpAjax";
import { tpUserUpdate } from "../types/pages/tpUserListing";

const LISTING_ROUTE = "/user-listings";
const UPDATE_STATUS_ROUTE = "/user-listings/status";

export const apGetListings = ():TDefaultResponse => srAjax.get(utRoute(LISTING_ROUTE));

export const apUpdateUserStatus = (data:tpUserUpdate):TDefaultResponse => srAjax.put(utRoute(UPDATE_STATUS_ROUTE), data);
