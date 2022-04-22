import * as React from 'react';
import gsap from 'gsap';

//
export interface MyGSAPProps {}

//
function MyGSAP({}: MyGSAPProps) {
    //
    const ref_main = React.useRef<HTMLDivElement>(null);
    const ref_box = React.useRef<HTMLDivElement>(null);

    const tl = React.useRef<gsap.core.Timeline | null>(null);
    const q = gsap.utils.selector(ref_main);

    const is_reversed = React.useRef(false);

    //
    React.useEffect(() => {
        tl.current = gsap.timeline().to(q('.MyGSAP_box'), {
            x: 100,
            // rotate: 180,
            // repeat: -1,
            // repeatDelay: 1,
            // yoyo: true,
        });

        tl.current.reverse();
    }, []);

    //----

    function startGSAP() {
        if (tl.current) {
            is_reversed.current = !is_reversed.current;
            console.log(is_reversed.current);
            
            tl.current.reverse(is_reversed.current ? 0 : 1);
        }
    }

    //
    return (
        <div ref={ref_main}>
            <div className="flex justify-center">
                <div
                    ref={ref_box}
                    className="MyGSAP_box flex justify-center items-center w-[100px] h-[100px] rounded-[8px] bg-green-500"
                >
                    Hello
                </div>
            </div>

            <div className="flex justify-center">
                <button
                    type="button"
                    className="pd-[5px] rounded-[6px] cursor-pointer"
                    onClick={startGSAP}
                >
                    Start GSAP
                </button>
            </div>
        </div>
    );
}

export default MyGSAP;
