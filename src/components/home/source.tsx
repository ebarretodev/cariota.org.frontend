import React from "react";
import { Button, Typography } from 'antd'
import { Link } from 'react-router-dom'
const { Title } = Typography

const AppSource = () => {
    return (
        <div id="source" className="bg-555555">
            <div className="continer-fluid">
                <div className="source" >
                    <Title level={4} style={{color:'white'}} >Source</Title>
                    <div className="line-43B9AA"/>
                    <a href="https://github.com/ebarretodev/cariota.org.backend" target='_blank'>CarIOTA API (Github)</a>
                    <a href="https://github.com/ebarretodev/cariota.org.simulator" target='_blank'>CarIOTA Simulator (Github)</a>
                </div>
            </div>
        </div>
    )
}

export default AppSource