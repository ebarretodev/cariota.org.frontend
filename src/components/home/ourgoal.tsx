import React from "react";
import { Button, Typography } from 'antd'
import { Link } from 'react-router-dom'
const { Title, Text } = Typography

const AppOurGoal = () => {
    return (
        <div className="bg-43B9AA">
            <div className="container-fluid">
                <div className="whoweare" >
                    <div className="goal">
                        <Title level={4} style={{color:'white'}} >Our Goal</Title>
                        <div className="line-555555"/>
                        <Title level={1} style={{color:'white', marginTop: 20}} >Borderless</Title>
                        <Text style={{color: 'white'}}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</Text>
                        <div className="goal-images">
                            <div className="goal-image">
                                <img src="./assets/images/GoalLeft.svg" />
                                <Text style={{color: 'white'}}>...imagine if your car could pay by itaelf its eletric charge, while selling your driving data to the insurance office</Text>
                            </div>
                            <div className="goal-image">
                                <img src="./assets/images/GoalRight.svg" />
                                <Text style={{color: 'white'}}>...or if your refrigerator could order some milk from the nearby grocery store, while selling your purchase patterns to the dairy industry...</Text>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AppOurGoal