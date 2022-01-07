import * as React from 'react';
//
import { makeBallRed } from '../_draw/ball/ball_red';
import { makeBars1 } from '../_draw/bars/bars_1';
import { makeBarsRed } from '../_draw/bars/bars_red';
import { makeBrickRed } from '../_draw/brick/brick_red';

//
const initial_row_count = 6;

//
const initial_ball_obj = ({ y = 0 }) => ({
    x: 20,
    y: y,
    r: 10,

    dx: 2,
    dy: -4,
    dxy_decrease: 0.0005,
});

const initial_brick_obj = () => ({ w: 0, h: 0 });

const initial_brick_arr = () =>
    [] || [
        {
            x: 0,
            y: 0,
            is_break: false,
        },
    ];

const initial_bars_obj = ({
    height = 15,
    canvas_h = 0,
    canvas_w = 0,
    padding_x = 0,
}) => ({
    x: 0,
    y: canvas_h - height,
    w: (canvas_w - padding_x) / 4,
    h: height,

    dx: 6,
});

const initial_ball_dxy_plus = () => ({
    second: 0,
    max_second: 5000,
    time: 0,
    percent: 0.25,
});

//
export interface BrickAndBallProps {}

//
function BrickAndBall({}: BrickAndBallProps) {
    //
    const [_, setForceUpdate] = React.useState(false);

    //
    const canvas_obj = React.useRef({ w: 600, h: 500 });

    const padding_x = React.useRef(100);
    const padding_y = React.useRef(50);
    const row_count = React.useRef(initial_row_count);
    const ratio_space_w_h = React.useRef(0.5);
    const brick_per_row_count = React.useRef(10);
    const ball_dxy_plus = React.useRef(initial_ball_dxy_plus());

    const ball_obj = React.useRef(
        initial_ball_obj({ y: canvas_obj.current.h - 100 })
    );
    const brick_obj = React.useRef(initial_brick_obj());
    const brick_arr = React.useRef(initial_brick_arr());
    const bars_obj = React.useRef(
        initial_bars_obj({
            canvas_h: canvas_obj.current.h,
            canvas_w: canvas_obj.current.w,
            padding_x: padding_x.current,
        })
    );

    //
    const is_over = React.useRef(false);
    const has_start = React.useRef(false);
    const is_pause = React.useRef(true);

    const is_hover = React.useRef(false);
    const mouse_x = React.useRef(0);

    //
    const ref_canvas = React.useRef<HTMLCanvasElement>(null);

    //
    React.useEffect(() => {
        reStartGame();
    }, []);

    // -----

    //
    function forceUpdate() {
        setForceUpdate((force_update) => !force_update);
    }

    //
    function getLastXOfBall() {
        return ball_obj.current.x + ball_obj.current.r;
    }

    // ------

    //
    function makeInitialBrickArr() {
        const canvas = ref_canvas.current;
        const ctx = canvas.getContext('2d');

        const ratio_space_x = 0.9;
        const ratio_space_y = 0.9;
        const ratio_space_per_x = (1 - ratio_space_x) / 2;
        const ratio_space_per_y = (1 - ratio_space_y) / 2;

        const brick_space_with =
            (canvas_obj.current.w - padding_x.current * 2) /
            brick_per_row_count.current;
        const brick_space_height = brick_space_with * ratio_space_w_h.current;
        const brick_width = brick_space_with * ratio_space_x;
        const brick_height = brick_space_height * ratio_space_y;

        const initial_brick_arr = [] || [{ x: 0, y: 0, is_break: false }];
        brick_obj.current = {
            ...brick_obj.current,
            w: brick_width,
            h: brick_height,
        };

        for (let row_i = 0; row_i < row_count.current; row_i++) {
            for (
                let brick_i = 0;
                brick_i < brick_per_row_count.current;
                brick_i++
            ) {
                const _brick_obj = {
                    x:
                        brick_space_with * (ratio_space_per_x + brick_i) +
                        padding_x.current,
                    y:
                        brick_space_height * (ratio_space_per_y + row_i) +
                        padding_y.current,
                    is_break: false,
                };
                initial_brick_arr.push(_brick_obj);

                makeBrickRed({
                    ctx: ctx,
                    x: _brick_obj.x,
                    y: _brick_obj.y,
                    ...brick_obj.current,
                });
            }
        }

        brick_arr.current = initial_brick_arr;
    }

    //
    function changeBricks() {
        const canvas = ref_canvas.current;
        const ctx = canvas.getContext('2d');

        brick_arr.current.forEach((item) => {
            !item.is_break &&
                makeBrickRed({
                    ctx: ctx,
                    x: item.x,
                    y: item.y,
                    ...brick_obj.current,
                });
        });
    }

    //
    function increaseDxy() {
        ball_dxy_plus.current.second += 1;
        const new_time_change =
            ball_dxy_plus.current.second / ball_dxy_plus.current.max_second -
            ball_dxy_plus.current.time;

        if (new_time_change < 1) {
            return;
        }

        ball_dxy_plus.current.time = Math.floor(
            ball_dxy_plus.current.second / ball_dxy_plus.current.max_second
        );
        ball_obj.current.dx *=
            1 + ball_dxy_plus.current.time * ball_dxy_plus.current.percent;
        ball_obj.current.dy *=
            1 + ball_dxy_plus.current.time * ball_dxy_plus.current.percent;
    }

    //
    function draw() {
        const canvas = ref_canvas.current;
        const ctx = canvas.getContext('2d');

        ctx.clearRect(0, 0, canvas_obj.current.w, canvas_obj.current.h);

        makeBallRed({
            ctx: ctx,
            x: ball_obj.current.x,
            y: ball_obj.current.y,
            r: ball_obj.current.r,
        });
        // makeBarsRed({
        //     ctx: ctx,
        //     x: bars_obj.current.x,
        //     y: bars_obj.current.y,
        //     w: bars_obj.current.w,
        //     h: bars_obj.current.h,
        // });
        makeBars1({
            ctx: ctx,
            x: bars_obj.current.x,
            y: bars_obj.current.y,
            w: bars_obj.current.w,
            h: bars_obj.current.h,
        });
        brick_arr.current.length && changeBricks();

        increaseDxy();
    }

    //
    function makeInitialCanvas() {
        ball_obj.current = initial_ball_obj({ y: canvas_obj.current.h - 100 });
        brick_obj.current = initial_brick_obj();
        brick_arr.current = initial_brick_arr();
        bars_obj.current = initial_bars_obj({
            canvas_h: canvas_obj.current.h,
            canvas_w: canvas_obj.current.w,
            padding_x: padding_x.current,
        });

        is_over.current = false;
        is_pause.current = true;

        draw();
        makeInitialBrickArr();
    }

    // ------- BALL

    //
    function changeBallDxDy() {
        if (
            ball_obj.current.x <= ball_obj.current.r ||
            getLastXOfBall() >= canvas_obj.current.w
        ) {
            ball_obj.current.dx = -ball_obj.current.dx;
        }

        if (ball_obj.current.y <= ball_obj.current.r) {
            ball_obj.current.dy = -ball_obj.current.dy;
        }
    }

    //
    function ballMove() {
        ball_obj.current.x += ball_obj.current.dx;
        ball_obj.current.y += ball_obj.current.dy;

        if (ball_obj.current.x <= ball_obj.current.r) {
            ball_obj.current.x = ball_obj.current.r;
        }
        //
        else if (getLastXOfBall() >= canvas_obj.current.w) {
            ball_obj.current.x = canvas_obj.current.w - ball_obj.current.r;
        }

        if (ball_obj.current.y <= ball_obj.current.r) {
            ball_obj.current.y = ball_obj.current.r;
        }
        //
        else if (
            ball_obj.current.y >=
            canvas_obj.current.h - ball_obj.current.r
        ) {
            ball_obj.current.y = canvas_obj.current.h - ball_obj.current.r;
        }
    }

    // ---- PLAY

    //
    function reStartGame() {
        makeInitialCanvas();
        forceUpdate();
    }

    //
    function togglePauseGame() {
        !has_start.current && (has_start.current = true);
        is_pause.current = !is_pause.current;

        if (!is_pause.current) {
            window.requestAnimationFrame(updateGame);
        }

        forceUpdate();
    }

    //
    function detectIsOver() {
        is_over.current =
            ball_obj.current.y >= canvas_obj.current.h - ball_obj.current.r;
    }

    // ------ BRICKS BARS

    //
    function detectTouchBrickY({ brick_y = 0 }) {
        return (
            ball_obj.current.y + ball_obj.current.r >= brick_y &&
            ball_obj.current.y <= brick_y + brick_obj.current.h
        );
    }

    //
    function detectTouchBrickX({ brick_x = 0 }) {
        return (
            getLastXOfBall() >= brick_x &&
            ball_obj.current.x <= brick_x + brick_obj.current.w
        );
    }

    //
    function touchBrick() {
        brick_arr.current.forEach((item) => {
            if (
                !item.is_break &&
                detectTouchBrickY({ brick_y: item.y }) &&
                detectTouchBrickX({ brick_x: item.x })
            ) {
                item.is_break = true;
                ball_obj.current.dx += 0.05;
                ball_obj.current.dy += 0.05;
            }
        });
    }

    //
    function touchBars() {
        if (
            ball_obj.current.y + ball_obj.current.r >= bars_obj.current.y &&
            ball_obj.current.x + ball_obj.current.r >= bars_obj.current.x + 1 &&
            ball_obj.current.x - 1 <= bars_obj.current.x + bars_obj.current.w
        ) {
            const max_bars_to_ball_center_x =
                bars_obj.current.w / 2 + ball_obj.current.r;
            const bars_x_center = bars_obj.current.x + bars_obj.current.w / 2;
            const ball_x_center = ball_obj.current.x + ball_obj.current.r;
            const bars_to_ball_center_x = bars_x_center - ball_x_center;

            const ratio_center =
                bars_to_ball_center_x / max_bars_to_ball_center_x;

            const total_dxy =
                Math.abs(ball_obj.current.dy) + Math.abs(ball_obj.current.dx);
            let new_dy_abs = total_dxy * (1 - Math.abs(ratio_center));

            if (new_dy_abs >= total_dxy - 1) {
                new_dy_abs = total_dxy - 1;
            } else if (new_dy_abs <= 2) {
                new_dy_abs = 2;
            }

            ball_obj.current.dy = -new_dy_abs;
            ball_obj.current.dx =
                (total_dxy - new_dy_abs) * (ratio_center > 0 ? -1 : 1);
        }
    }

    // ---- MOVE BARS

    //
    function detectBarsOverCanvas() {
        const max_bars_x = canvas_obj.current.w - bars_obj.current.w;
        if (bars_obj.current.x >= max_bars_x) {
            bars_obj.current.x = max_bars_x;
        }

        if (bars_obj.current.x <= 0) {
            bars_obj.current.x = 0;
        }
    }

    //
    function handleMouseEnter(e: React.MouseEvent) {
        if (is_pause.current) {
            return;
        }

        is_hover.current = true;
        mouse_x.current = e.clientX;
    }

    //
    function handleMouseMove(e: React.MouseEvent) {
        if (is_pause.current) {
            return;
        }

        const new_mouse_x = e.clientX;
        bars_obj.current.x += new_mouse_x - mouse_x.current;
        mouse_x.current = new_mouse_x;

        detectBarsOverCanvas();
    }

    //
    function handleMouseLeave(e: React.MouseEvent) {
        if (is_pause.current) {
            return;
        }

        is_hover.current = false;
        mouse_x.current = 0;
    }

    //
    function handleDoubleClick(e: React.MouseEvent) {
        bars_obj.current.x =
            e.clientX -
            ref_canvas.current.getBoundingClientRect().left -
            bars_obj.current.w / 2;

        detectBarsOverCanvas();
    }

    // ----- UPDATE

    //
    function _update() {
        if (is_pause.current) {
            return;
        }

        detectIsOver();

        if (is_over.current) {
            return;
        }

        changeBallDxDy();
        ballMove();

        touchBrick();
        touchBars();

        draw();
        window.requestAnimationFrame(updateGame);
    }

    //
    function updateGame() {
        _update();
        forceUpdate();
    }

    //
    return (
        <div className="flex justify-center py-4">
            <div>
                <canvas
                    ref={ref_canvas}
                    className="border border-solid border-teal-500 rounded-[10px]"
                    width={canvas_obj.current.w}
                    height={canvas_obj.current.h}
                    //
                    onMouseEnter={handleMouseEnter}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    //
                    onDoubleClick={handleDoubleClick}
                />

                <div className="flex justify-between mt-4">
                    <div
                        className="text-[16px] font-semibold cursor-pointer"
                        onClick={reStartGame}
                    >
                        {!has_start.current || !is_over.current
                            ? ''
                            : 'Restart start'}
                    </div>

                    {is_over.current ? null : (
                        <div
                            className="text-[16px] font-semibold cursor-pointer"
                            onClick={togglePauseGame}
                        >
                            {is_pause.current ? 'Play' : 'Pause'}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default BrickAndBall;
