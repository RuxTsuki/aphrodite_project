'use client'

import { SearchSection } from '@/ui/molecules';

export const HeroSection = () => {
    return (
        <div className="w-full h-[186px] grid place-items-center">
            <h2 className="title">
                Que Servicio Buscas ?
            </h2>

            <SearchSection />
        </div>
    )
}
