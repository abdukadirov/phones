import React from "react";
import axios from 'axios';

const httpClient = axios.create({
    // origin: 'http://localhost:3000',
    // optionSuccessStatus: 200,
    credentials: true,
    baseURL: 'https://dummyjson.com'
});

httpClient.interceptors.response.use(
    (response) => {
        return response?.data
    },
    (error) => {
        console.error(error);
    });


export const httpGet = (params) => httpClient({
    method: 'get',
    ...params
});

export const httpPost = (params) => httpClient({
    method: 'post',
    ...params
});

export const httpPut = (params) => httpClient({
    method: 'put',
    ...params
});

export const httpPatch = (params) => httpClient({
    method: 'patch',
    ...params
});

export const httpDelete = (params) => httpClient({
    method: 'delete',
    ...params
});