import { useEffect, useState } from 'react';
import { Field, Form } from 'react-final-form';
import { Input } from 'Elements/Input';
import { Button } from 'Elements/Button';
import { Title, Image, LoadingOverlay } from '@mantine/core';
import styles from './styles.module.scss';
import FeatherIcon from 'feather-icons-react';

import {
  composeValidators,
  required,
  numberOnly,
  limitLengthMin,
  limitLengthMax,
  validateEmail,
} from 'Utils/validate';
import { TextArea } from 'Elements/TextArea';
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

export const onSubmit = async (
  value: any,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setIsError: React.Dispatch<React.SetStateAction<boolean>>,
  setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>,
): Promise<void> => {
  try {
    setLoading(true);
    const response = {success:true}
    if (response && response.success) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setLoading(false);
      setIsSuccess(true);
      setIsError(false);
      setTimeout(() => {
        setIsSuccess(false);
        location?.reload();
      }, 3000);
    } else {
      setIsError(true);
      setIsSuccess(false);
      setLoading(false);
    }
  } catch (err) {
    setIsError(true);
    setIsSuccess(false);
    if (err instanceof Error) {
      setLoading(false);
    }
  }
};

export function ContactUsForm(): JSX.Element {
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

  return (
    <div className={styles.containerForm}>
      <div className={styles.contact}>
        <LoadingOverlay visible={isLoading} />
        {isSuccess && renderSukses()}
        {isError && renderError(setIsError, setIsSuccess)}
        {
          <div className={!isError && !isSuccess ? styles.boxForm : styles.hideBoxForm}>
            {renderForm && (
              <Form
                onSubmit={(value) => onSubmit(value, setLoading, setIsError, setIsSuccess)}
                render={({ handleSubmit }) => {
                  return (
                    <form className={styles.form} onSubmit={handleSubmit}>
                      <Field
                        name="email"
                        render={({ input, meta }) => (
                          <Input
                            errorAutoHeight
                            input={{ ...input }}
                            label="Your Email"
                            meta={meta}
                            name="email"
                            placeholder={"enter your email"}
                            required
                          />
                        )}
                        validate={composeValidators(
                          required(
                            <div className={styles.errorText}>
                              <FeatherIcon className={styles.iconContactUs} icon="alert-triangle" /> email harus diisi
                            </div>,
                          ),
                          validateEmail(
                            <div className={styles.errorText}>
                              <FeatherIcon className={styles.iconContactUs} icon="alert-triangle" /> email tidak valid
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
                            label={"Your Phone Number"}
                            meta={meta}
                            name="phone"
                            placeholder={"enter your phone number"}
                            required
                          />
                        )}
                        validate={composeValidators(
                          required(
                            <div className={styles.errorText}>
                              <FeatherIcon className={styles.iconContactUs} icon="alert-triangle" /> nomor handphone harus disisi
                            </div>,
                          ),
                          numberOnly(
                            <div className={styles.errorText}>
                              <FeatherIcon className={styles.iconContactUs} icon="alert-triangle" /> nomor handphone harus angka
                            </div>,
                          ),
                          limitLengthMin(
                            <div className={styles.errorText}>
                              <FeatherIcon className={styles.iconContactUs} icon="alert-triangle" /> nomor handphone minimum 9 angka
                            </div>,
                            9,
                          ),
                          limitLengthMax(
                            <div className={styles.errorText}>
                              <FeatherIcon className={styles.iconContactUs} icon="alert-triangle" /> nomor handphone maksimal 13 angka
                            </div>,
                            13,
                          ),
                        )}
                      />
                      
                      <Field
                        name="message"
                        render={({ input, meta }) => (
                          <TextArea
                            errorAutoHeight
                            input={{ ...input }}
                            label={"Your Message"}
                            meta={meta}
                            name="message"
                            placeholder={"How can i help you ?"}
                            required
                          />
                        )}
                        validate={composeValidators(
                          required(
                            <div className={styles.errorText}>
                              <FeatherIcon className={styles.iconContactUs} icon="alert-triangle" /> pesan harus diisi
                            </div>,
                          ),
                        )}
                      />
                      <Button className={styles.buttonSubmit} type="submit">
                        Submit
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
