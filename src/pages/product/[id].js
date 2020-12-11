import React from 'react';
import styles from './[id].css';

export default (props) => {
  console.log('--product--',props)
  const {params} = props.match;
  return (
    <div>
      <h1 className={styles.title}>Page product/{params.id}</h1>
    </div>
  );
}
