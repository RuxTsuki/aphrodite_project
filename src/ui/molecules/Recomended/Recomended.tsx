'use client';

import type { recommendBeautySalon } from '@/models/types/beautySalon/services.type';
import { recommendedMock } from '@/mocks/services';
import { BeautySalonCard } from '@/ui/atoms/cards';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { HairSalonsRoute } from '@/utils/constant';

export const Recommended = () => {
    const router = useRouter();

    const [hairSalonsList, sethairSalonsList] = useState<recommendBeautySalon[]>([])

    useEffect(() => {
        const customList = recommendedMock.map(salon => {
            return {
                ...salon,
                onClick: () => {
                    router.push(`${HairSalonsRoute}/1`)
                }
            }
        });
        sethairSalonsList(customList);
    }, [router])



    return (
        <div className="pt-[10px]">
            <div className="flex justify-between">
                <h3 className="subtitle">Recomendados</h3>

                <p className="small-link">Ver mas</p>
            </div>

            <div className="container-searched-list pt-[18px] pb-[4px]">
                <ul className='inline-flex gap-[9px]'>
                    {
                        hairSalonsList.map((data) => (
                            <BeautySalonCard key={data.id} {...data} />
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
