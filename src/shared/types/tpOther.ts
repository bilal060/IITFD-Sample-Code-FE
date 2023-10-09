import { ReactElement, Dispatch, SetStateAction } from "react";

export type TEmptyFn = () => void;
export type other = string;
export type tpFooterNav = {
  title: string,
  popUpTitle: string | null
}

export type tpDrawerItemsData = {
    icon: string | JSX.Element;
    title: string;
    indent: number;
    hidden?: boolean;
    items?: tpDrawerItemsData;
    slug?: string;
    to?: string;
    idx?: number;
    badge?: string;
  }[];

export type tpBasicCardBodyProps = {
    currentValue: string | ReactElement;
    totalFieldName?: string;
    totalValue?: string;
    percentageDif?: string;
  }

export type tpBasicCardProps = {
    title?: string;
    subTitle?: string;
    currentValue: string | ReactElement;
    image?: string;
    totalFieldName?: string;
    totalValue?: string;
    percentageDif?: string;
    cardClassName?: string;
    cardTitleClassName?: string;
  }
export type tpMenuItemSelected = (menuItem: tpDrawerItemsData[number]) => void;

export type tpSideMenuProps = {
  open?: boolean;
  onToggleDrawer?: () => void;
};

export type tpFooterDisplayProps={
  setDisplayPopUp:Dispatch<SetStateAction<string | null>>
}
export type tpFooterPopUpProps = {
  open:boolean,
  onClose: () => void;
}
