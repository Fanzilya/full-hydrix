import { makeAutoObservable } from "mobx";

class VideoSurveillanceModel {

    cameraSources: string[] = [
        "http://localhost:3000/stream_1/index.m3u8",
        "http://localhost:3000/stream_2/index.m3u8",
        "http://localhost:3000/stream_3/index.m3u8",
        "http://localhost:3000/stream_4/index.m3u8",
        "http://localhost:3000/stream_5/index.m3u8",
        "http://localhost:3000/stream_6/index.m3u8",
        "http://localhost:3000/stream_7/index.m3u8",
    ];

    bigViewSrc = this.cameraSources[0];

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }

    setBigViewSrc(value: string) {
        this.bigViewSrc = value
    }
}

export const videoSurveillanceModel = new VideoSurveillanceModel() 