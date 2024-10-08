import { useEffect, useState } from 'react';
import { Field, Form } from 'react-final-form';
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
const levelEducationData: SelectItem[] = [
  { value: 'D3', label: 'D3' },
  { value: 'S1', label: 'S1' },
  { value: 'S2', label: 'S2' },
  { value: 'S3', label: 'S3' },
];


const instituteEducationData: SelectItem[] = [
  { value: 'Indonesia Univeristy', label: 'Indonesia Univeristy' },
  { value: 'Gajah Mada University', label: 'Gajah Mada University' },
  { value: 'Airlangga University', label: 'Airlangga University' },
  { value: 'Soedirman University', label: 'Soedirman University' },
];
const categoryEducationData: SelectItem[] = [
  { value: 'Informatics', label: 'Informatics' },
  { value: 'Informatics Engineering', label: 'Informatics Engineering' },
];

export function EducationBackgroundForm({ handleSetData }): JSX.Element {
  const [isSuccess] = useState(false);
  const [renderForm, setRenderForm] = useState(true);
  const [stillStudy, setStillStudy] = useState(false);

  useEffect(() => {
    setRenderForm(false);
    setTimeout(() => {
      setRenderForm(true);
    }, 200);
  }, []);

  const onSubmit = (value) => {
    const payload = {
      dataStep6: value,
    };
    handleSetData(payload, 6);
  };

  const handleStillStudyChecked = (value) => {
    setStillStudy(value?.target.checked);
  };

  return (
    <div className={styles.containerForm}>
      <div className={styles.formCard}>
        <LoadingOverlay visible={false} />
        <Flex direction={'column'} justify={'center'} align={'center'} mb={70} w={'100%'}>
          <Title className={styles.title}>Education Background</Title>
        </Flex>
        {
          <div className={!isSuccess ? styles.boxForm : styles.hideBoxForm}>
            {renderForm && (
              <Form
                onSubmit={(value) => onSubmit(value)}
                render={({ handleSubmit, values }) => {
                  return (
                    <form className={styles.form} onSubmit={handleSubmit}>
                      <Title className={styles.titleInput}>Level Education *</Title>
                      <Field
                        name="levelEducation"
                        render={({ input, meta }) => (
                          <Select
                            data={levelEducationData || ([] as SelectItem[])}
                            input={input}
                            meta={meta}
                            name="levelEducation"
                            onChange={(value) => {
                              input.onChange(value);
                            }}
                            placeholder={'Ex: S1'}
                            required
                            value={input.value}
                          />
                        )}
                        required
                        validate={composeValidators(
                          required(
                            <div className={styles.errorText}>
                              <FeatherIcon className={styles.iconRegister} icon="alert-triangle" />{' '}
                              Level Education harus diisi harus diisi
                            </div>,
                          ),
                        )}
                      />
                      <Title className={styles.titleInput}>Institute Education *</Title>
                      <Field
                        name="institute"
                        render={({ input, meta }) => (
                          <Select
                            hideIconRight
                            searchable
                            data={instituteEducationData || ([] as SelectItem[])}
                            input={input}
                            meta={meta}
                            name="institute"
                            onChange={(value) => {
                              input.onChange(value);
                            }}
                            placeholder={'Ex: Institut Teknologi Bandung'}
                            required
                            value={input.value}
                          />
                        )}
                        required
                        validate={composeValidators(
                          required(
                            <div className={styles.errorText}>
                              <FeatherIcon className={styles.iconRegister} icon="alert-triangle" />{' '}
                              Institute Education harus diisi harus diisi
                            </div>,
                          ),
                        )}
                      />
                      <Title className={styles.titleInput}>Category Education *</Title>
                      <Field
                        name="categoryEducation"
                        render={({ input, meta }) => (
                          <Select
                            hideIconRight
                            searchable
                            data={categoryEducationData || ([] as SelectItem[])}
                            input={input}
                            meta={meta}
                            name="categoryEducation"
                            onChange={(value) => {
                              input.onChange(value);
                            }}
                            placeholder={'Ex: Informatics'}
                            required
                            value={input.value}
                          />
                        )}
                        required
                        validate={composeValidators(
                          required(
                            <div className={styles.errorText}>
                              <FeatherIcon className={styles.iconRegister} icon="alert-triangle" />{' '}
                              Institute Education harus diisi harus diisi
                            </div>,
                          ),
                        )}
                      />
                     <Flex direction={'column'}>
                        <Title className={styles.titleInput}>Study Start *</Title>
                        <SimpleGrid
                          breakpoints={[{ maxWidth: 'md', cols: 1 }]}
                          cols={2}
                          spacing={20}>
                          <Field
                            name="studyStartMonth"
                            render={({ input, meta }) => (
                              <Select
                                data={monthData || ([] as SelectItem[])}
                                input={input}
                                meta={meta}
                                name="studyStartMonth"
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
                            name="studyStartYear"
                            render={({ input, meta }) => (
                              <Select
                                data={yearsData || ([] as SelectItem[])}
                                input={input}
                                meta={meta}
                                name="studyStartYear"
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
                                  study start year  harus lebih kecil dari study end year
                                </div>,
                                values?.studyEndYear,
                              ),
                            )}
                          />
                        </SimpleGrid>
                      </Flex>
                      <Flex direction={'column'}>
                        <Title className={styles.titleInput}>Study end *</Title>
                        <SimpleGrid
                          breakpoints={[{ maxWidth: 'md', cols: 1 }]}
                          cols={2}
                          spacing={20}>
                          <Field
                            name="studyEndMonth"
                            render={({ input, meta }) => (
                              <Select
                                data={monthData || ([] as SelectItem[])}
                                input={input}
                                meta={meta}
                                name="studyEndMonth"
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
                            name="studyEndYear"
                            render={({ input, meta }) => (
                              <Select
                                data={yearsData || ([] as SelectItem[])}
                                input={input}
                                meta={meta}
                                name="studyEndYear"
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
                                  study end year harus lebih besar dari study start year
                                </div>,
                                values?.studyStartYear,
                              ),
                            )}
                          />
                        </SimpleGrid>
                      </Flex>
                      <Checkbox
                        mt={30}
                        onChange={(e) => handleStillStudyChecked(e)}
                        mb={10}
                        error={false}
                        checked={stillStudy}
                        label={'I am currently study'}
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
