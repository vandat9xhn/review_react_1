import * as React from "react";
import * as XLSX from "xlsx";
import * as FileSaver from "file-saver";

//
const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
const fileExtension = ".xlsx";
const fileName = "my_excel";

const colNames = ["name", "age"] as const;
//
const dataSheet: { name: string; age: number }[] = [
    {
        name: "Nguyen",
        age: 20,
    },
    {
        name: "My",
        age: 18,
    },
    {
        name: "Trinh",
        age: 21,
    },
];

//
export interface ToExcelProps {}

//
function ToExcel({}: ToExcelProps) {
    //
    const handleExport = () => {
        if (!confirm()) {
            return;
        }

        const ws = XLSX.utils.json_to_sheet(dataSheet);
        const wb: XLSX.WorkBook = {
            Sheets: { data: ws },
            SheetNames: ["data"],
        };
        const buffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
        const blob = new Blob([buffer], { type: fileType });
        FileSaver.saveAs(blob, fileName + fileExtension);
    };

    //
    return (
        <div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>

                            <th>Age</th>
                        </tr>
                    </thead>

                    <tbody>
                        {dataSheet.map((item, ix) => (
                            <tr key={ix}>
                                {colNames.map((col, col_ix) => (
                                    <td key={col_ix}>{item[col]}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div>
                <button type="button" onClick={handleExport}>
                    Export to Excel
                </button>
            </div>
        </div>
    );
}

export default ToExcel;
