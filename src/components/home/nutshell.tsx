import React from "react";
import { Typography } from 'antd'
const { Title, Text } = Typography

const AppOurGoal = () => {
    return (
        <div id="nutshell" className="bg-FFFFFF">
            <div className="container-fluid">
                <div className="nutshell" >
                    <Title level={4} style={{color:'555'}} >So, in nutshell</Title>
                    <div className="line-43B9AA "/>
                    <div className="nutshell-text">
                        <Text style={{color: '555'}}>Our goal is to bring the machine-to-machine (M2M) economy to life.</Text>
                        <Text style={{color: '555'}}>We provide a sandbox where business models can be tested and improved. We understand it's a long way from an ideia to proof of concept, then to production-readiness. There are plenty of technical issues, regulation compliance, stakeholder validation, etc. to be overcome till market launch and scalability can be reached.</Text>
                        <img src="assets/images/CarNutshell.svg" alt="car nutshell" />
                        <Text style={{color: '555'}}>... machines in a production line communicating with suppliers, paying for their own maintenance and updates while selling operational data they generate.</Text>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppOurGoal
