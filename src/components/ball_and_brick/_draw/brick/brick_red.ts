import { CTX, RECT } from '../../_type/_main';
import { makeBrick } from './_main';

//
export function makeBrickRed({ ctx, x, y, w, h }: { ctx: CTX } & RECT) {
    makeBrick({
        ctx: ctx,
        drawSpecificBall: () => {
            ctx.fillStyle = 'red';
            ctx.fillRect(x, y, w, h);
        },
    });
}
