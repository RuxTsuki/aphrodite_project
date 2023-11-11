import ImageTest from '@/assets/imgs/imageTest.png';
import { recommendedMock } from '@/mocks/services';
import { BeautySalonCard } from '@/ui/atoms/cards';
import Image from 'next/image';

export const Recommended = () => {
    return (
        <div className="pt-[10px]">
            <div className="flex justify-between">
                <h3 className="subtitle">Recomendados</h3>

                <p className="small-link">Ver mas</p>
            </div>

            <div className="container-searched-list pt-[18px] pb-[4px]">
                <ul className='inline-flex gap-[9px]'>
                    {
                        recommendedMock.map((data) => (
                            <BeautySalonCard key={data.id} {...data} />
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
