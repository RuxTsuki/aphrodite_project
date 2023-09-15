'use client'

import Image from "next/image"
import ImageTest from '@/assets/imgs/imageTest.jpg';

export const HeroSection = () => {
    return (
        <div className="w-full h-[186px]">
            <Image src={ImageTest} alt="hero image" className="w-full h-full" />
        </div>
    )
}
