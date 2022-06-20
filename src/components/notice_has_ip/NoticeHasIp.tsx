import * as React from "react";

import Portal from "../portal/Portal";

import './NoticeHasIp.scss';

//
export interface NoticeHasIpProps {
    handleConfirm: () => void;
    handleCancel: () => void;
}

//
function NoticeHasIp({ handleConfirm, handleCancel }: NoticeHasIpProps) {
    //
    return (
        <Portal>
            <div className="NoticeHasIp">
                <div className="NoticeHasIp_contain">
                    <div>Do you want to quit, your data will lost?</div>

                    <div>
                        <div>
                            <button type="button" onClick={handleConfirm}>
                                Yes
                            </button>
                        </div>
                        <div>
                            <button type="button" onClick={handleCancel}>
                                No
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Portal>
    );
}

export default NoticeHasIp;
