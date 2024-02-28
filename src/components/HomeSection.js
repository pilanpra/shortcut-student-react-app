import React from 'react';
import HomeImage from '../../src/img/HomePage.png';
import { Col, Row } from 'antd';

const HomeSection = () => {

  return (
    <div className="home-section">
      <Row>
        <Col span={2} />
        <Col span={12}>
          <p className='big-font' style={{ fontFamily: 'Satoshi-Black', textAlign: '-webkit-left', paddingTop: '12%' }}>
            Empower your job search with Shortcut's curated tools and strategies.
          </p>
          <p className='medium-font' style={{ fontFamily: 'Satoshi-Medium', textAlign: '-webkit-left' }}>Explore our templates, tools, and interview preparation resources to stay ahead of the curve.</p>
        </Col>
        <Col span={1} />
        <Col span={7}>
          <img src={HomeImage} alt="Home" className="centered-image" style={{ height: '90%' }} />
        </Col>
        <Col span={2} />
      </Row>
      <div class="down-arrow"></div>
    </div>
  );
}

export default HomeSection;
