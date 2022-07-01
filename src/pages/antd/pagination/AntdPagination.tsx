import * as React from "react";
import { Pagination, PaginationProps } from "antd";
import "antd/lib/pagination/style/index.css";
import "antd/lib/pagination/style/css.js";

//
export interface AntdPaginationProps {}

//
function AntdPagination({}: AntdPaginationProps) {
    //
    const handleChange: PaginationProps["onChange"] = (
        page: number,
        pageSize: number
    ) => {
        console.log(page, pageSize);
    };

    //
    return (
        <div>
            <Pagination
                defaultCurrent={5}
                total={200}
                showSizeChanger={false}
                defaultPageSize={25}
                onChange={handleChange}
            />
        </div>
    );
}

export default AntdPagination;
