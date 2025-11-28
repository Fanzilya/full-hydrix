import { useEffect, useRef } from 'react';
import Hls from 'hls.js';

export const StreamPlayer = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        // const streamUrl = "rtsp://admin:Shapshi@16@85.141.81.53:8443/cam/realmonitor";
        // const streamUrl = "https://85.141.81.53:8443/";
        const streamUrl = "http://localhost:3000/stream/index.m3u8";

        if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(streamUrl);
            video && hls.attachMedia(video);
        } else {
            // Safari: поддерживает HLS нативно
            video.src = streamUrl;
        }
    }, []);

    return (
        <video
            ref={videoRef}
            autoPlay
            muted
            className='w-[90%] mx-auto rounded-lg'
        />
    );
}
