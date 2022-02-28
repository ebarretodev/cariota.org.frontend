import React from "react";
import { Typography } from 'antd';

const { Title } = Typography;

const AppFooter = () => {

    return(
        <div className="container-fluid">
            <div className="footer">
                <div className="footer-logo">
                    <img src="./CariotaLogoCorreto.svg"/>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
                <div className="footer-map">
                    <Title level={4}>Map List</Title>
                    <ul>
                        <li><a>Home</a></li>
                        <li><a>Who we are</a></li>
                        <li><a>Our Goal</a></li>
                        <li><a>Our team</a></li>
                        <li><a>Source</a></li>
                    </ul>

                </div>
                <div className="footer-empty">
                </div>
            </div>
            <div className="copyright">
                <p>Copyright &copy; 2022, CarIOTA</p>
            </div>
        </div>
    )
}

export default AppFooter