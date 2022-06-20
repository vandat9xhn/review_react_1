import * as React from "react";

import { ContextApp } from "./contextApp";

import { useNavigateHasIp } from "../../_hooks/useNavigateHasIp";

import NoticeHasIp from "../../components/notice_has_ip/NoticeHasIp";

//
export interface ContextAppComponentProps {
    children: React.ReactElement;
}

//
function ContextAppComponent({ children }: ContextAppComponentProps) {
    //
    const {
        refHasInput,
        refHrefHasInput,
        show_notice_has_ip,
        refHasInputFromAppLink,

        changeHistory,
        handleClickAppLink,

        handleCancel,
        handleConfirm,
        handleCancelAppLink,
        handleConfirmAppLink,
    } = useNavigateHasIp();

    //
    return (
        <ContextApp.Provider
            value={{
                refHasInput: refHasInput,
                refHrefHasInput: refHrefHasInput,
                refHasInputFromAppLink: refHasInputFromAppLink,
                //
                changeHistory,
                handleClickAppLink,
            }}
        >
            <>
                {children}

                {show_notice_has_ip && (
                    <NoticeHasIp
                        handleCancel={
                            refHasInputFromAppLink.current
                                ? handleCancelAppLink
                                : handleCancel
                        }
                        handleConfirm={
                            refHasInputFromAppLink.current
                                ? handleConfirmAppLink
                                : handleConfirm
                        }
                    />
                )}
            </>
        </ContextApp.Provider>
    );
}

export default ContextAppComponent;
