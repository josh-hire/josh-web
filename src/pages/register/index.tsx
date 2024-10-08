import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import DefaultLayout from 'Modules/Layout/DefaultLayout';
import RegisterModule from 'Modules/Landing/Register';

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

export const getServerSideProps: GetServerSideProps<RegisterPageProps> = async () => {
  return {
    props: {
      data: {
        title: 'Register',
        meta: {
          description:
            'register page',
        },
      },
    },
  };
};

const Register = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <DefaultLayout>
      <RegisterModule />
    </DefaultLayout>
  );
};

export default Register;
