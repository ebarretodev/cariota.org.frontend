import React from "react";
import { Typography, BackTop, Row, Col, Anchor} from 'antd';
import { BsFillArrowUpCircleFill } from 'react-icons/bs'

const { Title } = Typography;
const { Link } = Anchor;

const AppFooter = () => {

    return(
        <div className="container-fluid">
            {/*<div className="footer">
            <Row gutter={[16, 16]}>
                <Col md={{ span: 8, offset: 1 }}  >
                    <div className="footer-logo">
                        <img src="CariotaLogoCorreto.svg" alt="logo cariota"/>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </Col>
                <Col md={{ span: 8, offset: 1 }}>
                    <div className="footer-map">
                        <Title level={4}>Map List</Title>
                        <Anchor targetOffset={64} affix={false}>
                            <Link href="/#hero" title="Home" />
                            <Link href="/#whoweare" title="Who we are" />
                            <Link href="/#ourgoal" title="Our Goal" />
                            <Link href="/#ourteam" title="Our Team" />
                            <Link href="/#source" title="Source" />
                        </Anchor>
                    </div>
                </Col>
                <Col md={{ span: 8, offset: 1 }}>
                    <div className="footer-empty">
                    </div>
                </Col>
            </Row>

            </div>*/}
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