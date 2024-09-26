import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import DefaultLayout from 'Modules/Layout/DefaultLayout';
import ContactUsModule from 'Modules/Landing/ContactUs';
import { ContactUsPageProps } from './contactUsModel';

export const getServerSideProps: GetServerSideProps<ContactUsPageProps> = async () => {
  return {
    props: {
      data: {
        title: 'Contact Us - PT_tester',
        meta: {
          description:
            'Channel komunikasi PT_tester! Berisikan form untuk mempermudah pemain Digital menghubungi PT_tester dengan lebih cepat.',
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
