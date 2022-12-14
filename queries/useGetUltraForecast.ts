import { withAxios } from '$utils/withAxios';
import { BaseResponse } from '$types/BaseResponse';
import { API_ROUTES } from '$constants/routes';
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { Querykeys } from '$constants/querykeys';
import { UltraForecastType } from '$types/BeachWeather/UltraForecastType';
import { getCurrentHHMMMinusOne, getCurrentYYYYMMDD, getYtdYYYYMMDD } from '$utils/date';
import moment from 'moment';

export interface UltraForecastProps {
  pageNo: number;
  numOfRows: number;
  dataType: string;
  base_date: string;
  base_time: string;
  beach_num: number;
}

export const getUltraForecastFetch = async (beach_num: number) => {
  const currentTime = parseInt(moment().format('HH'));
  const props: UltraForecastProps = {
    pageNo: 1,
    numOfRows: 60,
    dataType: 'JSON',
    base_time: getCurrentHHMMMinusOne(),
    base_date: 0 <= currentTime && currentTime <= 1 ? getYtdYYYYMMDD() : getCurrentYYYYMMDD(),
    beach_num: beach_num,
  };
  return await withAxios<BaseResponse<UltraForecastType>>({
    url: `${API_ROUTES.BEACH.WEATHER.ULTRA.FORECAST}`,
    params: {
      numOfRows: props.numOfRows,
      pageNo: props.pageNo,
      dataType: props.dataType,
      beach_num: props.beach_num,
      base_date: props.base_date,
      base_time: props.base_time,
    },
  });
};
export const UseGetUltraForecast = (
  beach_num: number,
  options?: UseQueryOptions<BaseResponse<UltraForecastType>, AxiosError, BaseResponse<UltraForecastType>, string[]>,
): UseQueryResult<BaseResponse<UltraForecastType>, AxiosError> =>
  useQuery([`${beach_num}`, ...Querykeys.BEACH.WEATHER.ULTRA.FORECAST], () => getUltraForecastFetch(beach_num), {
    ...options,
  });
/**
 *  폐기로 알고 있습니다.
 *  beachNum: string;
 *   baseDate: string;
 *   baseTime: string;
 *   category: string;
 *   fcstDate: string;
 *   fcstTime: string;
 *   fcstValue: string;
 *   nx: string;
 *   ny: string;
 */
