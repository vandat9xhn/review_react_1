import * as React from "react";
import { DatePicker, DatePickerProps } from "antd";
import "antd/lib/date-picker/style/index.css";
import "antd/lib/date-picker/style/css.js";

//
export interface AntdDatePickerProps {}

//
function AntdDatePicker({}: AntdDatePickerProps) {
    //
    const handleChange: DatePickerProps["onChange"] = (moment, dateString) => {
        console.log(moment.second(), dateString);
    };

    //
    return (
        <div>
            <h2>Date Picker</h2>

            <div>
                <DatePicker onChange={handleChange} picker="month" />
            </div>
        </div>
    );
}

export default AntdDatePicker;
