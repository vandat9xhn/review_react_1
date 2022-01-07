import { CTX } from '../../_type/_main';

//
export function makeBrick({
    ctx,
    drawSpecificBall,
}: {
    ctx: CTX;
    drawSpecificBall: () => void;
}) {
    ctx.beginPath();
    drawSpecificBall();
    ctx.closePath();
}
