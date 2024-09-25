import * as common from '../common';

jest.mock('next/router', () => ({
  route: '/',
  pathname: '',
  query: '',
  asPath: '',
  push: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
  },
  beforePopState: jest.fn(() => null),
  prefetch: jest.fn(() => null),
}));

describe('src/utils/common', () => {
  test('Nprogress', () => {
    const result = common.Nprogress();
    expect(result).toBe(undefined);
  });

  test('getSizeValue< 900', () => {
    const result = common.getSizeValue(10);
    expect(result).toBe('10 Bytes');
  });

  test('getSizeValue > 900', () => {
    const result = common.getSizeValue(1000);
    expect(result).toBe('0.98 KB');
  });

  test('generateArrayOfYears', () => {
    const result = common.generateArrayOfYears(1000);
    expect(result).toHaveLength;
  });
});
