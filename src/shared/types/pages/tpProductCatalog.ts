import {
  TGridColDef,
  TGridRenderCellParams,
} from "../tpTypesImports";
import { tpCatalog } from "./tpCatalog";
import { tpProduct } from "./tpProduct";

export type tpProductCatalogUpdate = {
    pcUuid: string,
    pcCatalogId: string,
    pcProductId: string,
}

export type tpProductCatalog = {
    pcUuid: string,
    id: string,
    pcProductId:string,
    pName: string,
    pPrice: string,
    pcCatalogId: string,
    cName: string,
}
export type tpProductCatalogInsert = {
    pcCatalogId: string,
    pcProductId: string,

}

export type tpProductCatalogPageRender = {
    open: boolean;
    setOpen: (open:boolean) => void;
    row: tpProductCatalog;
    rows: tpProductCatalog[];
    setRow: (row: tpProductCatalog) => void;
    setRows: (row: tpProductCatalog[]) => void;
    columns: TGridColDef[];
    products: tpProduct[];
    catalogues: tpCatalog[];
  }
export type tpModalProps = {
    open: boolean;
    onClose: () => void;
    row: tpProductCatalog;
    setRow: (row:tpProductCatalog) => void;
    cpUpdateState: (row: tpProductCatalog, rows: tpProductCatalog[], setRows: (rows: tpProductCatalog[])=> void) => void;
    cpInsert: (row: tpProductCatalog, rows: tpProductCatalog[], setRows: (rows: tpProductCatalog[])=> void) => void;
    rows: tpProductCatalog[];
    setRows: (rows: tpProductCatalog[])=> void;
    products: tpProduct[];
    catalogues: tpCatalog[];
};

export type tpModalFunctionProps = {
  data:tpProductCatalogInsert,
  setRow: (row: tpProductCatalog) => void,
  onClose: () => void;
  reset: (row: tpProductCatalogInsert) => void;
  rows: tpProductCatalog[];
  setRows: (rows: tpProductCatalog[])=> void;
  products: tpProduct[];
  catalogues: tpCatalog[];
}

export type tpModaForm = {
    productsTemp: {
        value: string,
        label: string,
    }[];
    cataloguesTemp: {
        value: string,
        label: string,
    }[];
}

export type tpIndex = { [key: string]: string };

export type tpActionButtons = {
    cpDeleteProductCatalog: (row: tpProductCatalog) => void;
    cpOpenDetailModal: (e: tpProductCatalog) => void;
    data: TGridRenderCellParams;
  };
