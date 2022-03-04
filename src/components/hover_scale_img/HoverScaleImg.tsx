import * as React from 'react';
//
import img from '../../../images/hamburger.jpg';

//
export interface HoverScaleImgProps {
    scale?: number;
}

//
function HoverScaleImg({ scale = 3 }: HoverScaleImgProps) {
    //
    const [hover_obj, setHoverObj] = React.useState({
        is_hover: false,
        x: 0,
        y: 0,
    });

    //
    const ref_main = React.useRef<HTMLDivElement>(null);

    // -----

    function handleHover({ x, y }: { x: number; y: number }) {
        setHoverObj((hover_obj) => {
            return {
                ...hover_obj,
                is_hover: true,
                x: -x * (scale - 1),
                y: -y * (scale - 1),
            };
        });
    }

    function handleOut() {
        setHoverObj((hover_obj) => {
            return {
                ...hover_obj,
                is_hover: false,
                x: 0,
                y: 0,
            };
        });
    }

    // -----

    //
    function handleMouseTouch(client_x: number, client_y: number) {
        if (!ref_main.current) {
            return;
        }

        const main_elm = ref_main.current.getBoundingClientRect();

        handleHover({
            x: client_x - main_elm.left,
            y: client_y - main_elm.top,
        });
    }

    //
    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        handleMouseTouch(e.clientX, e.clientY);
    }

    //
    function handleTouchMove(e: React.TouchEvent<HTMLDivElement>) {
        handleMouseTouch(e.touches[0].clientX, e.touches[0].clientY);
    }

    //
    return (
        <div className={`flex justify-center`}>
            <div
                ref={ref_main}
                className="w-[200px] h-[250px]"
                style={{ border: '1px solid', cursor: 'zoom-in' }}
                //
                onMouseMove={handleMouseMove}
                onMouseLeave={handleOut}
                //
                onTouchMove={handleTouchMove}
                onTouchEnd={handleOut}
            >
                <img
                    className={`w-full h-full ${
                        hover_obj.is_hover ? 'hidden' : ''
                    }`}
                    src={img}
                    alt=""
                />

                <div
                    className={`w-full h-full overflow-hidden pointer-events-none ${
                        hover_obj.is_hover ? '' : 'hidden'
                    }`}
                >
                    <div
                        style={{
                            width: `${100 * scale}%`,
                            height: `${100 * scale}%`,
                        }}
                    >
                        <img
                            className="w-full h-full"
                            style={{
                                transform: `translate(${hover_obj.x}px, ${hover_obj.y}px)`,
                            }}
                            src={img}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HoverScaleImg;
