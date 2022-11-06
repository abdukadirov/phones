import React from 'react';
import {Card, Col, Empty, Row, Spin} from 'antd';
import {useNavigate} from "react-router-dom";

const ProductsList = props => {
    const {item, searchedItem, loading} = props
    const navigate = useNavigate()
    if (item?.products && item?.products?.length) {
        return (
            <Row className="product-item-content">
                {loading || searchedItem.loading && <div className="loader">
                    <Spin size="large"/>
                </div>}
                {(searchedItem.data?.products || item?.products).map(item => (
                    <Col key={item.id} className="product-item" onClick={() => navigate(`view/${item.id}`)}>
                        <Card
                            title={
                                <div className="product-image">
                                    <div className="product-status">
                                        <div>
                                            <i className="icon-icon-bundle"/>
                                        </div>
                                        <div>
                                            <i className="icon-icon-"/>
                                        </div>
                                    </div>
                                    <img src={item?.thumbnail} alt={item.description}/>
                                </div>
                            }
                            bordered={false}
                        >
                            <p className="product-name">{item.category} {item.title}</p>
                            <p className="product-price">$ {item?.price}</p>
                            <div className="monthly-payment">
                                <div className="first-payment">от ${item?.discountPercentage}</div>
                                <p className="per-month">x24</p>
                            </div>
                        </Card>
                    </Col>
                ))}
                {searchedItem.data.total === 0 && <Empty/>}
            </Row>
        );
    }
};

export default ProductsList;