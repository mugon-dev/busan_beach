import { AxiosResponse } from 'axios';
import { BaseResponse } from '$types/BaseResponse';

interface XmlType {
  OpenAPI_ServiceResponse: cmmMsgHeader;
}

interface cmmMsgHeader {
  errMsg: string;
  returnAuthMsg: string;
  returnReasonCode: string;
}

export function ClientApiErrorInterceptor<T>(res: AxiosResponse<BaseResponse<T>>) {
  // if (res.headers['content-type'] == 'text/xml;charset=UTF-8') {
  //   const parser = new XMLParser();
  //   let parsed: XmlType = parser.parse(res as unknown as string);
  //   if (Object.prototype.hasOwnProperty.call(ErrorResponse, parsed.OpenAPI_ServiceResponse.returnReasonCode)) {
  //     throw new CommonApiError(parsed.OpenAPI_ServiceResponse.returnReasonCode as Errorcode);
  //   }
  // }
  // } else if (res.data.response) {
  //   const code = res.data.response.header.resultCode;
  //   if (Object.prototype.hasOwnProperty.call(ErrorResponse, code)) {
  //     throw new CommonApiError(code as Errorcode);
  //   }
  // }
  return res.data;
}
