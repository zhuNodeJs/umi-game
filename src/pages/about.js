import React from 'react';
import styles from './about.css';

const About = (props) => {
  console.log('about---', props)
  const {history} = props;
  const goToProductPage = () => {
    history.push('/product/uuuuu')
  }
  return (
    <div>
      <h1 className={styles.title}>Page about</h1>
      <button onClick={goToProductPage}>Go to Proudct Page</button>
      <h2>第二种方式跳转</h2>
      <button onClick={() => history.push('/product/aaaaaa')}>内联跳转Product Page</button>
    </div>
  );  
}

About.title = 'hello About router'

export default About