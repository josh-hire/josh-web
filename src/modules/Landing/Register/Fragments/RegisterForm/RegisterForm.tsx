import { useEffect, useState } from 'react';
import { Field, Form } from 'react-final-form';
import { Input } from 'Elements/Input';
import { Button } from 'Elements/Button';
import { Title, Image, LoadingOverlay, Flex, Text } from '@mantine/core';
import styles from './styles.module.scss';
import FeatherIcon from 'feather-icons-react';
import Link from 'next/link';

import {
  composeValidators,
  required,
  numberOnly,
  limitLengthMin,
  limitLengthMax,
  validateEmail,
} from 'Utils/validate';
import clsx from 'clsx';

export const renderSukses = (): JSX.Element => {
  return (
    <div className={styles.boxSuccess}>
      <div>
        <Image
          alt={'icon-success'}
          className={styles.successIcon}
          fit="contain"
          src={'/assets/img/contact-us/top-success.png'}
          width={'auto'}
        />
        <Title align="center" className={styles.titleSuccess} mt="sm" size="lg" weight={500}>
          submit success
        </Title>
        <Title align="center" className={styles.descSuccess} mt="sm" size="lg" weight={500}>
          submit message success
        </Title>
      </div>
    </div>
  );
};

export const renderError = (
  setIsError: React.Dispatch<React.SetStateAction<boolean>>,
  setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>,
): JSX.Element => {
  return (
    <div className={styles.boxSuccess}>
      <div>
        <Image
          alt={'icon-error'}
          className={styles.successIcon}
          fit="contain"
          src={'/assets/img/contact-us/gagal.png'}
          width={'auto'}
        />
        <Title align="center" className={styles.descSuccess} mt="sm" size="lg" weight={500}>
          error submit
        </Title>
        <Button
          className={clsx(styles.buttonSubmit, styles.backButton)}
          onClick={() => {
            setIsError(false);
            setIsSuccess(false);
          }}>
          Refresh
        </Button>
      </div>
    </div>
  );
};



export function RegisterForm({handleSetData}): JSX.Element {
  const [isLoading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [renderForm, setRenderForm] = useState(true);

  useEffect(() => {
    setRenderForm(false);
    setTimeout(() => {
      setRenderForm(true);
    }, 200);
  }, []);

  const onSubmit = (value) => {
    handleSetData(value, 2)
  };

  return (
    <div className={styles.containerForm}>
      <div className={styles.formCard}>
        <LoadingOverlay visible={isLoading} />
        {isSuccess && renderSukses()}
        {isError && renderError(setIsError, setIsSuccess)}
        <Flex direction={'column'} justify={'center'} align={'center'} mb={100} w={'100%'} className={styles.boxForm}>
          <Title className={styles.title}>Create your Account</Title>
          <Text mt={0} className={styles.description}>
            and become a mamber to see job opportunity
          </Text>
        </Flex>
        {
          <div className={!isError && !isSuccess ? styles.boxForm : styles.hideBoxForm}>
            {renderForm && (
              <Form
                onSubmit={(value) => onSubmit(value)}
                render={({ handleSubmit }) => {
                  return (
                    <form className={styles.form} onSubmit={handleSubmit}>
                      <Field
                        name="name"
                        render={({ input, meta }) => (
                          <Input
                            errorAutoHeight
                            input={{ ...input }}
                            label="Name"
                            meta={meta}
                            name="name"
                            placeholder={'enter your name'}
                          />
                        )}
                        validate={composeValidators(
                          required(
                            <div className={styles.errorText}>
                              <FeatherIcon className={styles.iconRegister} icon="alert-triangle" />{' '}
                              Nama harus diisi
                            </div>,
                          ),
                        )}
                      />
                      <Field
                        name="address"
                        render={({ input, meta }) => (
                          <Input
                            errorAutoHeight
                            input={{ ...input }}
                            label="Address"
                            meta={meta}
                            name="address"
                            placeholder={'enter your address'}
                          />
                        )}
                        validate={composeValidators(
                          required(
                            <div className={styles.errorText}>
                              <FeatherIcon className={styles.iconRegister} icon="alert-triangle" />{' '}
                              Alamat harus diisi
                            </div>,
                          ),
                        )}
                      />
                      <Field
                        name="email"
                        render={({ input, meta }) => (
                          <Input
                            errorAutoHeight
                            input={{ ...input }}
                            label="Email"
                            meta={meta}
                            name="email"
                            placeholder={'enter your email'}
                          />
                        )}
                        validate={composeValidators(
                          required(
                            <div className={styles.errorText}>
                              <FeatherIcon className={styles.iconRegister} icon="alert-triangle" />{' '}
                              email harus diisi
                            </div>,
                          ),
                          validateEmail(
                            <div className={styles.errorText}>
                              <FeatherIcon className={styles.iconRegister} icon="alert-triangle" />{' '}
                              email tidak valid
                            </div>,
                          ),
                        )}
                      />
                      <Field
                        name="phone"
                        render={({ input, meta }) => (
                          <Input
                            errorAutoHeight
                            input={{ ...input }}
                            label={'Phone Number'}
                            meta={meta}
                            name="phone"
                            placeholder={'enter your phone number'}
                          />
                        )}
                        validate={composeValidators(
                          required(
                            <div className={styles.errorText}>
                              <FeatherIcon className={styles.iconRegister} icon="alert-triangle" />{' '}
                              nomor handphone harus disisi
                            </div>,
                          ),
                          numberOnly(
                            <div className={styles.errorText}>
                              <FeatherIcon className={styles.iconRegister} icon="alert-triangle" />{' '}
                              nomor handphone harus angka
                            </div>,
                          ),
                          limitLengthMin(
                            <div className={styles.errorText}>
                              <FeatherIcon className={styles.iconRegister} icon="alert-triangle" />{' '}
                              nomor handphone minimum 9 angka
                            </div>,
                            9,
                          ),
                          limitLengthMax(
                            <div className={styles.errorText}>
                              <FeatherIcon className={styles.iconRegister} icon="alert-triangle" />{' '}
                              nomor handphone maksimal 13 angka
                            </div>,
                            13,
                          ),
                        )}
                      />
                      <Button className={styles.buttonSubmit} type="submit">
                        Sign Up
                      </Button>
                      <Text mt={0} className={styles.description}>
                        Already have an account ?<Link href={''}> <span className={styles.textLink}></span>Sign In</Link>
                      </Text>
                    </form>
                  );
                }}
              />
            )}
          </div>
        }
      </div>
    </div>
  );
}
