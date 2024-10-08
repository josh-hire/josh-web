import { useEffect, useState } from 'react';
import { Field, Form } from 'react-final-form';
import { Input } from 'Elements/Input';
import { Button } from 'Elements/Button';
import {
  Title,
  LoadingOverlay,
  Flex,
  Checkbox,
  SelectItem,
  SimpleGrid,
} from '@mantine/core';
import { Select } from 'Elements/Select';

import styles from './styles.module.scss';
import FeatherIcon from 'feather-icons-react';
import { composeValidators, greaterThan, lessThan, required } from 'Utils/validate';
import { generateMonths, generateYears } from 'Utils/common';

const yearsData = generateYears().map((year) => ({ value: year, label: year }));
const monthData = generateMonths().map((year) => ({ value: year, label: year }));
const dataPosition: SelectItem[] = [
  { value: 'Data Entry', label: 'Data Entry' },
  { value: 'Data Visualization', label: 'Data Visualization' },
  { value: 'Data Science', label: 'Data Science' },
];

export function WorkExperienceForm({ handleSetData }): JSX.Element {
  const [isSuccess] = useState(false);
  const [renderForm, setRenderForm] = useState(true);
  const [stillWorking, setStillWorking] = useState(false);

  useEffect(() => {
    setRenderForm(false);
    setTimeout(() => {
      setRenderForm(true);
    }, 200);
  }, []);

  const onSubmit = (value) => {
    const payload = {
      dataStep5: value,
    };
    handleSetData(payload, 6);
  };

  const handleStillWorkingChecked = (value) => {
    setStillWorking(value?.target.checked);
  };

  return (
    <div className={styles.containerForm}>
      <div className={styles.formCard}>
        <LoadingOverlay visible={false} />
        <Flex direction={'column'} justify={'center'} align={'center'} mb={70} w={'100%'}>
          <Title className={styles.title}>Recent Work Experience</Title>
        </Flex>
        {
          <div className={!isSuccess ? styles.boxForm : styles.hideBoxForm}>
            {renderForm && (
              <Form
                onSubmit={(value) => onSubmit(value)}
                render={({ handleSubmit, values }) => {
                  return (
                    <form className={styles.form} onSubmit={handleSubmit}>
                      <Title className={styles.titleInput}>Job Position *</Title>
                      <Field
                        name="position"
                        render={({ input, meta }) => (
                          <Select
                            hideIconRight={true}
                            searchable
                            data={dataPosition || ([] as SelectItem[])}
                            input={input}
                            meta={meta}
                            name="position"
                            onChange={(value) => {
                              input.onChange(value);
                            }}
                            placeholder={'Ex: Data Science'}
                            required
                            value={input.value}
                          />
                        )}
                        required
                        validate={composeValidators(
                          required(
                            <div className={styles.errorText}>
                              <FeatherIcon className={styles.iconRegister} icon="alert-triangle" />{' '}
                              Job Experience harus diisi harus diisi
                            </div>,
                          ),
                        )}
                      />
                      <Field
                        name="company"
                        render={({ input, meta }) => (
                          <Input
                            errorAutoHeight
                            input={{ ...input }}
                            label="Company *"
                            meta={meta}
                            name="company"
                            placeholder={'Ex: Telkom Indonesia'}
                          />
                        )}
                        validate={composeValidators(
                          required(
                            <div className={styles.errorText}>
                              <FeatherIcon className={styles.iconRegister} icon="alert-triangle" />{' '}
                              Company harus diisi
                            </div>,
                          ),
                        )}
                      />
                      <Flex direction={'column'}>
                        <Title className={styles.titleInput}>Start Job *</Title>
                        <SimpleGrid
                          breakpoints={[{ maxWidth: 'md', cols: 1 }]}
                          cols={2}
                          spacing={20}>
                          <Field
                            name="startJobMonth"
                            render={({ input, meta }) => (
                              <Select
                                data={monthData || ([] as SelectItem[])}
                                input={input}
                                meta={meta}
                                name="startJobMonth"
                                onChange={(value) => {
                                  input.onChange(value);
                                }}
                                placeholder={'Ex: September'}
                                required
                                value={input.value}
                              />
                            )}
                            required
                            validate={composeValidators(
                              required(
                                <div className={styles.errorText}>
                                  <FeatherIcon
                                    className={styles.iconRegister}
                                    icon="alert-triangle"
                                  />{' '}
                                  bulan harus diisi
                                </div>,
                              ),
                            )}
                          />
                          <Field
                            name="startJobYear"
                            render={({ input, meta }) => (
                              <Select
                                data={yearsData || ([] as SelectItem[])}
                                input={input}
                                meta={meta}
                                name="startJobYear"
                                onChange={(value) => {
                                  input.onChange(value);
                                }}
                                placeholder={'Ex: 2021'}
                                required
                                value={input.value}
                              />
                            )}
                            required
                            validate={composeValidators(
                              required(
                                <div className={styles.errorText}>
                                  <FeatherIcon
                                    className={styles.iconRegister}
                                    icon="alert-triangle"
                                  />{' '}
                                  Tahun harus diisi
                                </div>,
                              ),
                              lessThan(
                                <div className={styles.errorText}>
                                  <FeatherIcon className={styles.iconRegister} icon="alert-triangle" />{' '}
                                  start job year  harus lebih kecil dari end job year
                                </div>,
                                values?.endJobYear,
                              ),
                            )}
                          />
                        </SimpleGrid>
                      </Flex>
                      <Flex direction={'column'}>
                        <Title className={styles.titleInput}>End Job *</Title>
                        <SimpleGrid
                          breakpoints={[{ maxWidth: 'md', cols: 1 }]}
                          cols={2}
                          spacing={20}>
                          <Field
                            name="endJobMonth"
                            render={({ input, meta }) => (
                              <Select
                                data={monthData || ([] as SelectItem[])}
                                input={input}
                                meta={meta}
                                name="endJobMonth"
                                onChange={(value) => {
                                  input.onChange(value);
                                }}
                                placeholder={'Ex: September'}
                                required
                                value={input.value}
                              />
                            )}
                            required
                            validate={composeValidators(
                              required(
                                <div className={styles.errorText}>
                                  <FeatherIcon
                                    className={styles.iconRegister}
                                    icon="alert-triangle"
                                  />{' '}
                                  bulan harus diisi
                                </div>,
                              ),
                            )}
                          />
                          <Field
                            name="endJobYear"
                            render={({ input, meta }) => (
                              <Select
                                data={yearsData || ([] as SelectItem[])}
                                input={input}
                                meta={meta}
                                name="endJobYear"
                                onChange={(value) => {
                                  input.onChange(value);
                                }}
                                placeholder={'Ex: 2024'}
                                required
                                value={input.value}
                              />
                            )}
                            required
                            validate={composeValidators(
                              required(
                                <div className={styles.errorText}>
                                  <FeatherIcon
                                    className={styles.iconRegister}
                                    icon="alert-triangle"
                                  />{' '}
                                  Tahun harus diisi
                                </div>,
                              ),
                              greaterThan(
                                <div className={styles.errorText}>
                                  <FeatherIcon className={styles.iconRegister} icon="alert-triangle" />{' '}
                                  end job year harus lebih besar dari start job year
                                </div>,
                                values?.startJobYear,
                              ),
                            )}
                          />
                        </SimpleGrid>
                      </Flex>
                      <Checkbox
                        mt={30}
                        onChange={(e) => handleStillWorkingChecked(e)}
                        mb={10}
                        error={false}
                        checked={stillWorking}
                        label={'I am currently working in this role'}
                        styles={{
                          input: { '&:checked': { backgroundColor: '#074679', border: 'none' } },
                        }}
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
