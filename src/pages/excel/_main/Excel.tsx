import * as React from "react";

import ToExcel from "../to_excel/ToExcel";
import FromExcel from "../from_excel/FromExcel";

//
export interface ExcelProps {}

//
function Excel({}: ExcelProps) {
    //
    return (
        <div>
            <div>
                {/* <ToExcel /> */}
            </div>

            <div>
                <FromExcel />
            </div>
        </div>
    );
}

export default Excel;
