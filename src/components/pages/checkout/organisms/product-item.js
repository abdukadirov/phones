import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {useStore} from "effector-react";
import effector from "../effector";
import BreadCrumb from "../../../BreadCrumb";
import {Button, Card, Carousel, Col, Image, Row, Spin, Tabs} from "antd";
import {Link} from "react-router-dom";

const {stores, effects, events} = effector;

const ProductItem = () => {
    const {id} = useParams()
    const $productItem = useStore(stores.$productItem);
    const [percent, setPercent] = useState(52.5)
    const [month, setMonth] = useState(3)
    const {data} = $productItem
    useEffect(() => {
        effects.getProductItemEffect(id)
    }, []);

    console.log($productItem, 'ITEM')
    return (
        <div className="section-product-item">
            <BreadCrumb title="Заявки" subTitle="Оформить заказ" extra={data.title}/>
            <div className="product-item-content">
                <div className="cart">
                    <i className="icon-Iconly-Light-Outline-Buy"/>
                    <p>Перейти в корзину</p>
                    <div className="count">1</div>
                </div>
                <p className="main-title">{data.title}</p>
                <Row>
                    <Col span={12}>
                        <Card>
                            <div className="product-item-image">
                                <div className="product-item-status">
                                    <div className="trade-in">
                                        <i className="icon-icon-trade-in"/>
                                    </div>
                                    <div className="bundle">
                                        <i className="icon-icon-bundle"/>
                                    </div>
                                    <div className="sale">
                                        <i className="icon-icon-"/>
                                    </div>
                                    <div className="sale">
                                        <i className="icon-icon-"/>
                                    </div>
                                </div>
                                <Carousel autoplay>
                                    <div>
                                        <Image.PreviewGroup>
                                            <Image
                                                src={data?.thumbnail}
                                                // style={contentStyle}
                                                alt={data.description}
                                                onError={(e) => {
                                                    e.persist();
                                                    e.target.src = 'noImage';
                                                }}
                                            />
                                        </Image.PreviewGroup>
                                    </div>
                                    <div>
                                        <Image.PreviewGroup>
                                            <Image
                                                src={data?.thumbnail}
                                                // style={contentStyle}
                                                alt={data.description}
                                                onError={(e) => {
                                                    e.persist();
                                                    e.target.src = 'noImage';
                                                }}
                                            />
                                        </Image.PreviewGroup>
                                    </div>
                                    <div>
                                        <Image.PreviewGroup>
                                            <Image
                                                src={data?.thumbnail}
                                                // style={contentStyle}
                                                alt={data.description}
                                                onError={(e) => {
                                                    e.persist();
                                                    e.target.src = 'noImage';
                                                }}
                                            />
                                        </Image.PreviewGroup>
                                    </div>
                                    <div>
                                        <Image.PreviewGroup>
                                            <Image
                                                src={data?.thumbnail}
                                                // style={contentStyle}
                                                alt={data.description}
                                                onError={(e) => {
                                                    e.persist();
                                                    e.target.src = 'noImage';
                                                }}
                                            />
                                        </Image.PreviewGroup>
                                    </div>
                                </Carousel>
                            </div>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <div className="product-item-information">
                            <div className="product-price">
                                <p>Цена телефона</p>
                                <p>$ {data?.price}</p>
                            </div>
                            <div className="total-price">
                                <div>
                                    <p>Общая цена (с наценкой)</p>
                                    <p>$ {data?.price + percent}</p>
                                </div>
                                <div className="monthly-payment">
                                    <p className="first-payment">от ${percent}</p>
                                    <p className="per-month">x{month}</p>
                                </div>
                            </div>
                            <Tabs
                                defaultActiveKey="1"
                                type="card"
                                items={[
                                    {
                                        label: <Button onClick={() => {
                                            setPercent(52.5);
                                            setMonth(3)
                                        }}>
                                            3 мес
                                        </Button>,
                                        key: '1',
                                        children: <div className="percent-of-payment">
                                            <p>Наценка:</p>
                                            <p>5%</p>
                                        </div>,
                                    },
                                    {
                                        label: <Button onClick={() => {
                                            setPercent(100.45);
                                            setMonth(6)
                                        }}>6 мес</Button>,
                                        key: '2',
                                        children: <div className="percent-of-payment">
                                            <p>Наценка:</p>
                                            <p>10%</p>
                                        </div>,
                                    },
                                    {
                                        label: <Button onClick={() => {
                                            setPercent(150.28);
                                            setMonth(12)
                                        }}>12 мес</Button>,
                                        key: '3',
                                        children: <div className="percent-of-payment">
                                            <p>Наценка:</p>
                                            <p>15%</p>
                                        </div>,
                                    },
                                    {
                                        label: <Button onClick={() => {
                                            setPercent(200.37);
                                            setMonth(24)
                                        }}>24 мес</Button>,
                                        key: '4',
                                        children: <div className="percent-of-payment">
                                            <p>Наценка:</p>
                                            <p>20%</p>
                                        </div>,
                                    },
                                ]}
                            />
                            <div className="item-description">
                                <p className="item-description-title">Общие характеристики</p>
                                <p className="item-description-text">{data.description}</p>
                                <p className="item-description-more">
                                    <Link to="#">Показать все</Link>
                                    <i className="icon-Iconly-Light-Outline-Arrow-Right-2"/>
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <p className="sale-title">Акции</p>
                        <div className="sale">
                            <div className="sale-info">
                                <label>
                                    <div className="sale-info-content">
                                        <div className="product-item-icon">
                                            <i className="icon-icon-trade-in"/>
                                        </div>
                                        <div className="product-item-offer-title">
                                            <p>Обменяй свой старый айфон и получи скидку на новый</p>
                                            <p>- 400 000 сум</p>
                                        </div>
                                    </div>
                                    <div className="product-item-action">
                                        <div>
                                            <input type="checkbox" className="m-checkbox__input"/>
                                        </div>
                                    </div>
                                </label>
                            </div>
                            <div className="sale-info">
                                <label>
                                    <div className="sale-info-content">
                                        <div className="product-item-icon icon-bundle">
                                            <i className="icon-icon-bundle"/>
                                        </div>
                                        <div className="product-item-offer-title">
                                            <p>Наушники в подарок</p>
                                            <p>Apple EarPods</p>
                                        </div>
                                    </div>
                                    <div className="product-item-action">
                                        <div>
                                            <input type="checkbox" className="m-checkbox__input"/>
                                        </div>
                                    </div>
                                </label>
                            </div>
                            <div className="sale-info">
                                <label>
                                    <div className="sale-info-content">
                                        <div className="product-item-icon icon-">
                                            <i className="icon-icon-"/>
                                        </div>
                                        <div className="product-item-offer-title">
                                            <p>Скидка 20% на смартфоны</p>
                                            <p>- 10 000 сум</p>
                                        </div>
                                    </div>
                                    <div className="product-item-action">
                                        <div>
                                            <input type="checkbox" className="m-checkbox__input"/>
                                        </div>
                                    </div>
                                </label>
                            </div>
                            <div className="sale-info">
                                <label>
                                    <div className="sale-info-content">
                                        <div className="product-item-icon icon-2">
                                            <i className="icon-icon-"/>
                                        </div>
                                        <div className="product-item-offer-title">
                                            <p>Скидка на айфоны</p>
                                            <p>IMEI 012345678901234</p>
                                            <p>- 10 000 сум</p>
                                        </div>
                                    </div>
                                    <div className="product-item-action">
                                        <div>
                                            <input type="checkbox" className="m-checkbox__input"/>
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <Button className="checkout-btn">Добавить в корзину</Button>
                    </Col>
                </Row>
            </div>
            {$productItem.loading && <div className="loader">
                <Spin size="large"/>
            </div>}
        </div>
    );
};

export default ProductItem;