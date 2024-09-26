// types/contact.ts
export interface MetaContactUsProps {
  description: string;
}

export interface DataContactUsProps {
  title: string;
  meta: MetaContactUsProps;
}

export interface ContactUsPageProps {
  data: DataContactUsProps;
}
