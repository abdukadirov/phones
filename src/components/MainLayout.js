import React from 'react';
import Sidebar from "./Sidebar";
import {Layout} from 'antd';
import MainHeader from "./MainHeader";
import RightSite from "./RightSite";


const MainLayout = () => {
    const {Content} = Layout;
    return (
        <>
            <Layout className="site-layout">
                <MainHeader/>
                <Content
                    className="site-layout-background"
                    style={{
                        minHeight: "auto",
                        width: "auto",
                        display: 'flex',
                        background: '#FFFFFF'
                    }}
                >
                    <Sidebar/>
                    <RightSite/>
                </Content>
            </Layout>
        </>
    );
}

export default MainLayout;