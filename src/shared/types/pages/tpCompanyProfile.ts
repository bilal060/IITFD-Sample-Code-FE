export type tpTabProps = {
    tabValue: number;
};

export type tpTabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
};
export type tpOperationDetailsPageProps = {
  tabValue: number,
  expanded: string | false,
  setExpanded: React.Dispatch<React.SetStateAction<string | false>>,
  srHandleAccordianExpandChange: (
    panel: string, setExpanded: React.Dispatch<React.SetStateAction<string | false>>,
    ) => (_event: React.SyntheticEvent, isExpanded: boolean) => void,
};

export type tpOperationDetailsProps = {
  param: {
    expanded: string | false,
    setExpanded: React.Dispatch<React.SetStateAction<string | false>>,
    srHandleAccordianExpandChange: (
      panel: string, setExpanded: React.Dispatch<React.SetStateAction<string | false>>,
      ) => (_event: React.SyntheticEvent, isExpanded: boolean) => void,
  },
};
