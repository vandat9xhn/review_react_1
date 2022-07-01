import * as React from "react";

import AntdCascader from "../cascader/AntdCascader";
import AntdDatePicker from "../date_picker/AntdDatePicker";
import AntdPagination from "../pagination/AntdPagination";

//
export interface AntdProps {}

//
function Antd({}: AntdProps) {
    //
    return (
        <div>
            <div>
                <AntdDatePicker />
            </div>

            <div>
                <AntdPagination />
            </div>

            <div>
                <AntdCascader />
            </div>
        </div>
    );
}

export default Antd;
