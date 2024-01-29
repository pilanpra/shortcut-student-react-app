import React from 'react';
import documentPreviewImage from '../../src/img/ResumeDownloadImage.png'; // Import the image
import documentTextTopImage from '../../src/img/ResumeSecTopText.png'; // Import the image
import documentTextBotImage from '../../src/img/ResumeSecBotText.png'; // Import the image
import { Col, Row } from 'antd';
import { saveAs } from "file-saver";

const ResumeSection = () => {

  const onDownload = () => {
    console.log('on download')
    // saveAs("../../Experienced-Resume-Template.docx", "Experienced-Resume-Template.docx");
    fetch("src/docs/Experienced-Resume-Template .docx").then((response) => {
      response.blob().then((blob) => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.href = url;
        a.download = "testFile.docx";
        a.click();
      });
    });
  };

  return (
    <div className="resume-section">
      <Row>
        <Col span={12}>
          <div className="image-container">
            <a href="ExperiencedResume" onClick={onDownload}>
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
