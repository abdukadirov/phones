import React from 'react';
import data from '../constants/menu.json'
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="sidebar">
            {data.menu.map((item) => (
                <NavLink to={item.link} className="nav-item" key={item.id}>
                    <i className={item.icon}/>
                    <p>{item.name}</p>
                </NavLink>
            ))}
        </div>
    );
};

export default Sidebar;