import React from 'react';
import HomeImage from '../../src/img/HomePage.png';
import HomeBoldTextImage from '../../src/img/HomeBoldText.png';
import HomeTextImage from '../../src/img/HomeText.png';
import { Col, Row } from 'antd';

const HomeSection = () => {
    
  return (
    <div className="home-section">
      <Row>
        <Col span={2} />
        <Col span={12}>
          <p className='big-font'>Empower your job search with
            <br />x's curated tools and strategies.
          </p>
          <p className='medium-font'>Explore our templates, tools, and interview preparation resources to boost your career.</p>
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
