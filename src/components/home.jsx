import React from 'react';
import { Carousel } from 'antd';

const contentStyle = {
  height: '100%',
  maxHeight: '100vh',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const mapImg = [
  {
    title: '1',
    img: '../assets/banner1.jpg',
  },
  {
    title: '2',
    img: '../assets/banner2.jpg',
  }
];

function home() {
  return (<Carousel autoplay>
    {mapImg.map(item =>
      <div key={item.title}>
        <h3 style={contentStyle} >
          <img src={item.img} ></img>
          {item.title}
        </h3>
      </div>
    )}
  </Carousel >);
}

export default home;