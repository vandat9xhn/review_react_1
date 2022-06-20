import * as React from "react";

//
export const ContextApp = React.createContext<{
    refHasInput: React.MutableRefObject<boolean>;
    refHrefHasInput: React.MutableRefObject<string>;
    refHasInputFromAppLink: React.MutableRefObject<boolean>;
    //
    changeHistory: () => void;
    handleClickAppLink: ({
        to,
        replace,
    }: {
        to: string;
        replace: boolean;
    }) => void;
}>(null);
