/* eslint-disable react/no-danger */
import PropTypes from 'prop-types';
import clsx from 'clsx';
import parse from 'html-react-parser';
import styles from './styles.module.scss';

const RenderHtmlModule = ({ data, className }) => {
  const content = data ? parse(data) : '';
  return <div className={clsx(styles.content, className)}>{content}</div>;
};

RenderHtmlModule.propTypes = {
  className: PropTypes.string,
  data: PropTypes.string,
};

RenderHtmlModule.defaultProps = {
  className: '',
  data: null,
};

export default RenderHtmlModule;
