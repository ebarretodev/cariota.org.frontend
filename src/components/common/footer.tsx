import React from "react";
import { Typography, BackTop, Row, Col } from 'antd';
import { BsFillArrowUpCircleFill } from 'react-icons/bs'

const { Title } = Typography;

const AppFooter = () => {

    return(
        <div className="container-fluid">
            <div className="footer">
            <Row gutter={[16, 16]}>
                <Col md={{ span: 8, offset: 1 }}  >
                    <div className="footer-logo">
                        <img src="./CariotaLogoCorreto.svg"/>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </Col>
                <Col md={{ span: 8, offset: 1 }}>
                    <div className="footer-map">
                        <Title level={4}>Map List</Title>
                        <ul>
                            <li><a>Home</a></li>
                            <li><a>Who we are</a></li>
                            <li><a>Our Goal</a></li>
                            <li><a>Our team</a></li>
                            <li><a>Source</a></li>
                        </ul>

                    </div>
                </Col>
                <Col md={{ span: 8, offset: 1 }}>
                    <div className="footer-empty">
                    </div>
                </Col>
            </Row>

            </div>
            <div className="copyright">
                <p>Copyright &copy; 2022, CarIOTA</p>
            </div>
            <BackTop>
                <div className="goTop">
                    <BsFillArrowUpCircleFill />
                </div>
            </BackTop>
        </div>
    )
}

export default AppFooter