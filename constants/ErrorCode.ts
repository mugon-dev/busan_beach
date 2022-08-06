export type ErrorCode =
  | '01'
  | '02'
  | '03'
  | '04'
  | '05'
  | '10'
  | '11'
  | '12'
  | '20'
  | '21'
  | '22'
  | '30'
  | '31'
  | '32'
  | '33'
  | '99';

export const ErrorResponse: { [key in ErrorCode]: string } = {
  '01': '어플리케이션 에러',
  '02': '데이터베이스 에러',
  '03': '데이터없음 에러',
  '04': 'HTTP 에러',
  '05': '서비스 연결실패 에러',
  '10': '잘못된 요청 파라메터 에러',
  '11': '필수요청 파라메터가 없음',
  '12': '해당 오픈API서비스가 없거나 폐기됨',
  '20': '서비스 접근거부',
  '21': '일시적으로 사용할 수 없는 서비스 키',
  '22': '서비스 요청제한횟수 초과에러',
  '30': '등록되지 않은 서비스키',
  '31': '기한만료된 서비스키',
  '32': '등록되지 않은 IP',
  '33': '서명되지 않은 호출',
  '99': '기타에러',
};
