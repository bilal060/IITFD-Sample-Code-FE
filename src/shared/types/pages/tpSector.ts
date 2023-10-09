import { dtAddSectorsColumns } from "../../../pages/sector/dtSectorPage";
import { tpAutoCompleteValue } from "../tpInput";

export type tpSector = {
  id: string,
  sector: string,
}

export type tpSubSector = {
  id: string,
  subSector: string,
}

export type tpSelectedSectors = {
  id: string,
  selectedSector: string,
  selectedSubSector: string,
}

export type tpAddSector =
  tpSector |
  tpSubSector |
  tpSelectedSectors;

export type tpSectorTableWithFilters = {
  rows: tpAddSector[],
  columns: dtAddSectorsColumns,
  size: number,
  title?: string,
  options?: tpAutoCompleteValue[],
  addButton?: boolean,
}
