import React, { FC } from 'react';
import { connect, ConnectProps, SummonerModelState } from 'umi';
import styles from './summoner.less';

interface PageProps extends ConnectProps {
  summoner: SummonerModelState;
}

const Summoner: FC<PageProps> = props => {
  console.log('summoner props---', props);
  return (
    <div>
      <h1 className={styles.title}>Page summoner</h1>
      <h2>This is {JSON.stringify(props.summoner)}</h2>
    </div>
  );
};

const mapStateToProps = ({ summoner }: { summoner: SummonerModelState }) => {
  return {
    summoner,
  };
};
export default connect(mapStateToProps)(Summoner);
