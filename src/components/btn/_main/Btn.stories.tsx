import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Btn } from "./Btn";

//
export default {
    title: "Btn",
    component: Btn,
};

//
export const BtnSb = () => (
    <Btn height={"36px"} bg="green" style={{ color: "white", border: "none" }}>
        Click me!
    </Btn>
);
