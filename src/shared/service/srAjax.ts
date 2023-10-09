export type RequestMethodTypes = "GET" | "POST" | "PUT" | "DELETE";
export type DefaultResponseDataType = { message: string};
export type DefaultAjaxRespType <T = DefaultResponseDataType> = Promise<IAjaxResponse<T>>;

type tpDefaultHeaders = {
  Accept: string,
};
export interface IAjaxResponse <T> {
  header?: HeadersInit,
  body: T,
  status?: number
}

class SrAjax {
  static basicHeaders = { "Content-Type": "application/json" };
  static getDefaultFetchHeaders(): tpDefaultHeaders {
    return ({
      Accept: "*/*",
    });
  }

  static api<Req extends BodyInit, Res>(
    url: string, method: RequestMethodTypes, headers = {}, reqBody:Req|string|null = null,
  ):Promise<IAjaxResponse<Res>> {
    let responseHeaders: Headers;
    let responseStatus: number;

    return fetch(url, {
      headers: { ...this.getDefaultFetchHeaders(), ...headers },
      method,
      body: reqBody,
      credentials: "include",
    })
      .then((res) => {
        responseHeaders = res.headers;
        responseStatus = res.status;
        const type: string | null = res.headers.get("content-type");
        if (type && type.includes("application/json")) {
          return res.json();
        }
        return res.text();
      })
      .then((body) => ({ headers: responseHeaders, body, status: responseStatus }));
  }

  static get<T>(url: string, headers: HeadersInit = SrAjax.basicHeaders):DefaultAjaxRespType<T> {
    return SrAjax.api(url, "GET", headers);
  }

  static post<T, Res = DefaultResponseDataType>(url: string, body: T, headers: HeadersInit = SrAjax.basicHeaders)
    :DefaultAjaxRespType<Res> {
    return SrAjax.api(url, "POST", headers, JSON.stringify(body));
  }

  static postFile<Req extends BodyInit, Res = DefaultResponseDataType>(
    url: string, reqBody:Req, headers: HeadersInit = SrAjax.basicHeaders,
  ) :DefaultAjaxRespType<Res> {
    return SrAjax.api<Req, Res>(url, "POST", headers, reqBody);
  }

  static put<T, Res = DefaultResponseDataType>(url: string, body: T, headers: HeadersInit = SrAjax.basicHeaders)
    :DefaultAjaxRespType<Res> {
    return SrAjax.api(url, "PUT", headers, JSON.stringify(body));
  }

  static del<Res = DefaultResponseDataType>(url: string, headers: HeadersInit = SrAjax.basicHeaders)
    :DefaultAjaxRespType<Res> {
    return SrAjax.api(url, "DELETE", headers);
  }
}

export default SrAjax;
