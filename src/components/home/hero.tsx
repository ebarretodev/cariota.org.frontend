import React from "react";
import { Button, Typography } from 'antd'
const { Title } = Typography


const Hero = () => {
    return (
        <div className="heroBlock">
            <div className="continer-fluid">
                <h1>CarIOTA</h1>
                <p>Virtual conected car empowered by IOTA</p>
                <Button type="primary" className="bt-hero">Meet CarIOTA</Button>
            </div>

        </div>
    )
}

export default Hero