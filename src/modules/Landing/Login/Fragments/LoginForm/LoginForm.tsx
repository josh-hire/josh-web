import { useEffect, useState } from 'react';
import { Field, Form } from 'react-final-form';
import { Input } from 'Elements/Input';
import { InputPassword } from 'Elements/InputPassword';
import { Button } from 'Elements/Button';
import { Title, Image, LoadingOverlay, Flex, Text, Checkbox } from '@mantine/core';
import styles from './styles.module.scss';
import FeatherIcon from 'feather-icons-react';

import {
  composeValidators,
  required,
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

export function LoginForm({ handleSetData }): JSX.Element {
  const [isLoading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [renderForm, setRenderForm] = useState(true);
  const [rememberMe, setRememberMe] = useState(false);


  useEffect(() => {
    setRenderForm(false);
    setTimeout(() => {
      setRenderForm(true);
    }, 200);
  }, []);

  const onSubmit = (value) => {
    handleSetData(value, 2);
  };

  return (
    <div className={styles.containerForm}>
      <div className={styles.formCard}>
        <LoadingOverlay visible={isLoading} />
        {isSuccess && renderSukses()}
        {isError && renderError(setIsError, setIsSuccess)}
        <Flex
          direction={'column'}
          justify={'center'}
          align={'center'}
          h={'100%'}
          w={'100%'}
          className={styles.boxLeftSection}>
          <div className={styles.containerTitle}>
            <Flex
              direction={'row'}
              justify={'center'}
              align={'center'}
              h={'100%'}
              mt={'0'}
              className={styles.boxTitle}>
              <Image
                fit="contain"
                height={135}
                width={135}
                alt="josh"
                src={'/assets/home/images/josh.png'}
                className={styles.joshLogo}
              />
              <Flex direction={'column'} justify={'center'} align={'flex-start'} ml={20} w={'100%'}>
                <Title className={styles.title}>JOSH</Title>
                <Text mt={20} className={styles.description}>
                  Swipe & Hiring
                </Text>
              </Flex>
            </Flex>
          </div>
          <Flex
            direction={'row'}
            justify={'flex-start'}
            align={'flex-start'}
            ml={100}
            mb={50}></Flex>
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
                        name="password"
                        render={({ input, meta }) => (
                          <InputPassword
                            errorAutoHeight
                            input={{ ...input }}
                            label="Password"
                            meta={meta}
                            name="password"
                            placeholder={'Masukkan Password Anda'}
                          />
                        )}
                        validate={composeValidators(
                          required(
                            <div className={styles.errorText}>
                              <FeatherIcon className={styles.iconRegister} icon="alert-triangle" />{' '}
                              password harus disisi
                            </div>,
                          ),
                        )}
                      />
                      <Checkbox
                        onChange={(e) => setRememberMe(e?.target.checked)}
                        mb={10}
                        checked={rememberMe}
                        label={'Ingat Saya'}
                        styles={{
                          input: { '&:checked': { backgroundColor: '#074679', border: 'none' } },
                        }}
                      />
                      <Button className={styles.buttonSubmit} type="submit">
                        Login
                      </Button>
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
