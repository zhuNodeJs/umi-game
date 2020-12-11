import React from 'react';
import styles from './_layout.css';

export default (props) => {
  console.log('--全局layout--', props.location);
  return (
    <div>
      <h1 className={styles.title}>Page product/_layout</h1>
      {props.children}
    </div>
  );
}
