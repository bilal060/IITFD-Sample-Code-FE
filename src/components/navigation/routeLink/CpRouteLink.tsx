import React from "react";
import { NavLink } from "react-router-dom";
import { tpRouterLink } from "../../../shared/types/component/tpNavigation";
import { CpLink } from "../../../shared/moduleImports/utModuleImports";

type PropTypes = tpRouterLink;

const CpRouteLink = ({ children, className, to }: PropTypes):JSX.Element => (
  <CpLink component={NavLink} className={className} to={to}>{children}</CpLink>
);

export default CpRouteLink;
