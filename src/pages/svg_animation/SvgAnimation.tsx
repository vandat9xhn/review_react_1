import * as React from "react";

import image_1 from "../../../images/hamburger.jpg";
import image_2 from "../../../images/hamburger.jpg";

//
const d =
    "M114 158.204C149.758 200.676 173.963 206.815 224.169 187.722M224.169 187.722C244.858 180.397 265.593 161.345 259.424 143.131C253.254 124.917 247.498 120.44 224.169 118.637C201.898 123.266 189.797 128.686 196.847 151.924C203.898 175.161 208.278 174.458 224.169 187.722ZM224.169 187.722C314.321 212.242 367.418 211.522 468.305 175.161M468.305 175.161C468.305 175.161 585.525 93.5148 545.864 63.3686C506.203 33.2223 477.119 63.3686 477.119 63.3686C477.119 63.3686 427.763 29.4541 392.508 63.3686C357.254 97.283 468.305 175.161 468.305 175.161ZM468.305 175.161C545.525 205.041 592.875 197.58 686 132.454";

const dur = 3;

const d_heart =
    "M21.2294 32.3346C23.7031 38.686 32.5724 45 32.5724 45C32.5724 45 41.4631 38.7044 43.8478 32.3346C44.4282 30.7842 44.9519 29.9073 44.9956 28.2348C45.0765 25.1414 44.0403 22.8461 41.6197 21.2066C40.1662 20.222 37.9264 19.8819 36.2183 20.0352C34.2087 20.2156 32.5724 22.4511 32.5724 22.4511C32.5724 22.4511 30.207 19.9514 27.7111 20.0352C26.1762 20.0867 24.3421 20.3027 23.0524 21.2066C20.7045 22.8519 19.8787 25.2071 20.0141 28.2348C20.0892 29.9145 20.6261 30.7853 21.2294 32.3346Z";
//
export interface SvgAnimationProps {}

//
function SvgAnimation({}: SvgAnimationProps) {
    //
    return (
        <div className="SvgAnimation">
            <div
                style={{
                    boxSizing: "border-box",
                    position: "relative",
                    margin: "auto",
                    width: 400,
                    // height: 250,
                    maxWidth: "100%",
                    // padding: "25px 0",
                    // border: "1px solid",
                    borderRadius: "10px",
                }}
            >
                <svg
                    width="100%"
                    // height="100%"
                    viewBox="0 0 800 250"
                    // xmlns="http://www.w3.org/2000/svg"
                    style={{ position: "absolute", left: 0, top: 0 }}
                >
                    <path d={d} stroke="pink" fill="none">
                        <animate
                            attributeName="stroke"
                            values="purple;red;"
                            dur={dur}
                            repeatCount="indefinite"
                        />

                        <animate
                            attributeName="stroke-width"
                            values="2;4;6"
                            dur={dur}
                            repeatCount="indefinite"
                        />
                    </path>

                    <path d={d_heart} style={{ transform: "translate(190px)" }}>
                        <animate
                            attributeName="fill"
                            values="green;pink;green;"
                            dur={dur}
                            repeatCount="indefinite"
                        />
                    </path>

                    <path d={d_heart} style={{ transform: "translate(440px, 200px)" }}>
                        <animate
                            attributeName="fill"
                            values="blue;yellow;blue;"
                            dur={dur}
                            repeatCount="indefinite"
                        />
                    </path>
                </svg>

                <img
                    src={image_1}
                    style={{
                        position: "absolute",
                        left: 0,
                        top: "25%",
                        objectFit: "cover",
                        borderRadius: "50%",
                        width: 70,
                        height: 70,
                    }}
                />

                <img
                    src={image_2}
                    style={{
                        position: "absolute",
                        right: 0,
                        top: "25%",
                        objectFit: "cover",
                        borderRadius: "50%",
                        width: 70,
                        height: 70,
                    }}
                />

                <svg
                    width="100%"
                    // height="100%"
                    viewBox="0 0 800 250"
                    // xmlns="http://www.w3.org/2000/svg"
                    style={{ position: "relative" }}
                >
                    <path d={d_heart}>
                        <animate
                            attributeName="fill"
                            values="pink;purple;red;"
                            dur={dur}
                            repeatCount="indefinite"
                        />

                        <animateTransform
                            attributeName="transform"
                            type="scale"
                            from="1"
                            to="2"
                            dur={dur}
                            repeatCount="indefinite"
                            additive="sum"
                        />

                        <animateTransform
                            attributeName="transform"
                            type="translate"
                            values="-25,-35;"
                            dur={dur}
                            repeatCount="indefinite"
                            additive="sum"
                        />

                        <animateMotion
                            path={d}
                            dur={dur}
                            repeatCount="indefinite"
                        />
                    </path>
                </svg>
            </div>
        </div>
    );
}

export default SvgAnimation;
