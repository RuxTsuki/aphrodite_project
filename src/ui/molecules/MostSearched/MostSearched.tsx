
import { moreSearched } from '@/mocks/services';
import { TinyPortraitCard } from '@/ui/atoms/cards';


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
                            <TinyPortraitCard key={service.id} {...service} />
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}


