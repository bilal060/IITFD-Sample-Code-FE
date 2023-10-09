export type tpCreateBankInformation = {
  accountAlias: string,
  accountCurrency: string,
  ibanAccountNumber: string,
  swiftCode: string,
  bankName: string,
  branchCode: string,
  branchName: string,
  accountNumber: string,
  country: string,
  state: string,
  city: string,
  postalCode: string,
  line1: string,
  line2: string,
  intCode: number,
  areaCode: number,
  number: number,
  extension: number,
}

export type tpRenderInputFieldOptions = {
  value: string,
  label: string,
}

export type tpRenderInputFieldProps = {
  name: string,
  type: string,
  label: string,
  size: unknown,
  options?: tpRenderInputFieldOptions[],
}
