import React from "react";
import { Button, Typography } from 'antd'
import { Link } from 'react-router-dom'
const { Title, Text } = Typography

const AppOurGoal = () => {
    return (
        <div className="bg-FFFFFF">
            <div className="container-fluid">
                <div className="nutshell" >
                    <Title level={4} style={{color:'555'}} >So, in nutshell</Title>
                    <div className="line-43B9AA "/>
                    <div className="nutshell-text">
                        <Text style={{color: '555'}}>Our goal is to bring the machine-to-machine (M2M) economy to life.</Text>
                        <Text style={{color: '555'}}>We develop code and games aiming industrial applications. We undestard it's a long road to an ideia from proof of concept till production-readiness. There are plenty of technical and business models testing, plant pilots, internal 6 external validation, etc. to be overcome till industrial scalability can be reached. And that's why we focus on building M2M gaming  plataforms powered by IOTA - to help industries to overcome those needs by providing an interactive testbed.</Text>
                        <img src="./assets/images/CarNutshell.svg" />
                        <Text style={{color: '555'}}>...Picture machines in a production line communicating with suppliers, paying for maintenance services and updates while selling their operational data.</Text>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppOurGoal