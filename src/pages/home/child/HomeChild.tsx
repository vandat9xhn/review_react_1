import * as React from "react";

//
export interface HomeChildProps {
    children?: React.ReactNode | null;
    num: number;
}

//
function HomeChild({ children = null, num }: HomeChildProps) {
    //
    React.useEffect(() => {
        // console.log(num);
    }, []);

    //
    return (
        <div>
            <div>
                <h2 style={{ fontWeight: "bold", fontSize: 24 }}>
                    HOME CHILD {num}
                </h2>

                <div>{children}</div>
            </div>
        </div>
    );
}

export default HomeChild;
