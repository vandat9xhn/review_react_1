import * as React from 'react';
//
import img_1 from '../../../images/bars_1.png';
import img_2 from '../../../images/hamburger.jpg';
import img_3 from '../../../images/learn.jpg';
import img_4 from '../../../images/beautiful_place.jpg';
//
import './SliderCanvas.scss';

//
export interface SliderCanvasProps {}

const images: string[] = [img_1, img_2, img_3, img_4];
const img_count = images.length;

//
function SliderCanvas({}: SliderCanvasProps) {
    const [c_ix, setCIx] = React.useState(0);

    //
    const ref_canvas = React.useRef<HTMLCanvasElement>(null);
    const ref_c_width = React.useRef(0);
    const ref_c_height = React.useRef(0);
    //
    const next_or_prev = React.useRef<'' | 'next' | 'prev'>('');

    //
    React.useEffect(() => {
        const { width, height } = ref_canvas.current.getBoundingClientRect();
        ref_canvas.current.width = width;
        ref_canvas.current.height = height;
    });

    // -----

    //
    function draw({ new_c_ix = 0, is_next = false }) {
        if (!ref_canvas.current) {
            return;
        }

        const ctx = ref_canvas.current.getContext('2d');
        const img = new Image();
        img.src = images[new_c_ix];

        const width = ref_canvas.current.width;
        const height = ref_canvas.current.height;
        const base_width = width / 40;
        const base_height = height / 40;
        const tan = base_height / base_width;
        const max_width = width + height / tan;

        ref_c_width.current = base_width;
        ref_c_height.current = base_height;
        let _width = ref_c_width.current;
        let _height = ref_c_height.current;

        const _draw = () => {
            ctx.save();
            ctx.clearRect(0, 0, width, height);
            ctx.beginPath();

            if (is_next) {
                ctx.moveTo(0, 0);
                ctx.lineTo(_width, 0);
                ctx.lineTo(0, _height);
            } else {
                ctx.moveTo(width, height);
                ctx.lineTo(width - _width, height);
                ctx.lineTo(width, height - _height);
            }

            ctx.closePath();

            ctx.lineWidth = 0;
            ctx.fillStyle = 'white';
            ctx.strokeStyle = 'transparent';
            ctx.fill();
            ctx.stroke();
            ctx.clip();
            ctx.drawImage(img, 0, 0, width, height);
            ctx.restore();

            if (_width >= max_width) {
                ref_c_width.current = 0;
                ref_c_height.current = 0;
                setCIx(new_c_ix);
                next_or_prev.current = '';
            } else {
                requestAnimationFrame(_draw);
                _width += base_width;
                _height += base_height;
            }
        };

        img.onload = () => {
            _draw();
        };
    }

    //
    function getIx({ is_next = true }) {
        let new_c_ix = 0;
        let new_next_ix = 0;

        if (is_next) {
            new_c_ix = c_ix < img_count - 1 ? c_ix + 1 : 0;
        } else {
            new_c_ix = c_ix == 0 ? img_count - 1 : c_ix - 1;
        }

        if (new_c_ix < img_count - 1) {
            new_next_ix = new_c_ix + 1;
        } else {
            new_next_ix = 0;
        }

        return {
            new_c_ix,
            new_next_ix,
        };
    }

    //
    function handleNextPrev(is_next = true) {
        if (!ref_canvas.current || next_or_prev.current) {
            return;
        }

        const { new_c_ix, new_next_ix } = getIx({ is_next: is_next });

        next_or_prev.current = is_next ? 'next' : 'prev';
        draw({ new_c_ix: new_c_ix, is_next: is_next });
    }

    //
    function handleNext() {
        handleNextPrev(true);
    }

    //
    function handlePrev() {
        handleNextPrev(false);
    }

    //
    return (
        <div className="SliderCanvas">
            <div className="SliderCanvas_img">
                <img src={images[c_ix]} alt="" />
            </div>

            <canvas ref={ref_canvas} className="SliderCanvas_canvas" />

            <div className="SliderCanvas_btns">
                <button type="button" onClick={handlePrev}>
                    Prev
                </button>
                <button type="button" onClick={handleNext}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default SliderCanvas;
