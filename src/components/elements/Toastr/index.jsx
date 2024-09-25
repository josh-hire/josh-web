import React, { useContext } from 'react';
import { ToastrContext } from '../../../contexts/ToastrContext';
import { IconCircleCheck } from '../Logo/circleCheck';
import { IconClose } from '../Logo/close';
import { IconSad } from '../Logo/sad';
import styles from './styles.module.scss';
import ReactDom from 'react-dom';

const Toastr = () => {
  const { toastr, setToastr } = useContext(ToastrContext);

  const initialColor = [
    { key: 'success', style: styles.green, icon: IconCircleCheck },
    { key: 'error', style: styles.red, icon: IconSad },
  ];
  const toastStyles = initialColor.find((val) => val.key === toastr.color);
  const Icon = toastStyles?.icon;

  const handleCloseToastr = () => {
    setToastr({
      message: '',
      color: '',
      isOpen: false,
    });
  };

  const renderToastr = () => {
    return ReactDom.createPortal(
      <div className={[styles.container, toastStyles?.style].filter(Boolean).join(' ')}>
        <Icon />
        <p>{toastr.message || 'Network Error'}</p>
        <button onClick={() => handleCloseToastr()}>
          <IconClose />
        </button>
      </div>,
      document.getElementById('toastr'),
    );
  };

  return (
    <>
      <div id="toastr" />
      {toastr.isOpen && renderToastr()}
    </>
  );
};

export default Toastr;
