'use client'

import Image from "next/image"
import ImageSalon01 from '@/assets/imgs/beautysalon/beautySalon0.jpg';
import { Chip, Tab, Tabs } from "@nextui-org/react";
import { Address, Watch, Chat, LeftArrow } from "@/ui/atoms/Icons";
import { useState } from "react";
import { useRouter } from "next/navigation"

export const HairSalonSection = () => {
    const router = useRouter();

    const [tabSelected, setTabSelected] = useState<'info' | 'services' | 'schedules' | 'reviews'>('info');

    return (
        <>
            <div className="h-screen overflow-hidden">
                <div className="h-[250px] relative">
                    <div className="h-[270px] absolute top-0 bottom-0 left-0 right-0">
                        <Image src={ImageSalon01.src} fill className="object-cover h-full" alt="hair salon" />

                        <div onClick={() => router.back()} className="shadow-custom-1 absolute top-[15px] left-[16px] p-[4px] rounded-xl bg-white w-fit">
                            <LeftArrow className="general-icon-color-small" />
                        </div>

                        <div className="shadow-custom-1 absolute bottom-[70px] right-[18px] p-[4px] rounded-xl bg-white w-fit">
                            <Chat className="general-icon-color-small" />
                        </div>

                        <div className="shadow-custom-1 absolute bottom-[33px] right-[18px]">
                            <Chip color="success" size="sm" variant="shadow">Agendar</Chip>
                        </div>
                    </div>
                </div>

                <div className="square-custom-2 relative">
                    <div className="pt-[5px]">
                        <Tabs
                            selectedKey={tabSelected}
                            onSelectionChange={(key) => setTabSelected(key as 'info' | 'services' | 'schedules' | 'reviews')}
                            size={'md'}
                            variant="underlined"
                            aria-label="Tabs menu">
                            <Tab key="info" title="Info" />
                            <Tab key="services" title="Servicios" />
                            <Tab key="schedules" title="Horarios" />
                            <Tab key="reviews" title="Reviews" />
                        </Tabs>
                    </div>

                    <div className="h-full flex flex-col gap-[12px]">
                        <div className="pt-[20px] ">
                            <div>
                                <div className="flex gap-1">
                                    <h2 className="subtitle word-break mb-2">Salon de belleza las locas de arborizadora alta</h2>

                                    <div className="pl-[6px] self-center">
                                        <Chip color="success" size="sm" variant="flat">Abierto</Chip>
                                    </div>
                                </div>

                                <div className="grid gap-[6px] pt-[8px]">
                                    <div className="flex items-center gap-[6px]">
                                        <Address className="general-icon-color-alt" />
                                        <p className="small-text">Bogota</p>
                                    </div>

                                    <div className="flex items-center gap-[6px]">
                                        <Watch className="general-icon-color-alt" />
                                        <p className="small-text">9:00 am - 9:00 pm</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-[10px] rounded-md">
                            <h3 className="subtitle">Descripcion</h3>

                            <p className="pt-[4px] small-text">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Temporibus nesciunt, fugiat iusto voluptatum perspiciatis opti
                            </p>
                        </div>

                        <div className="p-[10px] rounded-md">
                            <h3 className="subtitle">Contacto</h3>

                            <p className="pt-[4px] small-text">Tel: +57 123 456 789</p>
                            <p className="pt-[4px] small-text">web: www.weqwewqwe.com</p>
                            <p className="pt-[4px] small-text">Instagramo: @SuCucha</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
