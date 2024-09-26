import React from 'react';
import clsx from 'clsx';
import parse from 'html-react-parser';
import styles from './styles.module.scss';

interface RenderHtmlModuleProps {
  className?: string;
  data?: string | null;
}

const RenderHtmlModule: React.FC<RenderHtmlModuleProps> = ({ data = null, className = '' }) => {
  const content = data ? parse(data) : '';
  
return <div className={clsx(styles.content, className)}>{content}</div>;
};

export default RenderHtmlModule;
