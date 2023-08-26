"use client"
import { useEffect, useState } from 'react';
import { removeOverflowInBody } from '@/utils/util';


export const SplashScreen = () => {

    const [isFinishSplash, setIsFinishSplash] = useState(false);

    useEffect(() => {
        const animate = () => {
            setTimeout(() => {
                setIsFinishSplash(true);
                removeOverflowInBody();
            }, 700);

        }
        animate();

    }, []);

    return (
        <>
            <div className={`w-full h-screen absolute z-[100] bg-[#000] ${isFinishSplash ? 'hidden' : ''}`} >
                <div className='w-full h-screen grid place-items-center'>
                    <p className='aphrodite-logo'>Aphrodite</p>
                </div>
            </div>
        </>
    )
}
