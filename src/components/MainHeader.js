import React from 'react';
import {Badge} from "antd";

const MainHeader = () => {
    return (
        <div className="header">
            <p className="logo">LOGO</p>
            <div className="header-right-site">
                <Badge count={5} showZero>
                    <div className="notification">
                        <i className="icon-Iconly-Bold-Notification"/>
                    </div>
                </Badge>
                <div className="current-user">
                    <div className="user-cabinet">
                        <p>Личный кабинет</p>
                        <span className="icon-icon--"><span className="path1"/><span className="path2"/></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainHeader;