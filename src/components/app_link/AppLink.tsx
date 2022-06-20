import * as React from "react";
import { Link, LinkProps } from "react-router-dom";

import { ContextApp } from "../../context/app/contextApp";
import SameLink from "./SameLink";

//
export type AppLinkProps = LinkProps & React.RefAttributes<HTMLAnchorElement>;

//
function AppLink({ children, ...rest_props }: AppLinkProps) {
    //
    const { refHasInput, handleClickAppLink } = React.useContext(ContextApp);

    // ----

    //
    const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
        if (refHasInput.current) {
            e.preventDefault();
            handleClickAppLink({
                to: rest_props.to as string,
                replace: rest_props.replace,
            });
        }
    };

    //
    return (
        <SameLink {...rest_props} onClick={handleClick}>
            {children}
        </SameLink>
    );
}

export default AppLink;
