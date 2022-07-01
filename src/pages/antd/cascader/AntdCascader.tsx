import * as React from "react";
import { Cascader } from "antd";
import { DefaultOptionType } from "antd/lib/cascader";
import "antd/lib/cascader/style/index.css";
import "antd/lib/cascader/style/css.js";

//
export interface AntdCascaderProps {}

//
const OPTIONS: DefaultOptionType[] = [
    {
        value: "Value 1",
        label: "Label 1",
        children: [
            {
                value: "Value 1.1",
                label: "Label 1.1",
                children: [{ value: "Value 1.1.1", label: "Label 1.1.1" }],
            },
        ],
    },
];

//
function AntdCascader({}: AntdCascaderProps) {
    //
    return (
        <div>
            <Cascader options={OPTIONS} />
        </div>
    );
}

export default AntdCascader;
