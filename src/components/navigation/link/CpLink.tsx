import React from "react";
import { tpComponentCommon } from "../../../shared/types/component/tpComponentShared";
import { CpLink } from "../../../shared/moduleImports/utModuleImports";

type PropTypes = tpComponentCommon&{href: string};

const CpLinkComp = ({ children, className, href }: PropTypes):JSX.Element => (
  <CpLink href={href} className={className}>{children}</CpLink>
);

export default CpLinkComp;
