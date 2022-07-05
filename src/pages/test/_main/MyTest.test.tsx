import "@testing-library/jest-dom/extend-expect";
import { prettyDOM, render, waitFor } from "@testing-library/react";
import * as React from "react";
import "regenerator-runtime/runtime";

import { API_City_L } from "../../../_api/city/list";
import MyTest from "./MyTest";

//
describe("Test", () => {
    test("Button in document", () => {
        const { getByRole } = render(<MyTest />);
        const btn = getByRole("button");
        expect(btn).toBeInTheDocument();
    });

    test("List in document", async () => {
        await waitFor(() => API_City_L(0));
        console.log(1);

        const { getByTestId } = render(<MyTest />);

        await waitFor(() => {
            const list = getByTestId("MyTest_list");
            expect(list).toBeInTheDocument();
            console.log(prettyDOM(list));
        });
    });
});
