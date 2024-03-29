import * as React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router";

import { ContextApp } from "../context/app/contextApp";
import AnimateDeletePg from "../pages/aniamte_delete/_main/AnimateDeletePg";
import Antd from "../pages/antd/_main/Antd";
import CanvasPath2D from "../pages/cavas_path2d/CanvasPath2D";
import Chess from "../pages/chess/_main/Chess";
import DndPg from "../pages/dnd/_main/DndPg";
import DrawShowPic from "../pages/draw_show_pic/_main/DrawShowPic";
import Excel from "../pages/excel/_main/Excel";
import HomeChild from "../pages/home/child/HomeChild";
import HomeHasInput from "../pages/home/has_input/HomeHasInput";

import Home from "../pages/home/_main/Home";
import Mobx from "../pages/mobx/_main/Mobx";
import MUI from "../pages/mui/_main/MUI";
import MyReactQuery from "../pages/react_query/_main/MyReactQuery";
import MyReduxPersist from "../pages/redux_persist/_main/MyReduxPersist";
import MyReduxQuery from "../pages/redux_query/_main/MyReduxQuery";
import SvgAnimation from "../pages/svg_animation/SvgAnimation";

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
            </Route>

            <Route path="/mui" element={<MUI />} />
            <Route path="/antd" element={<Antd />} />
            <Route path="/mobx" element={<Mobx />} />
            <Route path="/dnd" element={<DndPg />} />
            <Route path="/animate-del" element={<AnimateDeletePg />} />

            <Route path="/canvas_path" element={<CanvasPath2D />} />
            <Route path="/svg_animation" element={<SvgAnimation />} />
            <Route path="/draw-show-pic" element={<DrawShowPic />} />
            <Route path="/excel" element={<Excel />} />
            <Route path="/chess" element={<Chess />} />

            <Route path="/persist" element={<MyReduxPersist />} />
            <Route path="/redux-query" element={<MyReduxQuery />} />
            <Route path="/react-query" element={<MyReactQuery />} />

            <Route path="*" element={<Navigate to="/home/1" replace />} />
        </Routes>
    );
}

export default CustomRoutes;
