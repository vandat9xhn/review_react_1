import * as React from "react";
import * as XLSX from "xlsx";

//
type dataSheetObjType = {
    name: string;
    age: number;
};

const colNames = ["name", "age"] as const;

//
export interface FromExcelProps {}

//
function FromExcel({}: FromExcelProps) {
    //
    const [dataSheet, setDataSheet] = React.useState<dataSheetObjType[]>([]);

    //
    const handleImport: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const file = e.target.files[0];

        if (!file) {
            return;
        }

        const reader = new FileReader();
        reader.onload = () => {
            const wb = XLSX.read(reader.result);
            const ws = wb.Sheets[wb.SheetNames[0]];
            
            const newDataSheet = XLSX.utils.sheet_to_json<dataSheetObjType>(ws);
            setDataSheet(newDataSheet);
        };

        reader.readAsArrayBuffer(file);
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
                <input
                    type="file"
                    placeholder="Choose file xlsx"
                    accept=".xlsx"
                    onChange={handleImport}
                />
            </div>
        </div>
    );
}

export default FromExcel;
