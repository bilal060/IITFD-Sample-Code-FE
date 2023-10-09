export type tpTermsChildProps = {
  descriptionElementRef?: React.RefObject<HTMLElement>,
  active: string,
  srHandleActive?: (avtive: string) => void,
  changeActive: boolean,
  setChangeActive: (changeActive: boolean) => void,
  agree?: boolean,
  setAgree?: (agree: boolean) => void,
  srHandleChangeActive?: () => void,
}
