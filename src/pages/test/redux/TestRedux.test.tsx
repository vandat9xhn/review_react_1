import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import * as React from "react";
import { Provider } from "react-redux";
import "regenerator-runtime/runtime";

import store from "../../../redux";
import TestRedux from "./TestRedux";
import TestRedux2 from "./TestRedux2";

//
describe("Test", () => {
    test("Test Redux", () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <TestRedux />

                <TestRedux2 />
            </Provider>
        );
        const btn = getByTestId("TestRedux_btn");
        const count_elm = getByTestId("TestRedux_count");
        const count_elm2 = getByTestId("TestRedux2_count");
        const old_count = parseInt(count_elm.innerHTML);
        const old_count2 = parseInt(count_elm.innerHTML);
        expect(old_count).toEqual(old_count2);
        
        fireEvent.click(btn);
        const new_count = parseInt(count_elm.innerHTML);
        const new_count2 = parseInt(count_elm2.innerHTML);
        expect(old_count + 1).toEqual(new_count);
        expect(new_count).toEqual(new_count2);
    });
});
