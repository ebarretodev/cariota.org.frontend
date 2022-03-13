import React, {useState} from "react";
import { Anchor, Button, Drawer} from 'antd'

import {CgMenu} from 'react-icons/cg'
import { useNavigate, NavLink } from "react-router-dom";

const { Link } = Anchor;

const AppHeader = () => {
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate()
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    const handleLogin = () => {
        navigate('/simulator')
    }
    return(
        <div className="container-fluid">
            <div className="header">
                <div className="logo" >
                    <img src="CariotaLogoCorreto.svg" alt="logo cariota"  />
                </div>
                <div className="mobileHidden">
                    <Anchor targetOffset={64} >
                        <div className="menu">
                            <Link href='#hero' title='Home' />
                            <Link href="#whoweare" title="Who we are" />
                            <Link href="#ourgoal" title="Our Goal" />
                            <Link href="#ourteam" title="Our Team" />
                            <Link href="#source" title="Source" />
                            <Button type="primary" shape="round" className="bt-login" onClick={handleLogin}>
                                Login
                            </Button>
                        </div>
                    </Anchor>
                </div>
                <div className="mobileVisible">
                    <Button
                        type="primary"
                        onClick={showDrawer}
                        style={{
                            backgroundColor: '#43B9AA',
                            display: 'flex',
                            alignItems: "center",
                            border: 'none'}}>
                        <CgMenu />
                    </Button>
                    <Drawer title="Menu" placement="right" onClose={onClose} visible={visible} width={200}>
                    <Anchor targetOffset={64} >
                        <Link href="/#hero" title="Home" />
                        <Link href="/#whoweare" title="Who we are" />
                        <Link href="/#ourgoal" title="Our Goal" />
                        <Link href="/#ourteam" title="Our Team" />
                        <Link href="/#source" title="Source" />
                        <Button type="primary" shape="round" className="bt-login">
                            Login
                        </Button>
                    </Anchor>
                    </Drawer>
                </div>
            </div>
        </div>
    )
}
export default AppHeader