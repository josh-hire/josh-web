import {
  validateRequired,
  passwordRequirement,
  stringOnly,
  numberOnly,
  limitLengthMax,
  limitLengthMin,
  noWhiteSpaceStart,
  emailRegex,
  validateEmail,
  charRegex,
  numberRegex,
  noWhiteSpaceRegex,
} from '../validate';

describe('Utils/validate', () => {
  test('validateRequired negative case', () => {
    expect(validateRequired()(undefined)).toBe('This Field Required');
  });
  test('validateRequired positive case', () => {
    expect(validateRequired()('test')).toBeUndefined();
  });
  test('passwordRequirement emptyValue case', () => {
    const a = passwordRequirement();
    expect(a).toStrictEqual([
      { re: false, label: 'Minimal 8 karakter' },
      { re: false, label: 'Ada huruf kapital' },
      { re: false, label: 'Ada angka dan simbol' },
    ]);
  });
  test('passwordRequirement with Number and symbol case', () => {
    const a = passwordRequirement('1111$$$$');
    expect(a).toStrictEqual([
      { re: true, label: 'Minimal 8 karakter' },
      { re: false, label: 'Ada huruf kapital' },
      { re: true, label: 'Ada angka dan simbol' },
    ]);
  });

  test('test validate stringOnly', () => {
    const a = stringOnly('masukkan hanya huruf')(123);
    expect(a).toBe('masukkan hanya huruf');
  });

  test('test validate numberOnly', () => {
    const a = numberOnly('masukkan hanya angka')('sandi');
    expect(a).toBe('masukkan hanya angka');
  });

  test('test validate limitLengthMax', () => {
    const a = limitLengthMax('tidak boleh lebih dari 10 karakter', 10)('testing limit');
    expect(a).toBe('tidak boleh lebih dari 10 karakter');
  });

  test('test validate limitLengthMin', () => {
    const a = limitLengthMin('tidak boleh kurang dari 10 karakter', 10)('testing');
    expect(a).toBe('tidak boleh kurang dari 10 karakter');
  });

  test('test validate noWhiteSpaceStart', () => {
    const a = noWhiteSpaceStart('tidak boleh ada spasi di awal')(' testing');
    expect(a).toBe('tidak boleh ada spasi di awal');
  });

  test('test validate validateEmail', () => {
    const a = validateEmail('email tidak valid')('ali@yopmail');
    expect(a).toBe('email tidak valid');
  });

  test('test validate emailRegex', () => {
    const a = emailRegex('testing@yopmail.com');
    expect(a).toBe(true);
  });

  test('test validate charRegex', () => {
    const a = charRegex('test');
    expect(a).toBe(true);
  });

  test('test validate numberRegex', () => {
    const a = numberRegex(1234);
    expect(a).toBe(true);
  });

  test('test validate noWhiteSpaceRegex', () => {
    const a = noWhiteSpaceRegex('testing data');
    expect(a).toBe(true);
  });
});
