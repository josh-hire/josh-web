export interface MetaRegisterProps {
  description: string;
}

export interface DataRegisterProps {
  title: string;
  meta: MetaRegisterProps;
}

export interface RegisterPageProps {
  data: DataRegisterProps;
}
