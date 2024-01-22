import React from 'react';
import documentPreviewImage from '../../src/img/ResumeDownloadImage.png'; // Import the image
import documentTextTopImage from '../../src/img/ResumeSecTopText.png'; // Import the image
import documentTextBotImage from '../../src/img/ResumeSecBotText.png'; // Import the image
import { Col, Row } from 'antd';

const ResumeSection = () => {
  return (
    <div className="resume-section">
      <Row>
        <Col span={12}>
          <div className="image-container">
            <a href="path-to-your-document.docx" download>
              <img src={documentPreviewImage} className='centered-image-doc' alt="Document Preview" />
            </a>
          </div> 
        </Col>
        <Col span={12}>
          <img src={documentTextTopImage}  className='centered-image-text-left' alt="Document Preview" />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <img src={documentTextTopImage}  className='centered-image-text-left' alt="Document Preview" />
        </Col>
        <Col span={12}>
          <div className="image-container">
            <a href="path-to-your-document.docx" download>
              <img src={documentPreviewImage} className='centered-image-doc' alt="Document Preview" />
            </a>
          </div> 
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <div className="image-container">
            <a href="path-to-your-document.docx" download>
              <img src={documentPreviewImage} className='centered-image-doc' alt="Document Preview" />
            </a>
          </div> 
        </Col>
        <Col span={12}>
          <img src={documentTextTopImage}  className='centered-image-text-left' alt="Document Preview" />
        </Col>
      </Row>
    </div>
  );
}

export default ResumeSection;
