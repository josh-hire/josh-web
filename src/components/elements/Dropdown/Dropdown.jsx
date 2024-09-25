import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './Dropdown.module.scss';
import { Arrow } from 'Elements/Logo/Arrow';
import { useState } from 'react';

const Dropdown = (props) => {
  const [show, setShow] = useState(false);
  const { className, rightSection, data, selected, label, placeholder, onSelect } = props;
  const _select = data?.length ? data.filter((item)=>item.value===selected) : '';
  return (
    <div className={clsx(styles.root, className)}>
      <label className={clsx(styles.label)}>
        {label}
      </label>
      <div className={clsx(styles.itemSelected, show
        && styles.activeSelect)} onClick={()=>setShow(!show)}>
        <span className={!selected && styles.placeholder}>
          {!selected ? placeholder : _select[0]?.title}
        </span>
        {rightSection ? rightSection : <Arrow />}
      </div>
      {show && <div className={styles.dropDown}
        onBlur={()=>setShow(false)}
        onMouseLeave={()=>setShow(false)}>
        {data?.length && data?.map((item)=>{
          return(
            <div className={clsx(styles.itemDropdown,
              selected===item?.value
              && styles.itemDropDownSelected
            )} key={item?.title} onClick={()=>{
              onSelect(item);
              setShow(false);
            }}>{item.title}</div>
          );
        })}
      </div>}
    </div>
  );
};

Dropdown.propTypes={
  className: PropTypes.string,
  data: PropTypes.array,
  label: PropTypes.string,
  onSelect:PropTypes.func,
  placeholder:PropTypes.string,
  rightSection: PropTypes.node,
  selected: PropTypes.string
};

Dropdown.defaultProps = {
  className: '',
  data: [],
  label: '',
  onSelect:()=>{},
  placeholder:'Pilih...',
  rightSection: null,
  selected: ''
};

export default Dropdown;
