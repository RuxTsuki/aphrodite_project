import { Outfit, Playball } from 'next/font/google';

export const outfit = Outfit({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-outfit',
    display: 'swap'
});

export const playball = Playball({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-playball',
    display: 'swap'
});