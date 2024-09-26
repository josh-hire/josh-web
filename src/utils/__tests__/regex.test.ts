import * as regex from '../regex';

describe('src/utils/regex', () => {
  test('Regex test Number', () => {
    const regmatchNumber = '1234';
    const regNumber = regmatchNumber.match(regex.NUMBER);
    expect(regNumber).toBe(null);
  });

  test('Regex test Name', () => {
    const regMatchName = 'ALI';
    const regName = regex.NAME.test(regMatchName);
    expect(regName).toBe(true);
  });

  test('Regex test NIK', () => {
    const regMatchNIK = '1234567891234523';
    const regNIK = regex.NIK.test(regMatchNIK);
    expect(regNIK).toBe(true);
  });

  test('Regex test PREFIX_LICENSE_NUMBER', () => {
    const regMatchPREFIX_LICENSE_NUMBER = 'ZA';
    const regPREFIX_LICENSE_NUMBER = regex.PREFIX_LICENSE_NUMBER.test(
      regMatchPREFIX_LICENSE_NUMBER,
    );
    expect(regPREFIX_LICENSE_NUMBER).toBe(true);
  });

  test('Regex test MIDDLE_LICENSE_NUMBER', () => {
    const regMatchMIDDLE_LICENSE_NUMBER = '1234';
    const regMIDDLE_LICENSE_NUMBER = regex.MIDDLE_LICENSE_NUMBER.test(
      regMatchMIDDLE_LICENSE_NUMBER,
    );
    expect(regMIDDLE_LICENSE_NUMBER).toBe(true);
  });

  test('Regex test SUFFIX_LICENSE_NUMBER', () => {
    const regMatchSUFFIX_LICENSE_NUMBER = 'SPOI';
    const regSUFFIX_LICENSE_NUMBER = regex.SUFFIX_LICENSE_NUMBER.test(
      regMatchSUFFIX_LICENSE_NUMBER,
    );
    expect(regSUFFIX_LICENSE_NUMBER).toBe(true);
  });

  test('Regex test PHONE_NUMBER', () => {
    const regMatchPHONE_NUMBER = '08293839389';
    const regPHONE_NUMBER = regex.PHONE_NUMBER.test(regMatchPHONE_NUMBER);
    expect(regPHONE_NUMBER).toBe(true);
  });

  test('Regex test PHONE_NUMBER_LEADING_ZERO ', () => {
    const regMatchPHONE_NUMBER_LEADING_ZERO = '0812392827';
    const regPHONE_NUMBER_LEADING_ZERO = regex.PHONE_NUMBER_LEADING_ZERO.test(
      regMatchPHONE_NUMBER_LEADING_ZERO,
    );
    expect(regPHONE_NUMBER_LEADING_ZERO).toBe(true);
  });

  test('Regex test EMAIL', () => {
    const regMatchEMAIL = 'ali@yopmail.com';
    const regEMAIL = regex.EMAIL.test(regMatchEMAIL);
    expect(regEMAIL).toBe(true);
  });

  test('Regex test CURRENCY', () => {
    const regMatchCURRENCY = '2000';
    const regCURRENCY = regex.CURRENCY.test(regMatchCURRENCY);
    expect(regCURRENCY).toBe(true);
  });
});
