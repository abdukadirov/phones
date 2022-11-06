import { createEffect } from "effector";
import { api } from "../../../../api";

export const getProductsEffect = createEffect({
    handler: api.checkout.getProducts
});

export const getProductItemEffect = createEffect({
    handler: api.checkout.getProductItem
});

export const getSearchItemEffect = createEffect({
    handler: api.checkout.getSearchItem
});