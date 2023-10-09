import { NavLinkProps } from "react-router-dom";
import RouterHistory from "history";
import { tpComponentCommon } from "./tpComponentShared";

export type tpRouterHistory = RouterHistory.History;
export type tpLinkBase = tpComponentCommon;
export type tpRouterLink = tpLinkBase&NavLinkProps;
