import React from 'react';
import { HeroProps } from 'umi';

interface FreeHeroItemProps {
  data: HeroProps;
  thisIndex: number;
  onItemHover: (thisIndex: number) => void;
  routerTo: (ename: number) => void;
  itemHover: number;
}

const FreeHeroItem: React.FC<FreeHeroItemProps> = ({
  data,
  thisIndex,
  onItemHover,
  routerTo,
  itemHover,
}) => {
  if (!data || !data.ename) return null;
  const imgMouseEnter = () => {
    itemHover !== thisIndex && onItemHover(thisIndex);
  };
  const imgUrl = `https://game.gtimg.cn/images/yxzj/img201606/heroimg/${
    data.ename
  }/${data.ename}${itemHover === thisIndex ? '-freehover.png' : '.jpg'}`;

  const routeTo = () => {
    routerTo(data.ename);
  };
  return (
    <img
      onMouseEnter={imgMouseEnter}
      style={{
        height: '69px',
        margin: '5px',
        borderRadius: '5px',
        width: itemHover === thisIndex ? '224px' : '69px',
      }}
      onClick={routeTo}
      src={imgUrl}
    />
  );
};

export default FreeHeroItem;
