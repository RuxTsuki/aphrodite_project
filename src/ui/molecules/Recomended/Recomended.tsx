import ImageTest from '@/assets/imgs/imageTest.png';
import Image from 'next/image';

export const Recomended = () => {
    return (
        <div className="pt-[10px]">
            <div className="flex justify-between">
                <h3 className="subtitle">Recomendados</h3>

                <p className="small-link">Ver mas</p>
            </div>

            <div className="container-searched-list pt-[18px]">
                {
                    Array.from({ length: 10 }).map((_, index) => (
                        <div key={index} className="flex bg-white rounded-[10px] w-[180px] h-[50px]">
                            <div className="w-[50px] h-[50px]">
                                <Image src={ImageTest.src} width={50} height={50} alt="selection image" />
                            </div>

                            <div className="py-[3px] px-[4px] pl-[6px]">
                                <h3 className="subtitle">Lo mas buscado</h3>

                                <p className="small-text">Ver mas</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
