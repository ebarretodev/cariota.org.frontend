import React from "react";
import { Menu, Button} from 'antd'

const AppHeader = () => {
    return(
        <div className="container-fluid">
            <div className="header">
                <div className="logo" >
                    <img src="./CariotaLogoCorreto.svg" />
                </div>
                <div className="menu">
                    <Menu mode="horizontal" defaultSelectedKeys={['home']}>
                        <Menu.Item key='home'>Home</Menu.Item>
                        <Menu.Item key='whoweare'>Who we are</Menu.Item>
                        <Menu.Item key='ourgoal'>Our Goal</Menu.Item>
                        <Menu.Item key='ourteam'>Our Team</Menu.Item>
                        <Menu.Item key='source'>Source</Menu.Item>
                    </Menu>
                    <Button type="primary" shape="round" className="bt-login">
                        Login
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default AppHeader