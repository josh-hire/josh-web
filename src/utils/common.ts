/* eslint-disable indent */
import NProgress from 'nprogress';
import Router from 'next/router';

export function Nprogress() {
  Router.events.on('routeChangeStart', () => {
    NProgress.start();
  });
  Router.events.on('routeChangeComplete', () => {
    NProgress.done();
  });
  Router.events.on('routeChangeError', () => NProgress.done());
}

export function getSizeValue(_size) {
  const fSExt = new Array('Bytes', 'KB', 'MB', 'GB');
  let i = 0;
  while (_size > 900) {
    _size /= 1024;
    i++;
  }

  return Math.round(_size * 100) / 100 + ' ' + fSExt[i];
}

export function generateArrayOfYears() {
  const max = new Date().getFullYear();
  const min = max - 150;
  const years = [];

  for (let i = max; i >= min; i--) {
    years.push(i.toString());
  }

  return years;
}

export const noop = () => { };

export function toTitleCase(str = '', replaceValue, stringCheck, isMobile) {
  let _str = str;
  if (replaceValue || stringCheck?.length) {
    _str = stringCheck?.includes(str) ? replaceValue : str;
  }

  return _str?.replace(/\w\S*/g, (txt) => {
    return txt?.charAt(0).toUpperCase() + txt?.substring(1).toLowerCase();
  });
}

export const generateMetaData = (data) =>
  JSON.stringify({
    title: data?.title,
    description: data?.meta?.description,
    image: data?.thumbnailUrl,
    keywords: data?.meta?.keywords?.toString(),
  });


export const generateYears = (startYear: number = 1970): number[] =>{
  const currentYear = new Date().getFullYear();
  const years: number[] = [];

  for (let year = startYear; year <= currentYear; year++) {
    years.push(year);
  }

  return years;
}

export const generateMonths = (): string[] => {
  const months: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return months;
}
