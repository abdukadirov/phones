import React from 'react';
import {Pagination} from "antd";

const PaginationProps = ({paginationProps}) => (
    <Pagination
        {...paginationProps}
        total={paginationProps.total || 100}
        onChange={(page, pageSize) => {
            const start = page * pageSize - pageSize
            paginationProps.onChange({page, pageSize, start})
        }}
    />
)

export default PaginationProps;