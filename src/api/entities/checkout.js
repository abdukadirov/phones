import {httpGet} from "../init";


export const getProducts = (params) => httpGet({
    url: '/products',
    params
});

export const getProductItem = (id) => httpGet({
    url: `/products/${id}`,
})

export const getSearchItem = (params) => httpGet({
    url: "/products/search",
    params
})