import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import DefaultLayout from 'Modules/Layout/DefaultLayout';
import ContactUsModule from 'Modules/Landing/ContactUs';

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

export const getServerSideProps: GetServerSideProps<ContactUsPageProps> = async () => {
  return {
    props: {
      data: {
        title: 'Contact Us - PT_joshweb',
        meta: {
          description:
            'Channel komunikasi PT_joshweb! Berisikan form untuk mempermudah pemain Digital menghubungi PT_joshweb dengan lebih cepat.',
        },
      },
    },
  };
};

const ContactUs = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <DefaultLayout>
      <ContactUsModule />
    </DefaultLayout>
  );
};

export default ContactUs;
