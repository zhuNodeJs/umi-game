import React from 'react';
import styles from './ename.less';

interface MatchProps {
  match: {
    params: {
      ename: string;
    };
  };
}

export default ({ match }: MatchProps) => {
  console.log('detail match==', match);
  return (
    <div>
      <h1 className={styles.title}>Page herodetail/ename</h1>
      <h2>ename参数为： {match.params.ename}</h2>
    </div>
  );
};
