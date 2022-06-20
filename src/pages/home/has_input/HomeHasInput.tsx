import * as React from "react";
import { ContextApp } from "../../../context/app/contextApp";

//
export interface HomeHasInputProps {}

//
function HomeHasInput({}: HomeHasInputProps) {
    //
    const { refHasInput, refHrefHasInput } = React.useContext(ContextApp);

    //
    const [value, setValue] = React.useState("");

    // -----

    //
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const new_value = e.target.value;
        refHrefHasInput.current = new_value ? window.location.href : "";
        refHasInput.current = !!new_value;

        setValue(new_value);
    };
	
    //
    return (
        <div>
            <input
                style={{ border: "1px solid" }}
                type="text"
                value={value}
                onChange={handleChange}
            />
        </div>
    );
}

export default HomeHasInput;
