import { Outlet } from "react-router-dom";
import AppFooter from "./footer";
import InternalHeader from "./header";

import { Layout } from 'antd';
import InternalSider from "./sider";
const { Header, Content, Footer, Sider } = Layout;

const InternalLayout = () => {


    return (
        <div className="container-fluid">
            <Layout style={{ minHeight: '100vh', flexDirection:'column' }}>
                <Layout>
                    <Sider style={{backgroundColor:'white'}} >
                        <img src="./CariotaLogoCorreto.svg" alt="logo cariota" style={{height: '64px'}} />
                        <InternalSider />
                    </Sider>
                    <Layout>
                        <Header style={{
                            padding: 0,
                            borderRadius: '5px',
                            backgroundColor: '#555555',
                            color: 'white',
                            display: "flex",
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            marginRight: '-500px',
                            paddingRight: '500px'
                            }}>
                            <InternalHeader />
                        </Header>
                        <Content style={{
                            backgroundColor:'white',
                            borderRadius: '5px',
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'column'
                        }}>
                            <Outlet />
                        </Content>
                        </Layout>
                </Layout>
                <Footer style={{backgroundColor: 'white', paddingBottom: '10px'}} >
                    <AppFooter />
                </Footer>
            </Layout>
      </div>
    )
}

export default InternalLayout