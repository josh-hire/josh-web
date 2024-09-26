import React, { useState } from 'react';
import clsx from 'clsx';
import { IconClose } from 'Elements/Icons/Close';
import styles from './Search.module.scss';
import FeatherIcon from 'feather-icons-react';


interface SearchProps {
  className?: string;
  onChange: (value: string) => void;
  onEnter: () => void;
  onSetOpen: (isOpen: boolean) => void;
  placeholder?: string;
  value?: string;
}

const Search: React.FC<SearchProps> = ({
  className = '',
  onChange,
  value = '',
  placeholder = 'cari',
  onSetOpen,
  onEnter,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={clsx(styles.boxSearch, className)}>
      <div className={clsx(styles.boxInput, open && styles.boxInputVisible)}>
        <FeatherIcon className={styles.sosMed} icon="search" />
        <input
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key.toLowerCase() === 'enter') {
              onEnter();
            }
          }}
          placeholder={placeholder}
          value={value}
        />
      </div>
      <div
        className={clsx(styles.boxButton)}
        onClick={() => {
          setOpen(!open);
          onSetOpen(!open);
        }}
      >
        {open ? (
          <span onClick={() => onChange('')}>
            <IconClose />
          </span>
        ) : (
          <div className={styles.boxIconSearch} style={{ display: 'none' }}>
            <FeatherIcon icon="search" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
