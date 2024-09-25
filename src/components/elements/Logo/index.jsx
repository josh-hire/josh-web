import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

export const Logo = () => {
  const {
    query: { hl: _hl },
  } = useRouter();

  const hl = !_hl ? 'id' : _hl;
  const isEng = hl === 'en';
  return (
    <Image
      alt="Logo PT_tester"
      fit="contain"
      height={46}
      src={isEng ? '/logo-top-en.svg' : '/logo-top.svg'}
      width={190}
    />
  );
};
