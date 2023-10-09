type tpAjaxResponse<T> = {
  header?: HeadersInit,
  body: T,
  status?: number
}

export type tpDefaultResponse <T = unknown> = Promise<tpAjaxResponse<{
  message: string,
  data: T
}>>

export type tpListResponse <T> = Promise<tpAjaxResponse<{
  message: string,
  data: {
    list: T[],
    total: number,
  }
}>>;

export type tpLoginResponse <T = unknown> = Promise<tpAjaxResponse<{
  message: string,
  data: {
    redirect: string,
    others: T,
  }
}>>;
