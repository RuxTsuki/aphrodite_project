import React from 'react'
import { useRouter } from "next/navigation";
export const AphroditeLogo = () => {

    const router = useRouter();

    return (
        <p onClick={() => router.push('/')} className='aphrodite-logo'>Aphrodite</p>
    )
}
