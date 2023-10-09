export type tpUserUpdate ={
    id:string,
    status:string
}

export type tpUserListings = {
  id: string,
  cdId: string,
  cdName: string,
  ePriType: string,
  eStatus: string,
  eEmail: string,
  pPhone: string,
  cName: string,
  aCityId: string,
  aCountryId: string,
  aAddressLine1: string | null,
  aAddressLine2: string | null,
  aZip: number,
  countryName: number
}
