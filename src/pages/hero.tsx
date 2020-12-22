import React, { FC } from 'react';
import { connect, ConnectProps, HeroModelState } from 'umi';
import styles from './hero.less';
import { Row, Col, Card, Radio } from 'antd';
import FreeHeroItem from '@/components/FreeHeroItem';

interface PageProps extends ConnectProps {
  hero: HeroModelState;
}

const RadioGroup = Radio.Group;
const heroType = [
  { key: 0, value: '全部' },
  { key: 1, value: '战士' },
  { key: 2, value: '法师' },
  { key: 3, value: '坦克' },
  { key: 4, value: '刺客' },
  { key: 5, value: '射手' },
  { key: 6, value: '辅助' },
];

const Hero: FC<PageProps> = props => {
  console.log('Hero props---', props);
  const {
    heros = [],
    filterKey = 0,
    freeheros = [],
    itemHover = 0,
  } = props.hero;
  const { dispatch } = props;
  const onChange = (e: any) => {
    console.log(e.target.value);
    dispatch!({
      type: 'hero/save',
      payload: {
        filterKey: e.target.value,
      },
    });
  };
  const onItemHover = (idx: number) => {
    dispatch!({
      type: 'hero/save',
      payload: {
        itemHover: idx,
      },
    });
  };
  return (
    <div className={styles.normal}>
      <div className={styles.info}>
        <Row className={styles.freehero}>
          <Col span={24}>
            <p>周免英雄</p>
            <div>
              {freeheros.map((data, index) => {
                return (
                  <FreeHeroItem
                    data={data}
                    itemHover={itemHover}
                    onItemHover={onItemHover}
                    thisIndex={index}
                    key={index}
                  ></FreeHeroItem>
                );
              })}
            </div>
          </Col>
        </Row>
      </div>
      <Card className={styles.radioPanel}>
        <RadioGroup onChange={onChange} value={filterKey}>
          {heroType.map(data => {
            return (
              <Radio value={data.key} key={`hero-radio-${data.key}`}>
                {data.value}
              </Radio>
            );
          })}
        </RadioGroup>
      </Card>
      <Row>
        {heros
          .filter(oh => {
            return filterKey === 0 ? true : oh.hero_type === filterKey;
          })
          .reverse()
          .map(hero => {
            const imgUrl = `https://game.gtimg.cn/images/yxzj/img201606/heroimg/${hero.ename}/${hero.ename}.jpg`;
            return (
              <Col key={hero.ename} span={3} className={styles.heroitem}>
                <img src={imgUrl} />
                <p>{hero.cname}</p>
              </Col>
            );
          })}
      </Row>
    </div>
  );
};

const mapStateToProps = ({ hero }: { hero: HeroModelState }) => {
  return {
    hero,
  };
};

export default connect(mapStateToProps)(Hero);
