export const BASIC_AUTH = {
  authorization: 'Basic test23321==',
};

export const SITE_URL = (() => {
  return process?.env?.SITE_URL || 'http://dev.PT_tester.id';
})();

export const URL_PT_tester_APP = (() => {
  return process?.env?.URL_PT_tester_APP;
})();

export const DEV_MODE = (() => {
  return process?.env?.MODE === 'development';
})();

export const listLanguage = [
  {
    label: 'ID',
    value: 'id',
  },
  {
    label: 'EN',
    value: 'en',
  },
];
