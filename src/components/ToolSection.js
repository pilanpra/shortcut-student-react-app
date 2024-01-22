import React from 'react';
import { Col, Row } from 'antd';
import pikachu from '../img/pikachu.png'// with import

const ToolsSection = () => {
    return (
        <div className="tools-section">
            <div className="video-container">
                <iframe width="750" height="400" src="https://www.youtube.com/embed/uD4izuDMUQA?si=-unfFi4JxZYazz1G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <Col>
                <Row span={24} gutter={[16, 40]}>
                    <Col span={4} />
                    <Col span={16}>
                        <p className='big-font'>Streamline your job application process
                            <br />
                        and reclaim valuable time.</p>
                        <p className='medium-font'>Discover a treasure trove of tools designed to accelerate
                            <br/>your job search, minimize time spent on applications, and
                            <br />optimize your chances of securing interviews
                        </p>
                    </Col>
                    <Col span={4} />
                </Row>
                <br /><br /><br />
                <Row span={24} style={{ marginBottom: '100px' }}>
                    <Col span={10}>
                        <h3>Unlock a wealth of resources tailored specifically for master's students.</h3>
                    </Col>
                    <Col span={1} />
                    <Col span={13} style={{ paddingTop: '12px' }}>
                        <Row span={24}>
                            <Col span={5}>
                                <img src={pikachu} width={100} height={50}/>
                            </Col>
                            <Col span={1} />
                            <Col span={5}>
                                <img src={pikachu} width={100} height={50}/>
                            </Col>
                            <Col span={1} />
                            <Col span={5}>
                                <img src={pikachu} width={100} height={50}/>
                            </Col>
                            <Col span={1} />
                            <Col span={5}>
                                <img src={pikachu} width={100} height={50}/>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row span={24} style={{ marginBottom: '100px' }}>
                <Col span={13} style={{ paddingTop: '12px' }}>
                        <Row span={24}>
                            <Col span={5}>
                                <img src={pikachu} width={100} height={50}/>
                            </Col>
                            <Col span={1} />
                            <Col span={5}>
                                <img src={pikachu} width={100} height={50}/>
                            </Col>
                            <Col span={1} />
                            <Col span={5}>
                                <img src={pikachu} width={100} height={50}/>
                            </Col>
                            <Col span={1} />
                            <Col span={5}>
                                <img src={pikachu} width={100} height={50}/>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={1} />
                    <Col span={10}>
                        <h3>Unlock a wealth of resources tailored specifically for master's students.</h3>
                    </Col>
                </Row>

                <Row span={24} style={{ marginBottom: '100px' }}>
                    <Col span={10}>
                        <h3>Unlock a wealth of resources tailored specifically for master's students.</h3>
                    </Col>
                    <Col span={1} />
                    <Col span={13} style={{ paddingTop: '12px' }}>
                        <Row span={24}>
                            <Col span={5}>
                                <img src={pikachu} width={100} height={50}/>
                            </Col>
                            <Col span={1} />
                            <Col span={5}>
                                <img src={pikachu} width={100} height={50}/>
                            </Col>
                            <Col span={1} />
                            <Col span={5}>
                                <img src={pikachu} width={100} height={50}/>
                            </Col>
                            <Col span={1} />
                            <Col span={5}>
                                <img src={pikachu} width={100} height={50}/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
            
        </div>
    );
};

export default ToolsSection;
