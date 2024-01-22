import React from 'react';
import { Col, Row } from 'antd';

const PrepSection = () => {
    return (
        <div className="tools-section">
            <Col>
                <Row span={24}>
                    <Col span={1} />
                    <Col span={9}>
                        <p className='big-font'>Master interview prep and shake off those nerves
                            <br />
                        </p>
                        <p className='medium-font'>Utilize the right tools and methodologies to refine your storytelling skills. 
                            <br/>Practise until interviews become your stronghold.  
                            <br />
                        </p>
                    </Col>
                    <Col span={1} />
                    <Col span={12}>
                        <iframe width="550" height="500" src="https://www.youtube.com/embed/uD4izuDMUQA?si=-unfFi4JxZYazz1G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </Col>
                    <Col span={1} />
                </Row>
            </Col>
            
        </div>
    );
};

export default PrepSection;
