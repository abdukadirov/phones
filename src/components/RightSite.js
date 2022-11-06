import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Checkout from "./pages/checkout";
import Main from "./pages/Main";
import Orders from "./pages/Orders";
import Goods from "./pages/Goods";
import Comments from "./pages/Comments";

const RightSite = () => {
    return (
        <div className="right-site">
            <Routes>
                <Route path="/" element={<Navigate to="checkout"/>}/>
                <Route path="main" element={<Main/>}/>
                <Route path="orders" element={<Orders/>}/>
                <Route path="goods" element={<Goods/>}/>
                <Route path="comments" element={<Comments/>}/>
                <Route path="checkout/*" element={<Checkout/>}/>
            </Routes>
        </div>
    );
};

export default RightSite;