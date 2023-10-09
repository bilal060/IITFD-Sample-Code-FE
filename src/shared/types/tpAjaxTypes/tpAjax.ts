type TAjaxResponse<T> = {
  header?: HeadersInit,
  body: T,
  status?: number
}

export type TDefaultResponse<T = unknown> = Promise<TAjaxResponse<{
  message: string,
  data: T
}>>
