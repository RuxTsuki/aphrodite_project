import { StaticImageData } from "next/image";

export interface mostSearchedServices {
    id: string,
    title: string,
    status: string,
    image: StaticImageData
}

export interface recommendBeautySalon {
    id: string,
    title: string,
    status: string,
    image: StaticImageData,
    address: string,
    city: string,
    schedule: {
        status: string,
        time: string
    },
    rating: number,
    onClick: () => void
}