import {
  TGridRenderCellParams,
} from "../tpTypesImports";

export type tpCategoryUpdate = {
    cUuid:string,
    cName: string
}

export type tpCategory = {
    cUuid:string,
    id: string,
    cName: string
}
export type tpCategoryInsert = {
    cName: string
}

export type tpCategoryPageRender = {
    open: boolean;
    setOpen: (open:boolean) => void;
    row: tpCategory;
    rows: tpCategory[];
    setRow: (row: tpCategory) => void;
    setRows: (row: tpCategory[]) => void;
  }
export type tpModalProps = {
    open: boolean;
    onClose: () => void;
    row: tpCategory;
    setRow: (row:tpCategory) => void;
    cpUpdateState: (row: tpCategory, rows: tpCategory[], setRows: (rows: tpCategory[])=> void) => void;
    cpInsert: (row: tpCategory, rows: tpCategory[], setRows: (rows: tpCategory[])=> void) => void;
    rows: tpCategory[];
    setRows: (rows: tpCategory[])=> void;
};

export type tpModalFunctionProps = {
  data:tpCategoryInsert,
  setRow: (row: tpCategory) => void,
  onClose: () => void;
  reset: (row: tpCategoryInsert) => void;
  rows: tpCategory[];
  setRows: (rows: tpCategory[])=> void;
}

export type tpIndex = { [key: string]: string };

export type tpActionButtons = {
  cpDeleteCategory: (row: tpCategory) => void;
  cpOpenDetailModal: (e: tpCategory) => void;
  data: TGridRenderCellParams;
};
