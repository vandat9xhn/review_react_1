import * as React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router";

import { ContextApp } from "../context/app/contextApp";
import HomeChild from "../pages/home/child/HomeChild";
import HomeHasInput from "../pages/home/has_input/HomeHasInput";

import Home from "../pages/home/_main/Home";
import MUI from "../pages/mui/_main/MUI";

//
export interface CustomRoutesProps {}

//
function CustomRoutes({}: CustomRoutesProps) {
    //
    const use_location = useLocation();

    // //
    const { refHasInput } = React.useContext(ContextApp);

    //
    const [displayLocation, setDisplayLocation] = React.useState(use_location);

    //
    React.useEffect(() => {
        if (!refHasInput.current) {
            setDisplayLocation(use_location);
        }
    }, [use_location, refHasInput.current]);

    // console.log(displayLocation);
    
    // ----

    //
    return (
        <Routes location={displayLocation}>
            <Route path="/home/*" element={<Home />}>
                {[1, 2, 3].map((num) => (
                    <Route
                        key={num}
                        path={`${num}`}
                        element={<HomeChild key={num} num={num} />}
                    />
                ))}

                <Route
                    path="4"
                    element={
                        <HomeChild num={4} key={4}>
                            <HomeHasInput />
                        </HomeChild>
                    }
                />
                {/* <Route path="1" element={<HomeChild num={1} />} />
                <Route path="2" element={<HomeChild num={2} />} />
                <Route path="3" element={<HomeChild num={3} />} />
                <Route path="4" element={<HomeChild num={4} />} /> */}
            </Route>

            <Route path="/mui" element={<MUI />} />

            <Route path="*" element={<Navigate to="/home/1" replace />} />
        </Routes>
    );
}

export default CustomRoutes;
