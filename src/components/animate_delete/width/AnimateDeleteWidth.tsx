import * as React from "react";

import { useDisplayBlockToNone } from "react-commons-ts";

import "./AnimateDeleteWidthItem.scss";

//
export interface AnimateDeleteWidthProps {}

//
function AnimateDeleteWidthItem({ item, ix, onDelete }) {
    //
    const { opacity_0, display_none, changeBlockToNone } =
        useDisplayBlockToNone({
            trans_time: 250,
            initial_display_none: false,
        });

    //
    React.useEffect(() => {
        if (display_none) {
            onDelete(ix);
        }
    }, [display_none]);

    // ----

    const onClick = () => {
        changeBlockToNone();
    };

    //
    return (
        <div
            className={`AnimateDeleteWidthItem hover:bg-gray-100 cursor-pointer transition-all duration-[250ms] ease-in-out ${
                opacity_0
                    ? "AnimateDeleteWidthItem-close h-0 p-0 opacity-0"
                    : "h-[50px] p-[10px]"
            }`}
            onClick={onClick}
        >
            Click to delete: Number {item}
        </div>
    );
}

//
function AnimateDeleteWidth({}: AnimateDeleteWidthProps) {
    //
    const [arr, setArr] = React.useState([1, 2, 3, 4, 5]);

    // -----

    const onDelete = (ix = 0) => {
        setArr((arr) => {
            const new_arr = [...arr];
            new_arr.splice(ix, 1);

            return new_arr;
        });
    };

    //
    return (
        <div>
            {arr.map((item, ix) => (
                <div key={item}>
                    <AnimateDeleteWidthItem
                        item={item}
                        ix={ix}
                        onDelete={onDelete}
                    />
                </div>
            ))}
        </div>
    );
}

export default AnimateDeleteWidth;
