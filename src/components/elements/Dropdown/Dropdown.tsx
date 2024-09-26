import clsx from 'clsx';
import styles from './Dropdown.module.scss';
import { useState } from 'react';
import FeatherIcon from 'feather-icons-react';

interface DropdownItem {
  value: string;
  title: string;
}

interface DropdownProps {
  className?: string;
  data: DropdownItem[];
  label?: string;
  onSelect: (item: DropdownItem) => void;
  placeholder?: string;
  rightSection?: React.ReactNode;
  selected?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  className,
  rightSection,
  data,
  selected,
  label,
  placeholder = 'Pilih...',
  onSelect,
}) => {
  const [show, setShow] = useState(false);
  const _select = data?.length
    ? data.filter((item) => item.value === selected)
    : ({} as DropdownItem);

  return (
    <div className={clsx(styles.root, className)}>
      <label className={clsx(styles.label)}>{label}</label>
      <div
        className={clsx(styles.itemSelected, show && styles.activeSelect)}
        onClick={() => setShow(!show)}>
        <span className={!selected && styles.placeholder}>
          {!selected ? placeholder : _select[0]?.title}
        </span>
        {rightSection || <FeatherIcon icon="search" />}
      </div>
      {show && (
        <div
          className={styles.dropDown}
          onBlur={() => setShow(false)}
          onMouseLeave={() => setShow(false)}>
          {data?.length > 0 &&
            data.map((item) => (
              <div
                className={clsx(
                  styles.itemDropdown,
                  selected === item?.value && styles.itemDropDownSelected,
                )}
                key={item?.title}
                onClick={() => {
                  onSelect(item);
                  setShow(false);
                }}>
                {item.title}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
