import PropTypes from 'prop-types';
import clsx from 'clsx';
import { IconSearch } from 'Elements/Icons/Search';
import { IconClose } from 'Elements/Icons/Close';
import styles from './Search.module.scss';
import { useState } from 'react';

const Search = ({ className, onChange, value, placeholder, onSetOpen, onEnter }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={clsx(styles.boxSearch, className)}>
      <div className={clsx(styles.boxInput, open && styles.boxInputVisible)}>
        <IconSearch />
        <input
          onChange={(e) => onChange(e?.target?.value)}
          onKeyDown={(e) => {
            if (e?.key?.toLowerCase() === 'enter') {
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
        }}>
        {open ? (
          <span onClick={() => onChange('')}>
            <IconClose />
          </span>
        ) : (
          <div className={styles.boxIconSearch} style={{ display: 'none' }}>
            <IconSearch />
          </div>
        )}
      </div>
    </div>
  );
};

Search.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  onEnter: PropTypes.func,
  onSetOpen: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

Search.defaultProps = {
  className: '',
  onChange: () => {},
  onEnter: () => {},
  onSetOpen: () => {},
  placeholder: 'cari',
  value: '',
};

export default Search;
