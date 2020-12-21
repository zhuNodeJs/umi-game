import React, { FC } from 'react';
import { connect, ConnectProps, ItemModelState, useDispatch } from 'umi';
import styles from './item.less';
import { Row, Col, Radio, Card } from 'antd';

interface PageProps extends ConnectProps {
  item: ItemModelState;
}

const RadioGroup = Radio.Group;
const itemType = [
  { key: 0, value: '全部' },
  { key: 1, value: '攻击' },
  { key: 2, value: '法术' },
  { key: 3, value: '防御' },
  { key: 4, value: '移动' },
  { key: 5, value: '打野' },
  { key: 7, value: '辅助' },
];

const Item: FC<PageProps> = props => {
  console.log('item props---', props);
  const { items = [], filterKey = 0 } = props.item;
  const { dispatch } = props;
  const onChange = (e: any) => {
    console.log(e.target.value);
    dispatch!({
      type: 'item/save',
      payload: {
        filterKey: e.target.value,
      },
    });
  };

  return (
    <div>
      <Card>
        <RadioGroup onChange={onChange} value={filterKey}>
          {itemType.map(data => {
            return (
              <Radio value={data.key} key={`item-radio-${data.key}`}>
                {data.value}
              </Radio>
            );
          })}
        </RadioGroup>
      </Card>
      <Row>
        {items
          .filter(oh => {
            return filterKey === 0 ? true : oh.item_type === filterKey;
          })
          .map(data => {
            const imgUrl = `https://game.gtimg.cn/images/yxzj/img201606/itemimg/${data.item_id}.jpg`;
            return (
              <Col className={styles.heroitem} span={3} key={data.item_id}>
                <img src={imgUrl} alt="" />
                <p>{data.item_name}</p>
              </Col>
            );
          })}
      </Row>
    </div>
  );
};

const mapStateToProps = ({ item }: { item: ItemModelState }) => {
  return {
    item,
  };
};

export default connect(mapStateToProps)(Item);
