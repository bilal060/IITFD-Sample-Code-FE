import { tpCategory } from "./tpCategory";
import {
  TGridColDef,
  TGridRenderCellParams,
} from "../tpTypesImports";

export type tpProductUpdate = {
    pUuid: string,
    pCategoryId: string,
    pName: string,
    pPrice: string,
}

export type tpProduct = {
    pUuid: string,
    id: string,
    pCategoryId: string,
    pName: string,
    pPrice: string,
    cName: string,
}
export type tpProductInsert = {
    pCategoryId: string,
    pName: string,
    pPrice: string,

}

export type tpProductPageRender = {
    open: boolean;
    setOpen: (open:boolean) => void;
    row: tpProduct;
    rows: tpProduct[];
    setRow: (row: tpProduct) => void;
    setRows: (row: tpProduct[]) => void;
    columns: TGridColDef[];
    categories: tpCategory[];
  }
export type tpModalProps = {
    open: boolean;
    onClose: () => void;
    row: tpProduct;
    setRow: (row:tpProduct) => void;
    cpUpdateState: (row: tpProduct, rows: tpProduct[], setRows: (rows: tpProduct[])=> void) => void;
    cpInsert: (row: tpProduct, rows: tpProduct[], setRows: (rows: tpProduct[])=> void) => void;
    categories: tpCategory[];
    rows: tpProduct[];
    setRows: (rows: tpProduct[])=> void;
};

export type tpModalFunctionProps = {
  data:tpProductInsert,
  setRow: (row: tpProduct) => void,
  onClose: () => void;
  reset: (row: tpProductInsert) => void;
  rows: tpProduct[];
  setRows: (rows: tpProduct[])=> void;
  categories: tpCategory[];
}

export type tpModaForm = {
    temp: {
        value: string,
        label: string,
    }[];
}

export type tpIndex = { [key: string]: string };

export type tpActionButtons = {
    cpDeleteProduct: (row: tpProduct) => void;
    cpOpenDetailModal: (e: tpProduct) => void;
    data: TGridRenderCellParams;
  };
