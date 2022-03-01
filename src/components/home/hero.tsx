import React from "react";
import { Button, Typography } from 'antd'
const { Title, Text } = Typography


const Hero = () => {
    return (
        <div id="hero" className="heroBlock">
            <div className="continer-fluid">
                <Title level={1}>CarIOTA</Title>
                <Text>Virtual conected car empowered by IOTA</Text>
                <Button type="primary" className="bt-hero">Meet CarIOTA</Button>
            </div>

        </div>
    )
}

export default Hero