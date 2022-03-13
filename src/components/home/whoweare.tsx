import React from "react";
import { Typography, Row, Col } from 'antd'
const { Title, Text} = Typography

const AppWhoWeAre = () => {
    return (
        <div id="whoweare" className="bg-FFFFFF">
            <div className="container-fluid">
                <Row gutter={[24, 16]}>
                    <Col lg={{ span: 12 }}>
                        <Title level={4} style={{color:'#664c4c'}} >Who we are</Title>
                        <div className="line-43B9AA"/>
                        <Title level={1} style={{color:'#664c4c', marginTop: '20px'}} >Meet CarIOTA</Title>
                        <Text>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</Text>
                    </Col>
                    <Col lg={{ span: 12 }} style={{width: '100%'}}>
                        <img style={{width: '100%', alignItems: 'center'}} src="./assets/images/whoweare.svg" alt="Who we are"/>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default AppWhoWeAre