'use client'

import './tour.css';
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react"
import Tour0 from '@/assets/imgs/tour0.webp';
import Tour1 from '@/assets/imgs/tour1.webp';
import { StepLine } from '@/ui/atoms/StepLine';
import { useTourViewed } from '@/hooks/tour/useTourViewed';

export const Tour = () => {
    const [step, setStep] = useState(0);
    const { tourViewed, finishTour } = useTourViewed();

    const slideData = [{
        id: 0,
        title: "Agenda los mejores salones",
        content: "Tenemos los mejores estilistas, spa y salones de belleza en tu area.",
        img: Tour0
    }, {
        id: 1,
        title: "Agenda en cualquier momento",
        content: "Reserva una cita en cualquier momento, sin preocuparte por el horario de los estilistas.",
        img: Tour1
    }, {
        id: 2,
        title: "Agenda los mejores salones",
        content: "Tenemos los mejores estilistas, spa y salones de belleza en tu area.",
        img: Tour1
    }];

    const nextSlide = () => {
        setStep(step === slideData.length - 1 ? 0 : step + 1);

        if (step === slideData.length - 1) {
            finishTour();
        }
    }

    const prevSlide = () => {
        setStep(step === 0 ? slideData.length - 1 : step - 1);
    }

    return (
        <div className={`container-tour grid ${tourViewed ? 'hidden' : ''} fixed z-[50] w-full h-screen bg-slate-50`}>
            <div className="h-full">
                <ul className='h-full'>
                    {
                        slideData.map((slide, index) => (
                            <li key={slide.id} className={step === index ? 'active relative grid' : 'hidden'}>
                                <div className="w-full h-full">
                                    <Image className="object-cover h-full" priority={true} src={slide.img} alt={`Beauty img tour ${index}`} />
                                </div>

                                <div className='relative'>
                                    <div className='container-stepline-info absolute grid place-items-start px-6 top-[-100px]'>
                                        <h3>{slide.title}</h3>
                                        <p>{slide.content}</p>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>


            <div className="block px-6">
                <div className='flex align-center justify-between'>
                    <StepLine stepQuantity={slideData.length} currentStep={step} />
                    <Button onClick={() => nextSlide()}>Next</Button>
                </div>
            </div>
        </div>
    )
}
