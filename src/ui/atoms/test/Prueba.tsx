'use client'

import { useAppSelector } from "@/hooks/state/useStateTypes"
import { Button } from "@nextui-org/react"

export const Prueba = () => {

    const { value } = useAppSelector(state => state.theme)

    return (
        <div>
            {
                value
            }
        </div>
    )
}
