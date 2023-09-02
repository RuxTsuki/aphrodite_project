"use client"
import { useEffect, useState } from 'react';
import { getValueFromStorage, removeOverflowInBody } from '@/utils/util';
import { viewTourLocalS } from '@/utils/constant';


export const SplashScreen = () => {

    const [isFinishSplash, setIsFinishSplash] = useState(false);

    useEffect(() => {
        const animate = () => {
            setTimeout(() => {
                setIsFinishSplash(true);
                const { value: tourViewed } = getValueFromStorage(viewTourLocalS);

                if (tourViewed === 'true')
                    removeOverflowInBody();
            }, 800);

        }
        animate();

    }, []);

    return (
        <>
            <div className={`w-full h-screen fixed top-0 left-0 bottom-0 right-0 z-[100] bg-[#000] ${isFinishSplash ? 'hidden' : ''}`} >
                <div className='w-full h-screen grid place-items-center'>
                    <p className='aphrodite-logo splash'>Aphrodite</p>
                </div>
            </div>
        </>
    )
}
