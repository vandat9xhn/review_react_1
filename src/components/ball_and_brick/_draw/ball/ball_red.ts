import { CTX } from '../../_type/_main';
import { makeBall } from './_main';

//
export function makeBallRed({
    ctx,
    x,
    y,
    r,
}: {
    ctx: CTX;
    x: number;
    y: number;
    r: number;
}) {
    makeBall({
        ctx: ctx,
        x,
        y,
        r,
        drawSpecificBall: () => {
            ctx.fillStyle = 'red';
            ctx.fill();
        },
    });
}
