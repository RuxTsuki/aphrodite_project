'use client'

import { useAppSelector } from "@/hooks/state/useStateTypes"
import { Button } from "@nextui-org/react"
import Link from "next/link"

export const Prueba = () => {

    const { value } = useAppSelector(state => state.theme)

    return (
        <div>
            <Link href="/login">
                to Test
            </Link>
        </div>
    )
}
