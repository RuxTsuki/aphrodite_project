
import { moreSearched } from '@/mocks/services';
import Image from 'next/image';

export const MostSearched = () => {


    return (
        <div>
            <div className="flex justify-between">
                <h3 className="subtitle">Lo mas buscado</h3>

                <p className="small-link">Ver mas</p>
            </div>

            <div className="container-searched-list pt-[18px] pb-[4px]">
                <ul className='searched-list'>
                    {
                        moreSearched.map((service) => (
                            <MostSearchedCard key={service.id} {...service} />
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

const MostSearchedCard = ({ id, title, image, status }: typeof moreSearched[0]) => {
    return (
        <>
            <div key={id} className="rounded-[10px] w-[--width-card-portrait] h-[--height-card-portrait] sm">
                <div className="w-[--width-card-portrait] h-[--height-card-portrait] relative">
                    <Image src={image.src} fill objectFit='cover' className="rounded-[9px]" priority alt={`Image ${title}`} />

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
