import * as React from "react";
import { HTMLAttributes } from "react";

export type tpElements = React.ElementType;

export type tpComponentCommon = Partial<{
  children: JSX.Element|JSX.Element[]|string,
  className: string,
  component?: tpElements | string,
  to?: string,
  id?: HTMLAttributes<string>["id"];
}>;

export type tpButton = "button"|"submit"|"reset";
