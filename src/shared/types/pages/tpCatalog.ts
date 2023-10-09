import {
  TGridRenderCellParams,
} from "../tpTypesImports";

export type tpCatalogUpdate = {
    ctUuid: string,
    cName: string
}

export type tpCatalog = {
    ctUuid: string,
    id: string,
    cName: string
}
export type tpCatalogInsert = {
    cName: string
}

export type tpCatalogPageRender = {
    open: boolean;
    setOpen: (open:boolean) => void;
    row: tpCatalog;
    rows: tpCatalog[];
    setRow: (row: tpCatalog) => void;
    setRows: (row: tpCatalog[]) => void;
  }
export type tpModalProps = {
    open: boolean;
    onClose: () => void;
    row: tpCatalog;
    setRow: (row:tpCatalog) => void;
    cpUpdateState: (row: tpCatalog, rows: tpCatalog[], setRows: (rows: tpCatalog[])=> void) => void;
    cpInsert: (row: tpCatalog, rows: tpCatalog[], setRows: (rows: tpCatalog[])=> void) => void;
    rows: tpCatalog[];
    setRows: (rows: tpCatalog[])=> void;
};

export type tpModalFunctionProps = {
  data:tpCatalogInsert,
  setRow: (row: tpCatalog) => void,
  onClose: () => void;
  reset: (row: tpCatalogInsert) => void;
  rows: tpCatalog[];
  setRows: (rows: tpCatalog[])=> void;
}

export type tpIndex = { [key: string]: string };

export type tpActionButtons = {
    cpDeleteCatalog: (row: tpCatalog) => void;
    cpOpenDetailModal: (e: tpCatalog) => void;
    data: TGridRenderCellParams;
};
