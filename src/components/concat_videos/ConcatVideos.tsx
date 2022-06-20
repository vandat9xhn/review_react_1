import * as React from "react";
import { loadFiles } from "react-commons-ts";
import RecordVideo from "./record_video/RecordVideo";

//
export interface ConcatVideosProps {}

//
function ConcatVideos({}: ConcatVideosProps) {
    //
    const [video_url, setVideoUrl] = React.useState("");

    // ----

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = async (
        e
    ) => {
        const files = e.target.files;

        if (files.length === 0) {
            return;
        }

        const data = await loadFiles({ files });

        if (data.length < 2) {
            return;
        }

        const str_1 = data[0].url as string;
        const str_2 = data[1].url as string;
        const str = window.atob(str_1.slice(22)) + window.atob(str_2.slice(22));
        console.log(str_1.slice(0, 22) + window.btoa(str));

        setVideoUrl(str_1.slice(0, 22) + str);
    };

    //
    return (
        <div>
            <input
                type="file"
                accept="video/*"
                multiple
                onChange={handleChange}
            />

            {video_url && (
                <video
                    src={video_url}
                    width={400}
                    height={350}
                    controls
                ></video>
            )}

            <div>
                <RecordVideo />
            </div>
        </div>
    );
}

export default ConcatVideos;
