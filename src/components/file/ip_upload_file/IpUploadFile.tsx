import * as React from 'react';

//
export interface IpUploadFileProps {}

//
function IpUploadFile({}: IpUploadFileProps) {
    //
    const ref_iframe = React.useRef<HTMLIFrameElement>(null);
    const ref_preview = React.useRef<HTMLAnchorElement>(null);

    //
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = () => {
                ref_iframe.current.style.display = 'block';
                const src = reader.result as string;
                ref_iframe.current.src = src;
                ref_preview.current.href = src;
            };

            reader.readAsDataURL(file);
        }
    }

    //
    function handleGotoPreview(e: React.MouseEvent<HTMLAnchorElement>) {
        e.preventDefault();
        ref_preview.current.scrollIntoView();
    }

    //
    return (
        <div>
            <div>
                <a href="#IpUploadFile_preview" onClick={handleGotoPreview}>
                    Goto Preview
                </a>
            </div>

            <div>
                <input
                    type="file"
                    accept="application/pdf"
                    multiple={false}
                    onChange={handleChange}
                />
            </div>

            <iframe
                ref={ref_iframe}
                src=""
                // width={500}
                height={500}
                style={{ display: 'none', width: '100%' }}
            />

            <div>
                <a
                    ref={ref_preview}
                    id="IpUploadFile_preview"
                    href=""
                    target="_blank"
                    // style={{ display: 'none' }}
                >
                    Preview
                </a>
            </div>
        </div>
    );
}

export default IpUploadFile;
