import React from 'react';
import {Route, Routes} from "react-router-dom";
import CheckoutPage from "./pages/checkout-page";
import ProductItem from "./organisms/product-item";

const Checkout = () => {
    return (
        <Routes>
            <Route path="/" element={<CheckoutPage/>}/>
            <Route path="view/:id" element={<ProductItem/>}/>
        </Routes>
    );
};

export default Checkout;