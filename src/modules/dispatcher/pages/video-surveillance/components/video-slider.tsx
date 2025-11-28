import { useState } from "react";
import { Button } from "@/shared/ui/button";
import { Icon } from "@/shared/ui/icon";
import { CameraItem } from "./video-item";

const cameraSources = [
    "http://localhost:3000/stream_1/index.m3u8",
    "http://localhost:3000/stream_2/index.m3u8",
    "http://localhost:3000/stream_3/index.m3u8",
    "http://localhost:3000/stream_4/index.m3u8",
    "http://localhost:3000/stream_5/index.m3u8",
    "http://localhost:3000/stream_6/index.m3u8",
    "http://localhost:3000/stream_7/index.m3u8",
];

export const VideoSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsToShow = 4;

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev >= cameraSources.length - itemsToShow ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? cameraSources.length - itemsToShow : prev - 1
        );
    };

    return (
        <div className="w-full mx-auto">
            <div className="flex gap-4 items-center justify-between mb-6">

                <Button
                    onClick={prevSlide}
                    class="h-12 w-12 flex items-center justify-center shrink-0"
                >
                    <Icon systemName="arrow-left-blue" />
                </Button>

                <div className="flex-1 overflow-hidden">
                    <div
                        className="flex gap-[16px] transition-transform duration-500 ease-out"
                        style={{
                            transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
                        }}
                    >
                        {cameraSources.map((src, index) => (
                            <CameraItem key={index} src={src} />
                        ))}
                    </div>
                </div>

                <Button
                    onClick={nextSlide}
                    class="h-12 w-12 flex items-center justify-center shrink-0 rotate-180"
                >
                    <Icon systemName="arrow-left-blue" />
                </Button>

            </div>
        </div>
    );
};
