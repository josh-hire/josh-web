import { useCallback, useEffect, useState } from 'react';
import { Field, Form } from 'react-final-form';
import { Input } from 'Elements/Input';
import { Button } from 'Elements/Button';
import { Title, LoadingOverlay, Flex, Text, SimpleGrid } from '@mantine/core';
import styles from './styles.module.scss';
import FeatherIcon from 'feather-icons-react';
import clsx from 'clsx';

type SkillItem = {
  id: string;
  name: string;
  selected?: boolean;
  added?: boolean;
};

const initialDataSkillPossesed: SkillItem[] = [
  { id: 'skl1', name: 'Communication', selected: false, added: false },
  { id: 'skl2', name: 'Decision-making', selected: false, added: false },
  { id: 'skl3', name: 'Collaboration', selected: false, added: false },
  { id: 'skl4', name: 'Teamwork', selected: false, added: false },
  { id: 'skl5', name: 'Problem-solving', selected: false, added: false },
  { id: 'skl6', name: 'Initiative', selected: false, added: false },
  { id: 'skl7', name: 'Adaptability', selected: false, added: false },
  { id: 'skl8', name: 'Patience', selected: false, added: false },
  { id: 'skl9', name: 'Responsibility', selected: false, added: false },
  { id: 'skl10', name: 'Leadership', selected: false, added: false },
  { id: 'skl11', name: 'Critical thinking', selected: false, added: false },
  { id: 'skl12', name: 'Public speaking', selected: false, added: false },
  { id: 'skl13', name: 'Collaboration', selected: false, added: false },
  { id: 'skl14', name: 'Creativity', selected: false, added: false },
  { id: 'skl15', name: 'Creativity', selected: false, added: false },
  { id: 'skl16', name: 'Integrity', selected: false, added: false },
  { id: 'skl17', name: 'Creativity', selected: false, added: false },
  { id: 'skl18', name: 'Collaboration', selected: false, added: false },
  { id: 'skl19', name: 'Public speaking', selected: false, added: false },
  { id: 'skl20', name: 'Public speaking', selected: false, added: false },
  { id: 'skl21', name: 'Creativity', selected: false, added: false },
];

export function SkillPossesedForm({ handleSetData }): JSX.Element {
  const [isLoading] = useState(false);
  const [isError] = useState(false);
  const [isSuccess] = useState(false);
  const [renderForm, setRenderForm] = useState(true);
  const [isEmptySelected, setIsEmptySelected] = useState(false);
  const [dataSkillPossesed, setDataSkillPossesed] = useState(initialDataSkillPossesed);

  useEffect(() => {
    setRenderForm(false);
    setTimeout(() => {
      setRenderForm(true);
    }, 200);
  }, []);

  const onSubmit = () => {
    const dataSelected = dataSkillPossesed?.filter((item: SkillItem) => item?.selected);
    const isNotSelected = dataSelected?.length <= 1;
    if (isNotSelected) {
      setIsEmptySelected(true);
    } else {
      handleSetData(
        {
          dataStep4: dataSelected,
        },
        5,
      );
    }
  };

  const handleSelectSkill = useCallback(
    () => (value, index) => {
      setIsEmptySelected(false);
      const _skillSelected = dataSkillPossesed?.map((item, i) => ({
        ...item,
        selected: index === i ? value : item?.selected,
      }));

      setDataSkillPossesed(_skillSelected);
    },
    [dataSkillPossesed],
  );
  const handleDeleteSkill = useCallback(
    (id) => {
      var index = dataSkillPossesed
        .map((item) => {
          return item.id;
        })
        .indexOf(id);
      setDataSkillPossesed(dataSkillPossesed?.splice(index, 1));
    },
    [dataSkillPossesed],
  );

  const renderSkillItems = () => (
    <Flex direction={'column'} align={'flex-start'} justify={'flex-start'} w={'100%'} mt={20}>
      <SimpleGrid breakpoints={[{ maxWidth: 'md', cols: 2 }]} cols={3} spacing={30}>
        {dataSkillPossesed
          ?.filter((item) => !item?.added)
          .map((item: SkillItem, i) => {
            return (
              <div
                onClick={() => handleSelectSkill()(!item?.selected, i)}
                key={'item-skill' + i}
                className={clsx(styles.itemSkill, item?.selected && styles.activeSelected)}>
                {item?.name}
              </div>
            );
          })}
      </SimpleGrid>
    </Flex>
  );

  const renderSkillItemsAdded = () => (
    <Flex
      direction={'column'}
      align={'flex-start'}
      justify={'flex-start'}
      w={'100%'}
      mt={20}
      className={clsx(
        dataSkillPossesed?.filter((item) => item?.added)?.length > 0 && styles.withBorder,
      )}>
      <SimpleGrid breakpoints={[{ maxWidth: 'md', cols: 1 }]} cols={3} spacing={30}>
        {dataSkillPossesed
          ?.filter((item) => item?.added)
          .map((item: SkillItem, i) => {
            return (
              <div
                onClick={() => handleSelectSkill()(!item?.selected, i)}
                key={'item-skill' + i}
                className={clsx(
                  styles.itemSkill,
                  item?.selected && styles.activeSelected,
                  styles.itemSkillAdded,
                )}>
                <span> {item?.name} </span>
                <Flex ml={10} direction={'row'} align={'center'} justify={'end'} onClick={() => handleDeleteSkill(item?.id)}>
                  <FeatherIcon icon="x" size={16} />
                </Flex>
              </div>
            );
          })}
      </SimpleGrid>
    </Flex>
  );

  return (
    <div className={styles.containerForm}>
      <div className={styles.formCard}>
        <LoadingOverlay visible={isLoading} />
        <Flex direction={'column'} justify={'center'} align={'center'} mb={70} w={'100%'} className={styles.boxForm}>
          <Title className={styles.title}>Skill Possesed</Title>
          <Text mt={0} className={styles.description}>
            What key skills can you offer to the company?
          </Text>
        </Flex>
        {
          <div className={!isError && !isSuccess ? styles.boxForm : styles.hideBoxForm}>
            <Text mt={0} className={clsx(styles.titleSkill)} mb={10}>
              Skills*
            </Text>
            {renderForm && (
              <Form
                onSubmit={() => onSubmit()}
                render={({ handleSubmit }) => {
                  return (
                    <form className={styles.form} onSubmit={handleSubmit}>
                      <Field
                        name="skillItem"
                        render={({ input, meta }) => (
                          <Input
                            className={styles.inputSkillTitle}
                            errorAutoHeight
                            input={{ ...input }}
                            meta={meta}
                            onKeyDown={(e) => {
                              if (e?.key === 'Enter') {
                                setIsEmptySelected(false);
                                const dataAdd = {
                                  id: 'skladded' + (dataSkillPossesed?.length + Number(1)),
                                  name: input?.value,
                                  selected: true,
                                  added: true,
                                };
                                setDataSkillPossesed([...dataSkillPossesed, dataAdd]);
                                input?.onChange('');
                              }
                            }}
                            name="skillItem"
                            placeholder={'enter your skill'}
                          />
                        )}
                      />
                      <Text
                        mt={0}
                        className={clsx(styles.textNoted, isEmptySelected && styles.errorStyle)}>
                        {isEmptySelected
                          ? '*Please add at least 2 skills'
                          : 'add at least 2 skills'}
                      </Text>
                      {renderSkillItemsAdded()}
                      {renderSkillItems()}

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
