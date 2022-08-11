import moment from 'moment';

export const getCurrentYYYYMMDDHH = () => {
  return moment().format('YYYYMMDDHHMM');
};
export const getShortForecastDate = () => {
  const currentTime = parseInt(moment().format('HH'));
  if (0 <= currentTime && currentTime < 2) {
    return getYtdYYYYMMDD();
  }
  return getCurrentYYYYMMDD();
};

export const getDustDate = () => {
  const currentTime = parseInt(moment().format('HH'));
  if (0 <= currentTime && currentTime < 2) {
    return getYtdYYYYMMDD() + '24';
  }
  return getCurrentDayMinusHour();
};

export const getMediumYYYYMMDDHH = () => {
  const currentTime = parseInt(moment().format('HH'));
  if (0 <= currentTime && currentTime < 9) {
    return getYtdYYYYMMDD() + '18';
  }
  return getCurrentYYYYMMDD() + '06';
};
export const getCurrentYYYYMMDD = () => {
  return moment().format('YYYYMMDD');
};
export const getYtdYYYYMMDD = () => {
  return moment().subtract(1, 'day').format('YYYYMMDD');
};
export const getTmrwYYYYMMDD = () => {
  return moment().add(1, 'day').format('YYYYMMDD');
};
export const getCurrentHHMMMinusOne = () => {
  return moment().subtract(1, 'hour').format('HHMM');
};
export const getCurrentDayMinusHour = () => {
  return moment().subtract(1, 'hour').format('YYYYMMDDHH');
};
export const getCurrentDayMinusHourHHMM = () => {
  return moment().subtract(1, 'hour').format('YYYYMMDDHH');
};
export const getCurrentMonth = () => {
  const month = moment().format('MM');
  return month.replace(/(^0+)/, '');
};

export const getCurrentDate = () => {
  const day = moment().format('DD');
  return day.replace(/(^0+)/, '');
};

export const convertCurrentDay = () => {
  const Day = moment().day().toString();
  if (Day == '0') {
    return '일';
  } else if (Day == '1') {
    return '월';
  } else if (Day == '2') {
    return '화';
  } else if (Day == '3') {
    return '수';
  } else if (Day == '4') {
    return '목';
  } else if (Day == '5') {
    return '금';
  } else if (Day == '6') {
    return '토';
  }
};
export const convertHHtoInt = (): number => {
  return parseInt(moment().format('HH') + '00');
};

export const requestShortForecastHH = () => {
  const hh = convertHHtoInt();
  if (200 <= hh && hh < 500) {
    return '0200';
  } else if (500 <= hh && hh < 800) {
    return '0500';
  } else if (800 <= hh && hh < 1100) {
    return '0800';
  } else if (1100 <= hh && hh < 1400) {
    return '1100';
  } else if (1400 <= hh && hh < 1700) {
    return '1400';
  } else if (1700 <= hh && hh < 2000) {
    return '1700';
  } else {
    return '2000';
  }
};
