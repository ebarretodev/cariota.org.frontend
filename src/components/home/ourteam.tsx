import React from "react";
import { Button, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { FaLinkedinIn } from 'react-icons/fa'
const { Title, Text } = Typography

const AppWhoWeAre = () => {
    const team = [
        {name: 'Danilo Keiiti', img: './assets/images/Danilo.png', linkedin:'https://www.linkedin.com/in/dkeiiti/'},
        {name: 'Eliabel Barreto', img: './assets/images/Eliabel.png', linkedin:'https://www.linkedin.com/in/eliabelbarreto/'},
    ]
    return (
        <div className="bg-FFFFFF">
            <div className="container-fluid">
                <div className="ourteam" >
                        <Title level={4} style={{color:'#664c4c'}} >Our team</Title>
                        <div className="line-43B9AA"/>
                        <div className="ourteam-text">
                            <Text >Our team combines extensive experience in IoT infrastructures, the IOTA protocol and encryption regulations.</Text>
                        </div>
                        <div className="profileCards">
                            { team.map((person)=>
                                <div className="card">
                                    <img src={person.img} />
                                    <Text className="card-text" >{person.name} </Text>
                                    <a href={person.linkedin} target='_blank' >
                                        <FaLinkedinIn />
                                    </a>
                                </div>
                            )}
                        </div>
                </div>
            </div>
        </div>
    )
}

export default AppWhoWeAre