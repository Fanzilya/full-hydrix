import { VideoSlider } from "./components/video-slider"
import { StreamPlayer } from "./components/stream-player"
import { useState } from "react"

export const VideoSurveillance = () => {

    const [video, setVideo] = useState<string>('')

    return (
        <>
            <div className="informations-dispatch__timModel timModel-dispatch dispatch-background">
                <div className="timModel-dispatch__container">
                    <div className="text-[34px] font-semibold mb-[20px]">Видеонаблюдение</div>
                    <VideoSlider />

                    <StreamPlayer src="" />
                </div>
            </div>
        </>
    )
}