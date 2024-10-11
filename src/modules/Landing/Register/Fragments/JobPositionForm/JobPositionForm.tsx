import { useCallback, useEffect, useState } from 'react';
import { Field, Form } from 'react-final-form';
import { Input } from 'Elements/Input';
import { Button } from 'Elements/Button';
import { Title, LoadingOverlay, Flex, Text, Checkbox } from '@mantine/core';
import styles from './styles.module.scss';
import FeatherIcon from 'feather-icons-react';
import { Select } from 'Elements/Select';
import clsx from 'clsx';
import { composeValidators, required } from 'Utils/validate';

type JobItem = {
  id: string;
  name: string;
  checked?: boolean;
};

type JobTypePros = {
  value: number;
  label: string;
  items: JobItem[];
};

const initialDataJobs: JobTypePros[] = [
  { value: 1, label: 'IT', items: [] },
  { value: 2, label: 'Customer service', items: [] },
  { value: 3, label: 'Accounting and finance', items: [] },
  {
    value: 4,
    label: 'Bussiness development',
    items: [
      { id: 'bd1', name: 'Account Executive', checked: false },
      { id: 'bd2', name: 'Manager Bussiness Dev', checked: false },
      { id: 'bd3', name: 'Strategic Analyst', checked: false },
      { id: 'bd4', name: 'Product Manager', checked: false },
      { id: 'bd5', name: 'Sales', checked: false },
    ],
  },
];

export function JobPositionForm({ handleSetData }): JSX.Element {
  const [isLoading] = useState(false);
  const [isError] = useState(false);
  const [isSuccess] = useState(false);
  const [renderForm, setRenderForm] = useState(true);
  const [isEmptySelected, setIsEmptySelected] = useState(false);
  const [category, setCategory] = useState('');
  const [dataJobs] = useState(initialDataJobs);
  const [jobSelectedId, setDataJobSelectedId] = useState('');
  const [jobSelected, setDataJobSelected] = useState<JobTypePros>();

  useEffect(() => {
    setRenderForm(false);
    setTimeout(() => {
      setRenderForm(true);
    }, 200);
  }, []);

  const onSubmit = (value) => {
    handleSetData(value, 3);
    const isNotSelected = jobSelected?.items?.filter((item: JobItem) => item?.checked)?.length <= 0;
    if (isNotSelected) {
      setIsEmptySelected(isNotSelected);
    }
  };

  const handleChangeCheckBox = useCallback(
    () => (e, index) => {
      setIsEmptySelected(false);
      const jobChecked = {
        ...jobSelected,
        items: jobSelected?.items?.map((item, i) => ({
          ...item,
          checked: index === i ? e?.target.checked : item?.checked,
        })),
      };
      setDataJobSelected(jobChecked);
    },
    [jobSelected],
  );
  const isMaxSelected = jobSelected?.items?.filter((item: JobItem) => item?.checked)?.length >= 2;

  const renderJobItems = () => (
    <Flex direction={'column'} align={'flex-start'} justify={'flex-start'}>
      {jobSelectedId && (
        <Text
          mt={0}
          className={clsx(styles.titleJobItems, isEmptySelected && styles.errorStyle)}
          mb={10}>
          Choose what you are interested in
        </Text>
      )}
      {jobSelected?.items?.map((item, i) => {
        return (
          <Checkbox
            onChange={(e) => handleChangeCheckBox()(e, i)}
            key={'jobCheck' + i}
            mb={10}
            error={isEmptySelected}
            checked={item?.checked}
            label={item?.name}
            styles={{ input: { '&:checked': { backgroundColor: '#074679', border: 'none' } } }}
          />
        );
      })}
      {isEmptySelected && (
        <Text
          mt={0}
          className={clsx(styles.titleJobItems, isEmptySelected && styles.errorStyle)}
          mb={10}>
          Please choose at least 1
        </Text>
      )}
    </Flex>
  );

  return (
    <div className={styles.containerForm}>
      <div className={styles.formCard}>
        <LoadingOverlay visible={isLoading} />
        <Flex direction={'column'} justify={'center'} align={'center'} mb={100} w={'100%'} className={styles.boxForm}>
          <Title className={styles.title}>What position are you aiming for ?</Title>
          <Text mt={0} className={styles.description}>
            we will help you in finding a job
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
                        name="jobTitle"
                        render={({ input, meta }) => (
                          <Select
                            data={dataJobs}
                            input={input}
                            meta={meta}
                            name="jobTitle"
                            onChange={(value) => {
                              setIsEmptySelected(false);
                              setCategory(value);
                              input.onChange(value);
                              setDataJobSelectedId(value);
                              const jobSelected = dataJobs?.find(
                                (item: any) => item?.value === value,
                              );
                              setDataJobSelected(jobSelected);
                            }}
                            placeholder={'Select Job Title'}
                            required
                            value={category}
                          />
                        )}
                        required
                        validate={composeValidators(
                          required(
                            <div className={styles.errorText}>
                              <FeatherIcon className={styles.iconRegister} icon="alert-triangle" />{' '}
                              Job Title harus diisi
                            </div>,
                          ),
                        )}
                      />

                      {renderJobItems()}
                      {jobSelectedId && (
                        <Field
                          name="jobItem"
                          render={({ input, meta }) => (
                            <Input
                              className={styles.inputJobTitle}
                              insetIcon={
                                <FeatherIcon
                                  className={
                                    isMaxSelected ? styles.iconPlusDisabled : styles.iconPlus
                                  }
                                  icon="plus"
                                />
                              }
                              errorAutoHeight
                              input={{ ...input, disabled: isMaxSelected }}
                              meta={meta}
                              onKeyDown={(e) => {
                                if (e?.key === 'Enter') {
                                  const data2 = {
                                    id: '',
                                    name: input?.value,
                                    checked: true,
                                  };
                                  setDataJobSelected({
                                    ...jobSelected,
                                    items: [...jobSelected?.items, data2],
                                  });
                                  input?.onChange('');
                                  setIsEmptySelected(false);
                                }
                              }}
                              name="jobItem"
                              placeholder={'Add job title'}
                            />
                          )}
                        />
                      )}
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
