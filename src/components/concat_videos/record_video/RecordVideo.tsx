import * as React from "react";

//
export interface RecordVideoProps {}

//
function RecordVideo({}: RecordVideoProps) {
    //
    const [url, setUrl] = React.useState("");

    //
    const refVideoStream = React.useRef<HTMLVideoElement>(null);
    const refStream = React.useRef<MediaStream>(null);
    const refRecordedChunks = React.useRef<Blob[]>([]);

    const refRecorderLength = React.useRef(0);
    const refIndex = React.useRef(0);
    const refBlobToServer = React.useRef<Blob[]>([]);

    // ----

    //
    const startStream = () => {
        window.navigator.mediaDevices
            .getUserMedia({
                video: true,
                audio: false,
            })
            .then((stream) => {
                if (refVideoStream.current) {
                    refVideoStream.current.srcObject = stream;
                }
                handleRecord(stream);
                refStream.current = stream;
            });
    };

    //
    const handleRecord = (stream: MediaStream) => {
        const recorder = new MediaRecorder(stream, { mimeType: "video/webm" });

        // const interval = setInterval(() => {
        //     sendToServer();
        // }, 1000);

        recorder.addEventListener("dataavailable", (e) => {
            if (e.data.size) {
                refRecordedChunks.current.push(e.data);
            }
        });

        recorder.addEventListener("stop", (e) => {
            const new_url = URL.createObjectURL(
                new Blob(refRecordedChunks.current)
            );
            setUrl(new_url);
            // clearInterval(interval);

			console.log(refRecordedChunks.current);
			
        });
        recorder.onerror = (e) => {
            console.log(e);
        };

        recorder.start();
    };

    //
    const stopStream = () => {
        refStream.current.getTracks().forEach(function (track) {
            track.stop();
        });
    };

    //
    const sendToServer = () => {
        // const toServer = refRecordedChunks.current.slice(refIndex.current);
        // refBlobToServer.current.push(...toServer);
        console.log(refRecordedChunks.current);

        // refIndex.current = refRecorderLength.current;
    };

    //
    return (
        <div>
            <div>
                <button type="button" onClick={startStream}>
                    Start stream
                </button>
            </div>

            <div>
                <button type="button" onClick={stopStream}>
                    Stop stream
                </button>
            </div>

            <div>
                <video
                    ref={refVideoStream}
                    src=""
                    width={450}
                    height={350}
                    autoPlay
                ></video>
            </div>

            <div>
                {url && (
                    <video
                        src={url}
                        width={450}
                        height={350}
                        autoPlay
                        controls
                    ></video>
                )}
            </div>
        </div>
    );
}

export default RecordVideo;
