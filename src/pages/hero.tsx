import React, { FC } from 'react';
import { connect, ConnectProps, HeroModelState } from 'umi';
import styles from './hero.less';

interface PageProps extends ConnectProps {
  hero: HeroModelState;
}

const Hero: FC<PageProps> = props => {
  console.log('Hero props---', props);
  return (
    <div>
      <h1 className={styles.title}>Page hero</h1>
      <h2>This is {props.hero.name}</h2>
    </div>
  );
};

const mapStateToProps = ({ hero }: { hero: HeroModelState }) => {
  return {
    hero,
  };
};

export default connect(mapStateToProps)(Hero);
