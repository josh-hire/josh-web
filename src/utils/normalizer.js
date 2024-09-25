import { NUMBER } from './regex';

export const normalizeNPWP = (value) => {
  if (!value) {
    return value;
  }

  const onlyNums = value.replace(/[^\d]/g, ''); //NOSONAR
  if (onlyNums.length <= 2) {
    return `${onlyNums}`;
  }

  const firstPart = onlyNums.slice(0, 2);
  const secondPart = onlyNums.slice(2, 5);
  if (onlyNums.length <= 5) {
    return `${firstPart}.${secondPart}`;
  }

  const thirdPart = onlyNums.slice(5, 8);
  if (onlyNums.length <= 8) {
    return `${firstPart}.${secondPart}.${thirdPart}`;
  }

  const fourthPart = onlyNums.slice(8, 9);
  if (onlyNums.length <= 9) {
    return `${firstPart}.${secondPart}.${thirdPart}.${fourthPart}`;
  }

  const fifthPart = onlyNums.slice(9, 12);
  if (onlyNums.length <= 12) {
    return `${firstPart}.${secondPart}.${thirdPart}.${fourthPart}-${fifthPart}`;
  }

  const sixthPart = onlyNums.slice(12, 15);
  return `${firstPart}.${secondPart}.${thirdPart}.${fourthPart}-${fifthPart}.${sixthPart}`;
};

export const normalizeNumber = (value) => value.replace(NUMBER, '');

export const normalizePhoneNumber = (phoneNumber = '') => {
  const formatted = phoneNumber.replace('0', '+62 ');
  return formatted;
};

export const normalizeRupiah = (value, sparator, prefix) => {
  if (!value) {
    return `${prefix || 'Rp. 0'}`;
  }

  const val = normalizeNumber(value).replace(/\B(?=(\d{3})+(?!\d))/g, sparator || ','); //NOSONAR

  if (value && value?.length > 13) {
    return `${prefix || 'Rp.'} ${val?.toString().substring(0, 4)}T`;
  }
  return `${prefix || 'Rp.'} ${val}`;
};

export const normalizeName = (value) => {
  return value.replace(/[^a-z]/gi, ''); //NOSONAR
};

export const formatNumber = (x, sparator = '.') => {
  const parts = x.toString().split('.');

  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, sparator); //NOSONAR
  return parts.join('.');
};
