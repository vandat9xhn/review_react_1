import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import * as React from "react";
import { Provider } from "react-redux";
import "regenerator-runtime/runtime";

import store from "../../../redux";
import TestRedux from "./TestRedux";

//
describe("Test", () => {
    test("Button in document", () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <TestRedux />
            </Provider>
        );
        const btn = getByTestId("TestRedux_btn");
        const count_elm = getByTestId("TestRedux_count");
        const old_count = parseInt(count_elm.innerHTML);
        fireEvent.click(btn);
        const new_count = parseInt(count_elm.innerHTML);
        expect(old_count + 1).toEqual(new_count);
    });
});
