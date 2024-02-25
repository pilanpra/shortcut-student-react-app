import React from 'react';
import HomeImage from '../../src/img/HomePage.png';
import { Col, Row } from 'antd';

const HomeSection = () => {
    
  return (
    <div className="home-section">
      <Row>
        <Col span={2} />
        <Col span={12}>
        <p className='big-font' style={{ textAlign: '-webkit-left', paddingTop: '27%' }}>
            Empower your job search with Shorcut's curated tools and strategies.
          </p>
          <p className='medium-font' style={{ textAlign: '-webkit-left' }}>Explore our templates, tools, and interview preparation resources to stay ahead of the curve.</p>
        </Col>
        <Col span={1} />
        <Col span={7}>
          <img src={HomeImage} alt="Home" className="centered-image" />
        </Col>
        <Col span={2} />
      </Row>
    </div>
  );
}

export default HomeSection;
