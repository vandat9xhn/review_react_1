import { CTX, RECT } from '../../_type/_main';
import { makeBars } from './_main';

//
export function makeBarsRed({ ctx, x, y, w, h }: { ctx: CTX } & RECT) {
    makeBars({
        ctx: ctx,
        drawSpecificBall: () => {
            ctx.fillStyle = 'red';
            ctx.fillRect(x, y, w, h);
        },
    });
}
