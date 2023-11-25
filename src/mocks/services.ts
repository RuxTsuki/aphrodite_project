import { recommendBeautySalon } from '@/models/types/beautySalon/services.type';

import ImageMan from '@/assets/imgs/services/corteHombre.jpg';
import ImageChildren from '@/assets/imgs/services/corteChildrens.jpg';
import ImageWoman from '@/assets/imgs/services/corteMujer.jpg';

import ImageSalon01 from '@/assets/imgs/beautysalon/beautySalon0.jpg';
import ImageSalon02 from '@/assets/imgs/beautysalon/beautySalon1.jpg';
import ImageSalon03 from '@/assets/imgs/beautysalon/beautySalon2.jpg';
import ImageSalon04 from '@/assets/imgs/beautysalon/beautySalon4.jpg';
import ImageSalon05 from '@/assets/imgs/beautysalon/beautySalon5.jpg';


export const servicesForUsers = [{
    id: 1,
    name: "Corte Hombre",
    role: "CEO",
    team: "Management",
    status: "active",
    color: "#333333"
},
{
    id: 2,
    name: "Manicure",
    role: "Tech Lead",
    team: "Development",
    status: "paused",
    color: "#663399"
},
{
    id: 3,
    name: "Corte Mujer",
    role: "Sr. Dev",
    team: "Development",
    status: "active",
    color: "#A575D1"
},
{
    id: 4,
    name: "Depilacion",
    role: "C.M.",
    team: "Marketing",
    status: "vacation",
    color: "#F5F5F5"
}, {
    id: 5,
    name: "Peinado",
    role: "C.M.",
    team: "Marketing",
    status: "vacation",
    color: "#E0E8F1"
}, {
    id: 6,
    name: "Tintura",
    role: "C.M.",
    team: "Marketing",
    status: "vacation",
    color: "#E6F4E6"
}, {
    id: 7,
    name: "Cera",
    role: "C.M.",
    team: "Marketing",
    status: "vacation",
    color: "#CCCCCC"
}, {
    id: 8,
    name: "Cejas",
    role: "C.M.",
    team: "Marketing",
    status: "vacation",
    color: "#333333"
}, {
    id: 9,
    name: "Planchado",
    role: "C.M.",
    team: "Marketing",
    status: "vacation",
    color: "#F0B2B2"
}, {
    id: 10,
    name: "Barba",
    role: "C.M.",
    team: "Marketing",
    status: "vacation",
    color: "#F5F5F5"
}]

export const moreSearched = [
    {
        id: `1CorteH`,
        title: "Corte Hombre",
        status: "active",
        image: ImageMan
    },
    {
        id: `2CorteM`,
        title: "Corte Mujer",
        status: "active",
        image: ImageWoman
    },
    {
        id: `3CorteC`,
        title: "Corte Niños",
        status: "active",
        image: ImageChildren
    }, {
        id: `1CorteH2`,
        title: "Corte Hombre",
        status: "active",
        image: ImageMan
    },
    {
        id: `2CorteM3`,
        title: "Corte Mujer",
        status: "active",
        image: ImageWoman
    },
    {
        id: `3CorteC4`,
        title: "Corte Niños",
        status: "active",
        image: ImageChildren
    }
]

export const recommendedMock: recommendBeautySalon[] = [
    {
        id: `beautySalon1`,
        address: 'Calle 23# 12-1 Normanida',
        city: 'Medellin',
        title: 'Salon de Belleza Suba',
        rating: 45,
        image: ImageSalon01,
        schedule: {
            status: 'active',
            time: '10:00 - 20:00'
        },
        status: 'unactive',
        onClick: () => { }
    },
    {
        id: `beautySalon2`,
        address: 'Calle 23# 12-1 Normanida',
        city: 'Bogota',
        title: 'Salon de Belleza Bogota',
        rating: 45,
        image: ImageSalon02,
        schedule: {
            status: 'active',
            time: '10:00 - 20:00'
        },
        status: 'active',
        onClick: () => { }
    },
    {
        id: `beautySalon3`,
        address: 'Calle 23# 12-1 teusaquillo',
        city: 'Bogota',
        title: 'Salon de Belleza Teusaquillo',
        rating: 45,
        image: ImageSalon03,
        schedule: {
            status: 'active',
            time: '10:00 - 20:00'
        },
        status: 'active',
        onClick: () => { }
    }, {
        id: `beautySalon4`,
        address: 'Calle 23# 12-1 Normanida',
        city: 'Medellin',
        title: 'Salon de Belleza Suba',
        rating: 45,
        image: ImageSalon04,
        schedule: {
            status: 'active',
            time: '10:00 - 20:00'
        },
        status: 'active',
        onClick: () => { }
    },
    {
        id: `beautySalon5`,
        address: 'Calle 23# 12-1 Normanida',
        city: 'Bogota',
        title: 'Salon de Belleza Bogota',
        rating: 45,
        image: ImageSalon05,
        schedule: {
            status: 'active',
            time: '10:00 - 20:00'
        },
        status: 'unactive',
        onClick: () => { }
    }
]