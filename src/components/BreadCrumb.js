import React from 'react';

const BreadCrumb = props => (
    <div style={{display: "flex", alignItems: "center"}} className="breadcrumb">
        <p className="bread">
            {props.title}
            <i className="icon-Iconly-Light-Outline-Arrow-Right-2"/>
            {props.subTitle ? <span className={props.extra ? 'bread' : 'crumb'}>{props.subTitle}</span> : ""}
            {props.extra ? <span className="crumb">{props.extra}</span> : ""}
        </p>
    </div>
);

export default BreadCrumb;