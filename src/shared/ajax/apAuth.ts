import { tpRegister, tpVerifyEmail, tpLogin } from "../types/pages/tpAuth";
import { tpDefaultResponse, tpLoginResponse } from "../types/ajax/tpAjax";
import utRoute from "../utils/utAjax";
import SrAjax from "../service/srAjax";

const signupRoute = "/auth/signup";
const verifyEmail = "/auth/verifyEmail";
const loginRoute = "/auth/login";

export const apAuthRegister = (data: tpRegister): tpDefaultResponse => SrAjax.post(utRoute(signupRoute), data);
export const apVerifyEmail = (data: tpVerifyEmail): tpDefaultResponse => SrAjax.post(utRoute(verifyEmail), data);
export const apLogin = (data: tpLogin): tpLoginResponse => SrAjax.post(utRoute(loginRoute), data);
