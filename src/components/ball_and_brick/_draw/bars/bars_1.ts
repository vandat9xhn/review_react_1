import { CTX, RECT } from '../../_type/_main';
import { makeBars } from './_main';
//
import bars_1 from '../../../../../images/bars_1.png';

//
const _bars_1 = new Image();
_bars_1.src = bars_1;
let is_loaded = false;

//
export function makeBars1({ ctx, x, y, w, h }: { ctx: CTX } & RECT) {
    if (!is_loaded) {
        _bars_1.onload = () => {
            is_loaded = true;
            makeBars({
                ctx: ctx,
                drawSpecificBall: () => {
                    ctx.drawImage(_bars_1, x, y, w, h);
                },
            });
        };
    } else {
        makeBars({
            ctx: ctx,
            drawSpecificBall: () => {
                ctx.drawImage(_bars_1, x, y, w, h);
            },
        });
    }
}
