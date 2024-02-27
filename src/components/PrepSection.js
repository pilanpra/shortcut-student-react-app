import React from 'react';
import { Col, Row } from 'antd';
import Interviewingio from '../img/interviewingio.svg'
import Leetcode from '../img/leetcode.svg'
import Adplist from '../img/adplist.svg'
import Pramp from '../img/pramp.svg'

const PrepSection = () => {
    return (
        <div className="tools-section">
            <Col>
                <Row span={24}>
                    <Col span={1} />
                    <Col span={9}>
                        <p className='big-font' style={{ fontFamily: 'Satoshi-Black', textAlign: '-webkit-left' }}>Master interview prep and shake off those nerves
                            <br />
                        </p>
                        <p className='medium-font' style={{ fontFamily: 'Satoshi-Medium', textAlign: '-webkit-left' }}>Utilize the right tools to refine your storytelling skills and practise until interviews become your stronghold.
                        </p>
                        <br />
                        <Row span={24}>
                            <Col span={5}>
                                <a href="https://interviewing.io" target="_blank" rel="noreferrer">
                                    <img src={Interviewingio} width={70} height={70} alt='' />
                                </a>
                            </Col>
                            <Col span={1} />
                            <Col span={5}>
                                <a href="https://leetcode.com" target="_blank" rel="noreferrer">
                                    <img src={Leetcode} width={70} height={70} alt='' />
                                </a>
                            </Col>
                            <Col span={1} />
                            <Col span={5}>
                                <a href="https://adplist.org" target="_blank" rel="noreferrer">
                                    <img src={Adplist} width={70} height={70} alt='' />
                                </a>
                            </Col>
                            <Col span={5}>
                                <a href="https://www.pramp.com" target="_blank" rel="noreferrer">
                                    <img src={Pramp} width={70} height={70} alt='' />
                                </a>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={1} />
                    <Col span={12}>
                        <iframe
                            class="rounded-iframe"
                            width="560"
                            height="315"
                            src="https://www.youtube-nocookie.com/embed/7WaGFlpCSEc?si=gbKJwxV_I3d1OIYd"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                        ></iframe>
                    </Col>
                    <Col span={1} />
                </Row>
            </Col>
            <footer>
                <p style={{ fontFamily: 'Satoshi-Light', textAlign: '-webkit-left' }}>  &copy; 2024 Shortcut. All rights reserved.</p>
                <div>
                    <a style={{ fontFamily: 'Satoshi-Light', textAlign: '-webkit-left' }} href="https://www.linkedin.com/in/abhinavkrishnamurthy/" target="_blank" rel="noopener noreferrer">Abhinav K</a> | 
                    <a  style={{ fontFamily: 'Satoshi-Light', textAlign: '-webkit-left' }} href="https://www.linkedin.com/in/prasad-pilankar-5b2627144/" target="_blank" rel="noopener noreferrer">Prasad P</a> |
                    <a style={{ fontFamily: 'Satoshi-Light', textAlign: '-webkit-left' }} href="https://www.linkedin.com/in/ramgopal96/" target="_blank" rel="noopener noreferrer">Ramgopal</a>
                </div>
            </footer>

        </div>

    );
};

export default PrepSection;
