import React from "react";
import { Button, Typography } from 'antd'
import { Link } from 'react-router-dom'
const { Title } = Typography

const AppWhoWeAre = () => {
    return (
        <div className="bg-FFFFFF">
            <div className="container-fluid">
                <div className="whoweare" >
                    <div className="about-left">
                        <Title level={4} style={{color:'#664c4c'}} >Who we are</Title>
                        <div className="line-43B9AA"/>
                        <Title level={1} style={{color:'#664c4c'}} >Meet CarIOTA</Title>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                    <img src="./assets/images/whoweare.svg" />
                </div>
            </div>
        </div>
    )
}

export default AppWhoWeAre