/* eslint-disable max-len */
/* eslint-disable indent */
export const validateRequired = (message = 'This Field Required') => {
  return (value) => (value ? undefined : message);
};

export const passwordRequirement = (value = '') => [
  {
    re: value.length >= 8, // NOSONAR
    label: 'Minimal 8 karakter',
  },
  {
    re: /[A-Z]/.test(value), // NOSONAR
    label: 'Ada huruf kapital',
  },
  {
    re: /[0-9]/.test(value) && /[$&+,:;=?@#|'<>.^*()%!-]/.test(value), // NOSONAR
    label: 'Ada angka dan simbol',
  },
];

export const composeValidators =
  (...validators) =>
  (value) =>
    validators.reduce(function (error, validator) {
      return error || validator(value);
    }, undefined);

export const required = (message) => (value) => !value ? message : undefined;

export const stringOnly = (message) => (value) => !charRegex(value) ? message : '';

export const numberOnly = (message) => (value) => !numberRegex(value) ? message : '';

export const limitLengthMax = (message, max) => (value) => !(value.length <= max) ? message : '';

export const limitLengthMin = (message, max) => (value) => !(value.length > max) ? message : '';

export const noWhiteSpaceStart = (message) => (value) => !noWhiteSpaceRegex(value) ? message : '';

export const validateEmail = (message) => (value) => !emailRegex(value) ? message : '';

export const emailRegex = (value) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value); // NOSONAR
export const charRegex = (value) => /^[A-Za-z\s]+$/.test(value); // NOSONAR
export const numberRegex = (value) => /^[0-9]+$/.test(value); // NOSONAR
export const noWhiteSpaceRegex = (value) => /^(?! ).*[^]$/.test(value); // NOSONAR
