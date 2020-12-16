import React, { FC } from 'react';
import { connect, ConnectProps, ItemModelState } from 'umi';
import styles from './item.less';

interface PageProps extends ConnectProps {
  item: ItemModelState;
}

const Item: FC<PageProps> = props => {
  console.log('item props---', props);
  return (
    <div>
      <h1 className={styles.title}>Page item</h1>
      <h2>This is {props.item.name}</h2>
    </div>
  );
};

const mapStateToProps = ({ item }: { item: ItemModelState }) => {
  return {
    item,
  };
};

export default connect(mapStateToProps)(Item);
