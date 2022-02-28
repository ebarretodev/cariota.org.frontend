import React from "react";
import { Button, Typography } from 'antd'
import { Link } from 'react-router-dom'
const { Title, Text } = Typography

const AppOurGoal = () => {
    const moduleList = [
        {id: '01', text: 'Shift from CAPEX to OPEX'},
        {id: '02', text: 'Tested for new business models'},
        {id: '03', text: 'Reduce Downtime'},
        {id: '04', text: 'Aid decision-making with realtime'},
        {id: '05', text: 'Bring Sales & Operations closer'},
        {id: '06', text: 'New info to update.'},
    ]

    return (
        <div className="bg-43B9AA">
            <div className="container-fluid">
                <div className="takeowner" >
                    <Title level={4} style={{color:'white'}} >Take ownership of your data</Title>
                    <div className="line-555555 "/>
                    <div className="takeowner-text">
                        <Text style={{color: 'white'}}>A paramount component of digital transformation is data ownership - to treat data as a true digital asset, with exchangable financial value in the ecosystem</Text>
                        <Text style={{color: 'white'}}>Here we list some benefits for industry players</Text>
                    </div>
                    <div className="takeowner-modules" >
                        { moduleList.map((module)=>
                            <div className="module">
                                <div className="square" >
                                    <div className="circle" >
                                        <Title level={4} style={{margin: 0, padding:0 }}>
                                            {module.id}
                                        </Title>
                                    </div>
                                </div>
                                <div className="text">
                                    <Title level={4} style={{margin: 0, padding:0 }}>
                                        {module.text}
                                    </Title>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppOurGoal