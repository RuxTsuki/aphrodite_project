import { recommendBeautySalon } from '@/models/types/beautySalon/services.type'
import Image from 'next/image'
import React from 'react'

export const BeautySalonCard = ({ address, city, schedule, title, image, status, onClick }: recommendBeautySalon) => {
    return (
        <div className="grid bg-white rounded-[10px] w-[190px] h-[210px]">
            <div onClick={onClick} className="h-[120px] relative">
                <Image src={image.src} className='rounded-[10px] object-cover' loading='lazy' fill alt="selection image" />
                <div className={`${status === 'active' ? 'bg-green-500' : 'bg-gray-400'} absolute bottom-[8px] right-[10px] px-[6px] py-[2px] rounded-xl`}>
                    <p className='text-white text-[11px]'>
                        {
                            status === 'active' ? 'Abierto' : 'Cerrado'
                        }
                    </p>
                </div>
            </div>

            <div className="py-[7px] px-[6px]">
                <h3 className="subtitle-alt text-wrap-custom">{title}</h3>
                <p className="small-text text-wrap-custom">{city}</p>
                <p className="small-text text-wrap-custom">{schedule.status} de {schedule.time} </p>
                <p className="small-text text-wrap-custom">{address}</p>
            </div>
        </div>
    )
}
