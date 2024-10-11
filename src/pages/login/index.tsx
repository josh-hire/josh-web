import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import DefaultLayout from 'Modules/Layout/DefaultLayout';
import LoginModule from 'Modules/Landing/Login';

export interface MetaLoginProps {
  description: string;
}

export interface DataLoginProps {
  title: string;
  meta: MetaLoginProps;
}

export interface LoginPageProps {
  data: DataLoginProps;
}

export const getServerSideProps: GetServerSideProps<LoginPageProps> = async () => {
  return {
    props: {
      data: {
        title: 'Login',
        meta: {
          description:
            'login page',
        },
      },
    },
  };
};

const Login = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <DefaultLayout>
      <LoginModule />
    </DefaultLayout>
  );
};

export default Login;
