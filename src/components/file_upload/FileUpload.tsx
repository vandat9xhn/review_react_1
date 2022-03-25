import * as React from 'react';

//
export interface FileUploadProps {}

//
function FileUpload({}: FileUploadProps) {
    //
    const [is_loading, setIsLoading] = React.useState(false);
    const [percent, setPercent] = React.useState(0);

    //
    const ref_cancel = React.useRef(false);

    // ------

    //
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const files = e.target.files;

        if (files.length) {
            const reader = new FileReader();

            reader.onloadstart = () => {
                setIsLoading(true);
                setPercent(0);
            };

            reader.onloadend = () => {
                setIsLoading(false);
                setPercent(0);
            };

            reader.onprogress = (e_process) => {
                if (ref_cancel.current) {
                    reader.abort();
                    e.target.value = '';
                    ref_cancel.current = false;

                    return;
                }
                setPercent(
                    Math.floor((e_process.loaded * 100) / e_process.total)
                );
            };

            reader.readAsDataURL(files[0]);
        }
    }

    //
    function cancelUpload() {
        ref_cancel.current = true;
    }

    //
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                padding: '20px',
            }}
        >
            <div>
                <div>
                    <input
                        type="file"
                        accept="video/*, image/*"
                        multiple={false}
                        onChange={handleChange}
                    />
                </div>

                {is_loading && (
                    <div>
                        <div style={{ width: '250px', marginTop: '20px' }}>
                            <div
                                style={{
                                    width: `${percent}%`,
                                    height: '15px',
                                    backgroundColor: 'blue',
                                }}
                            ></div>
                        </div>

                        <div onClick={cancelUpload}>Stop</div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default FileUpload;
