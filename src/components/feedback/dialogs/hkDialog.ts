import { createElement } from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { CpDialog1, CpDialog2, CpDialog3 } from "../../../shared/moduleImports/utModuleImports";
import { TDialog1, TDialog2, TDialog3 } from "./tpDialog";

const elId = "dialog-mount-placeholder";

type PropTypes = Partial<Pick<TDialog2, "title"|"children">>;
type TDialogProps = Partial<TDialog1|TDialog2|TDialog3>;
type THookReturnType = [
  (dialogProps: TDialogProps, type: "dialog1"|"dialog2"|"dialog3") => void,
  () => void
]

const hkGetDialogByType = (type: "dialog1"|"dialog2"|"dialog3" = "dialog2") => {
  if (type === "dialog1") return CpDialog1;
  if (type === "dialog3") return CpDialog3;
  return CpDialog2;
};

const hkGetNodeToAppend = () => document.getElementById(elId);

const hkCreatePlaceholder = () => {
  const el = document.createElement("div");
  el.id = elId;
  document.body.appendChild(el);
  return el;
};

const hkUseDialog = ({
  title, children,
}: PropTypes):THookReturnType => {
  const hkClose = () => {
    const el = hkGetNodeToAppend();
    if (el) unmountComponentAtNode(el);
  };

  const hkDisplay = ({ children: Children, ...dialogProps }: TDialogProps, type: "dialog1"|"dialog2"|"dialog3") => {
    const target = hkGetNodeToAppend() || hkCreatePlaceholder();
    const props = {
      title,
      ...dialogProps,
      open: true,
    } as TDialog1|TDialog2;

    const el = createElement(hkGetDialogByType(type), props, children || Children);
    render(el, target);
  };

  return [hkDisplay, hkClose];
};

export default hkUseDialog;
