import { useCallback, useEffect, useState } from 'react';
import { Field, Form } from 'react-final-form';
import { Button } from 'Elements/Button';
import { Title, LoadingOverlay, Flex, Text, Checkbox, SimpleGrid } from '@mantine/core';
import styles from './styles.module.scss';
import FeatherIcon from 'feather-icons-react';
import { Select } from 'Elements/Select';
import clsx from 'clsx';
import { composeValidators, required } from 'Utils/validate';

type initialWorkTypeProps = {
  id: string;
  name: string;
  checked?: boolean;
};

type initialCityDataTypePros = {
  value: string;
  label: string;
};

const initialCityData: initialCityDataTypePros[] = [
  { value: 'city1', label: 'Jakarta Selatan' },
  { value: 'city2', label: 'Yogyakarta' },
  { value: 'city3', label: 'Bali' },
  { value: 'city4', label: 'Bandung' },
];

const initialWorkModelData = [{ id: 'wm1', name: 'I want to work remotely', checked: false }];

const initialWorkTypeData = [
  { id: 'wt1', name: 'Full Time', checked: false },
  { id: 'wt2', name: 'Internship', checked: false },
  { id: 'wt3', name: 'Part Time', checked: false },
  { id: 'wt4', name: 'Contract', checked: false },
];

export function WorkPreferencesForm({ handleSetData }): JSX.Element {
  const [isLoading] = useState(false);
  const [isError] = useState(false);
  const [isSuccess] = useState(false);
  const [renderForm, setRenderForm] = useState(true);
  const [isEmptySelected, setIsEmptySelected] = useState(false);
  const [category, setCategory] = useState('');
  const [dataCity] = useState(initialCityData);
  const [workModelData, setWorkModelData] = useState(initialWorkModelData);
  const [workTypeData, setWorkTypeData] = useState(initialWorkTypeData);
  const [citySelectedId, setCitySelectedId] = useState<string>();

  useEffect(() => {
    setRenderForm(false);
    setTimeout(() => {
      setRenderForm(true);
    }, 200);
  }, []);

  const onSubmit = (value) => {
    const payload = {
      dataStep3: {
        ...value,
        cityId: citySelectedId,
        workModelData,
        workTypeData,
      },
    };
    handleSetData(payload, 4);
    const isNotSelected =
      workTypeData?.filter((item: initialWorkTypeProps) => item?.checked)?.length <= 0;
    if (isNotSelected) {
      setIsEmptySelected(isNotSelected);
    }
  };

  const handleChangeWorkMode = useCallback(
    () => (e, index) => {
      const workMode = workModelData?.map((item, i) => ({
        ...item,
        checked: index === i ? e?.target.checked : item?.checked,
      }));
      setWorkModelData(workMode);
    },
    [workModelData],
  );

  const handleChangeWorkType = useCallback(
    () => (e, index) => {
      setIsEmptySelected(false);
      const workType = workTypeData?.map((item, i) => ({
        ...item,
        checked: index === i ? e?.target.checked : item?.checked,
      }));
      setWorkTypeData(workType);
    },
    [workTypeData],
  );

  const renderWorkItems = (data, title, handleChange, cols = 1, required = false) => (
    <Flex direction={'column'} align={'flex-start'} justify={'flex-start'}>
      {data?.length > 0 && (
        <Text mt={0} className={styles.titleCheckBox} mb={10}>
          {title}
        </Text>
      )}
      {required && isEmptySelected && (
        <Text
          mt={0}
          className={clsx(styles.titleEmptySelected, isEmptySelected && styles.errorStyle)}
          mb={10}>
          Please choose at least 1
        </Text>
      )}
      <SimpleGrid breakpoints={[{ maxWidth: 'md', cols: 1 }]} cols={cols} spacing={5}>
        {data?.map((item, i) => {
          return (
            <Checkbox
              onChange={(e) => handleChange()(e, i)}
              key={'workCheck' + i}
              mb={10}
              error={required && isEmptySelected}
              checked={item?.checked}
              mr={20}
              label={item?.name}
              styles={{
                input: { '&:checked': { backgroundColor: '#074679', border: 'none' } },
                label: { fontSize: '16px' },
              }}
            />
          );
        })}
      </SimpleGrid>
    </Flex>
  );

  return (
    <div className={styles.containerForm}>
      <div className={styles.formCard}>
        <LoadingOverlay visible={isLoading} />
        <Flex direction={'column'} justify={'center'} align={'center'} mb={70} w={'100%'}>
          <Title className={styles.title}>Work Preferences</Title>
          <Text mt={0} className={styles.description}>
            Key to Finding Your Ideal Job
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
                      <Text mt={0} className={clsx(styles.titleCheckBox)} mb={10}>
                        City preference*
                      </Text>
                      <Field
                        name="city"
                        render={({ input, meta }) => (
                          <Select
                            data={dataCity}
                            input={input}
                            meta={meta}
                            name="city"
                            onChange={(value) => {
                              setIsEmptySelected(false);
                              setCategory(value);
                              input.onChange(value);
                              const citySelected = dataCity?.find(
                                (item: any) => item?.value === value,
                              )?.value;
                              setCitySelectedId(citySelected);
                            }}
                            placeholder={'Select your city'}
                            required
                            value={category}
                          />
                        )}
                        required
                        validate={composeValidators(
                          required(
                            <div className={styles.errorText}>
                              <FeatherIcon className={styles.iconRegister} icon="alert-triangle" />{' '}
                              City harus diisi
                            </div>,
                          ),
                        )}
                      />
                      {renderWorkItems(workModelData, 'Workplace models', handleChangeWorkMode)}
                      {renderWorkItems(workTypeData, 'Work type*', handleChangeWorkType, 2, true)}
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
