'use client'

import Image from "next/image"
import ImageTest from '@/assets/imgs/imageTest.png';
import { Button } from "@nextui-org/react";


export const OurSelections = () => {
    return (
        <div className="grid gap-3 px-[--padding-outside] py-[1.5rem]">
            <h2 className="title">Descubre nuestras selecciones</h2>

            <div className="flex items-center card-selection h-[160px] pt-[1rem]">
                <div className="flex flex-col gap-2 flex-2 self-start pt-[10px]">
                    <h3 className="paragraph">Nombre Local</h3>

                    <p className="normal-text">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim quidem, quo fuga prov
                    </p>
                </div>

                <div className="flex flex-col justify-between gap-2 flex-1">
                    <Image src={ImageTest} alt="selection image" />

                    <Button variant="light">
                        Ver Mas
                    </Button>
                </div>

            </div>
            <hr className="shrink-0 bg-divider border-none w-full h-divider" role="separator" />

            <div className="flex items-center card-selection h-[160px]">
                <div className="flex flex-col gap-2 flex-2 self-start pt-[10px]">
                    <h3 className="paragraph">Nombre Local</h3>

                    <p className="normal-text">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim quidem, quo fuga prov
                    </p>
                </div>

                <div className="flex flex-col justify-between gap-2 flex-1">
                    <Image src={ImageTest} alt="selection image" />

                    <Button variant="light">
                        Ver Mas
                    </Button>
                </div>

            </div>
            <hr className="shrink-0 bg-divider border-none w-full h-divider" role="separator" />

        </div>
    )
}
