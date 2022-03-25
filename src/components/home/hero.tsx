import React from "react";
import { Button, Typography } from 'antd'
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography

const Hero = () => {
    const navigate = useNavigate()

    const handleLogin = () => {
        navigate('/simulator')
    }
    return (
        <div id="hero" className="heroBlock">
            <div className="continer-fluid">
                <Title level={1}>CarIOTA</Title>
                <Text>is a virtual conected car empowered by IOTA</Text>
                <br />
                <Button type="primary" className="bt-hero" onClick={handleLogin}>Try CarIOTA</Button>
            </div>
        </div>
    )
}

export default Hero