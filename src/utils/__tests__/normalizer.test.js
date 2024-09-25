import * as normalize from '../normalizer';

describe('src/utils/normalizer', () => {
  test('normalizeNPWP', () => {
    const defaultResult = normalize.normalizeNPWP('');
    expect(defaultResult).toBe('');

    const result1 = normalize.normalizeNPWP('12');
    expect(result1).toBe('12');

    const result2 = normalize.normalizeNPWP('12.345');
    expect(result2).toBe('12.345');

    const result3 = normalize.normalizeNPWP('12345678');
    expect(result3).toBe('12.345.678');

    const result4 = normalize.normalizeNPWP('123456789');
    expect(result4).toBe('12.345.678.9');

    const result5 = normalize.normalizeNPWP('123456789012');
    expect(result5).toBe('12.345.678.9-012');

    const result = normalize.normalizeNPWP('123456789012345');
    expect(result).toBe('12.345.678.9-012.345');
  });

  test('normalizeName', () => {
    const rupiah = normalize.normalizeName('namakusandi');
    expect(rupiah).toEqual('namakusandi');
  });

  test('normalizeNumber', () => {
    const number = normalize.normalizeNumber('asd1234');
    expect(number).toEqual('1234');
  });

  test('normalizeRupiah', () => {
    const rupiah = normalize.normalizeRupiah('1234');
    expect(rupiah).toEqual('Rp. 1,234');
  });

  test('normalizePhoneNumber', () => {
    const phoneNumber = normalize.normalizePhoneNumber('08123');
    expect(phoneNumber).toEqual('+62 8123');
  });
});
