
import type { mostSearchedServices } from '@/models/types/beautySalon/services.type';
import Image from 'next/image';



export const TinyPortraitCard = ({ id, title, image, status }: mostSearchedServices) => {
    return (
        <>
            <div key={id} className="rounded-[10px] w-[--width-card-portrait] h-[--height-card-portrait] sm">
                <div className="w-[--width-card-portrait] h-[--height-card-portrait] relative">
                    <Image src={image.src} fill className="rounded-[9px] object-cover" priority alt={`Image ${title}`} />

                    <div className='bg-[#00000060] absolute w-[--width-card-portrait] h-[--height-card-portrait] rounded-[9px]'></div>

                    <div className='absolute w-full bottom-0 left-0 px-[8px] pb-[8px]'>
                        <p className='text-white text-[16px] word-break'>
                            {title}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}