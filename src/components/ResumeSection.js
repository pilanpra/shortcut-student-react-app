import React from 'react';
import ExperiencedResume from '../../src/img/experienced_resume.jpeg';
import NewGradResume from '../../src/img/new_grad.jpeg';
import JakesResume from '../../src/img/jakes.jpeg'; 
import { Col, Row, Card } from 'antd';
import { DownloadOutlined }from '@ant-design/icons';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ResumeSection = () => {

  const onDownloadExperiencedResume = () => {
    fetch("Experienced-Resume-Template.docx").then((response) => {
      response.blob().then((blob) => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.href = url;
        a.download = "Experienced-Resume-Template.docx";
        a.click();
      });
    });
  };

  const onDownloadNewGradResume = () => {
    fetch("New-Grad-Resume-Template.docx").then((response) => {
      response.blob().then((blob) => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.href = url;
        a.download = "New-Grad-Resume-Template.docx";
        a.click();
      });
    });
  };

  const onDownloadJakesResume = () => {
    fetch("jakes-resume.docx").then((response) => {
      response.blob().then((blob) => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.href = url;
        a.download = "jakes-resume.docx";
        a.click();
      });
    });
  };

  return (
    <div className="resume-section">
      {/* experienced resume */}
      <Col span={3} />
      <Col span={18}>
        <Card style={{ backgroundColor: '#b1b1ac' }}>
          <Carousel autoPlay>
            <div>
              <Row>
                <Col span={4} />
                <Col span={16}>
                  <p className='big-font' style={{ textAlign: '-webkit-left', paddingTop: '32px' }}>Create a professional resume with our easy-to-use templates. Without going from scratch, simply download the 'close-to-industry-level' resume that fits your profile and start editing.</p>
                </Col>
                <Col span={4} />
              </Row>
            </div>
            <div>
              <Row>
                <Col span={6} />
                <Col span={12}>
                  <b><p className='medium-font'>TEMPLATE 1</p></b>
                  <div className="image-container">
                      <a href="ExperiencedResume" onClick={onDownloadExperiencedResume} style={{ position: 'relative', marginTop: '16px' }}>
                        <img style={{ width: '100%', opacity: '0.6', backgroundColor: '#FFFFFF' }} src={ExperiencedResume} className='centered-image-doc' alt="Document Preview" />
                        <span style={{ zIndex: '2', position: 'absolute', top: '45%', right: '45%', fontSize: '50px' }}><DownloadOutlined /></span>
                      </a>
                    </div>
                </Col>
                <Col span={6} />
              </Row>
            </div>
            <div>
              <Row>
                <Col span={6} />
                <Col span={12}>
                  <b><p className='medium-font'>TEMPLATE 2</p></b>
                  <div className="image-container">
                    <a href="NewGradResume" onClick={onDownloadNewGradResume} style={{ position: 'relative', marginTop: '16px' }}>
                      <img style={{ width: '100%', opacity: '0.6', backgroundColor: '#FFFFFF' }} src={NewGradResume} className='centered-image-doc' alt="Document Preview" />
                      <span style={{ zIndex: '2', position: 'absolute', top: '45%', right: '45%', fontSize: '50px' }}><DownloadOutlined /></span>
                    </a>
                  </div> 
                </Col>
                <Col span={6} />
              </Row>
            </div>
            <div>
              <Row>
                <Col span={6} />
                <Col span={12}>
                  <b><p className='medium-font'>TEMPLATE 3</p></b>
                  <div className="image-container">
                    <a href="JakesResume" onClick={onDownloadJakesResume} style={{ position: 'relative' }}>
                      <img style={{minHeight: '150%', maxWidth: '100%', opacity: '0.6', backgroundColor: '#FFFFFF' }} src={JakesResume} className='centered-image-doc' alt="Document Preview" />
                      <span style={{ zIndex: '2', position: 'absolute', top: '45%', left: '45%', fontSize: '50px' }}><DownloadOutlined /></span>
                    </a>
                  </div> 
                </Col>
                <Col span={6} />
              </Row>
            </div>
          </Carousel>
        </Card>
      </Col>
      <Col span={3} />
      
      {/* new grad resume */}
      <br />
      {/* jakes resume */}
      {/* <Row style={{ marginTop: '4%' }}>
        <Col span={2} />
        
      </Row> */}
    </div>
  );
}

export default ResumeSection;
