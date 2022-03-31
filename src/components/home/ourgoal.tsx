import React from "react";
import { Typography, Row, Col } from 'antd'
const { Title, Text } = Typography

const AppOurGoal = () => {
    return (
        <div id="ourgoal" className="bg-43B9AA">
            <div className="container-fluid">
                <div className="whoweare" >
                    <div className="goal">
                        <Title level={4} style={{color:'white'}} >The Goal</Title>
                        <div className="line-555555"/>
                        <Title level={1} style={{color:'white', marginTop: 20}} >Enable the machine-to-machine economy</Title>
                        <Text style={{color: 'white'}}>From the vehicle perspective (for now ;D), explore the possibilites of the machine-to-machine economy with none or minimal human interaction. Create use-cases for machine interactions </Text>
                        <Row gutter={[24, 16]}>
                            <Col lg={{span: 12}} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}} >
                                <img src="./assets/images/GoalLeft.svg" alt="Goal left" />
                                <Text style={{color: 'white'}}>...imagine if your car could pay by itself its eletric charge, while selling your driving data to the insurance office</Text>
                            </Col>
                            <Col lg={{span: 12}} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}} >
                                <img src="./assets/images/GoalRight.svg" alt="Goal right" />
                                <Text style={{color: 'white'}}>...or if your refrigerator could order some milk from the nearby grocery store, while selling your purchase patterns to the dairy industry...</Text>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppOurGoal