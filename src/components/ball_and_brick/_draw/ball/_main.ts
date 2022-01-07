import { CTX } from '../../_type/_main';

//
export function makeBall({
    ctx,
    x,
    y,
    r,
    drawSpecificBall,
}: {
    ctx: CTX;
    x: number;
    y: number;
    r: number,
    drawSpecificBall: () => void;
}) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    drawSpecificBall();
    ctx.closePath();
}
