import {createStore} from "effector";
import * as effects from './effects';
import * as events from './events';
import {PAGINATION_DATA} from "../../../constants/Constants";

export const $products = createStore( {
    loading: false,
    data: [],
    error: null
}).on(effects.getProductsEffect.pending, (prevStore, pending) => {
    return {
        ...prevStore,
        loading: pending,
    };
}).on(effects.getProductsEffect.finally, (prevStore, response) => {
    if (response.error) {
        return {
            ...prevStore,
            data: [],
            error: response.error
        };
    } else {
        return {
            ...prevStore,
            data: response.result,
            error: null
        };
    }
}).reset(events.resetProductsListPropsEvent);

export const $productsListFilterProps = createStore({
    ...PAGINATION_DATA
}).on(events.setProductsListFilterPropsEvent, (prevStore, props) => {
    return {
        ...prevStore,
        ...props,
    };
}).reset(events.resetProductsListFilterPropsEvent)

export const $productItem = createStore( {
    loading: false,
    data: [],
    error: null
}).on(effects.getProductItemEffect.pending, (prevStore, pending) => {
    return {
        ...prevStore,
        loading: pending,
    };
}).on(effects.getProductItemEffect.finally, (prevStore, response) => {
    if (response.error) {
        return {
            ...prevStore,
            data: [],
            error: response.error
        };
    } else {
        return {
            ...prevStore,
            data: response.result,
            error: null
        };
    }
}).reset(events.resetProductItemPropsEvent);

export const $searchedItem = createStore( {
    loading: false,
    data: [],
    error: null
}).on(effects.getSearchItemEffect.pending, (prevStore, pending) => {
    return {
        ...prevStore,
        loading: pending,
    };
}).on(effects.getSearchItemEffect.finally, (prevStore, response) => {
    if (response.error) {
        return {
            ...prevStore,
            data: [],
            error: response.error
        };
    } else {
        return {
            ...prevStore,
            data: response.result,
            error: null
        };
    }
}).reset(events.resetProductItemPropsEvent);