import React, {useEffect} from 'react';
import {Button, Empty, Form, Input} from 'antd';
import {useStore} from "effector-react";
import effector from "../effector";
import ProductsList from "../pages/products-list";
import PaginationProps from "../../../PaginationProps";
import BreadCrumb from "../../../BreadCrumb";

const {stores, effects, events} = effector;
let time;
const CheckoutPage = () => {
    const $productsList = useStore(stores.$products);
    const $productsListFilterProps = useStore(stores.$productsListFilterProps);
    const $searchedItem = useStore(stores.$searchedItem);
    const [form] = Form.useForm();
    const searchValue = Form.useWatch('search', form);

    useEffect(() => {
        effects.getProductsEffect({
            skip: $productsListFilterProps.start,
            limit: $productsListFilterProps.limit
        })
    }, [$productsListFilterProps]);

    useEffect(() => {
        if (searchValue) {
            onSearch()
        }
    }, [searchValue])

    const onSearch = () => {
        clearTimeout(time)
        time = setTimeout(() => {
            effects.getSearchItemEffect({q: searchValue})
        }, 400)
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    console.log($productsList)
    return (
        <div className="section-checkout">
            <BreadCrumb title="Заявки" subTitle="Оформить заказ"/>
            <p className="main-title">Оформить заказ</p>
            <Form
                name="basic"
                className="search-form"
                style={{display: 'flex'}}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                form={form}
            >
                <Form.Item
                    name="search"
                    style={{width: '100%'}}
                >
                    <Input placeholder="Поиск по названию товара"/>
                </Form.Item>

                <Form.Item>
                    <Button htmlType="submit" className="search-btn">
                        <i className="icon-Iconly-Light-Outline-Search"/>
                    </Button>
                </Form.Item>
            </Form>
            <p className="total">Все товары ({$productsList?.data?.total})</p>
            <ProductsList item={$productsList?.data} searchedItem={$searchedItem} loading={$productsList.loading}/>
            {$productsList?.data?.products && $searchedItem.data.total !== 0 &&
            <PaginationProps
                paginationProps={{
                    ...$productsListFilterProps,
                    onChange: ({page, pageSize, start}) => events.setProductsListFilterPropsEvent({
                        current: page,
                        start: start,
                        limit: pageSize,
                        pageSize: pageSize
                    }),
                    total: $productsList?.data?.total,
                    pagination: true,
                    showSizeChanger: false
                }}
            />
            }
        </div>
    );
};

export default CheckoutPage;