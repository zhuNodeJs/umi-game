import React from 'react';
import styles from './index.css';

export default (props) => {
  const {children} = props;
  const {pathname} = props.location;
  if (pathname === '/login') {
    return (
      <>
        <h2>Login layout</h2>
        {props.children}
      </>
    )
  }
  return (
    <div>
      <h1 className={styles.title}>Page 全局 layout/index</h1>
      {children}
    </div>
  );
}
