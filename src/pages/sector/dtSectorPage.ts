import { tpSector, tpSelectedSectors, tpSubSector } from "../../shared/types/pages/tpSector";

export const dtSegmentColumns = [
  { field: "sector", headerName: "Sector", width: 120 },
];

export const dtFamilyColumns = [
  { field: "subSector", headerName: "Sub Sector", width: 200 },
];

export const dtSelectedSectorsColumns = [
  { field: "selectedSector", headerName: "Selected Sector", width: 250 },
  { field: "selectedSubSector", headerName: "Selected Sub Sector", width: 250 },
];

export const dtSectorRows: tpSector[] = [
  {
    id: "1",
    sector: "Logistics",
  },
];
export const dtSubSectorRows: tpSubSector[] = [
  {
    id: "1",
    subSector: "SeaWay",
  },
];
export const dtSelectedSectorsRows: tpSelectedSectors[] = [
  {
    id: "1",
    selectedSector: "Logistics",
    selectedSubSector: "SeaWay",
  },
];

export type dtAddSectorsColumns =
  typeof dtSegmentColumns |
  typeof dtFamilyColumns |
  typeof dtSelectedSectorsColumns;
