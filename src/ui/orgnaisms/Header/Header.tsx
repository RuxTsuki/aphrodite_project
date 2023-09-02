'use client'

import { AphroditeLogo, Menu } from "@/ui/atoms"
import { Button } from "@nextui-org/react"
import Link from "next/link"

export const Header = () => {
    return (
        /* el height de este div toca cambiarlo */
        <div className="relative h-[64px]">
            <nav className='fixed top-0 left-0 right-0 z-50 px-[18px] py-[14px] flex items-center justify-between'>
                <div className="flex gap-[10px] items-center justify-center">
                    <Button size="sm" variant="light">
                        <Menu className="general-icon-color" />
                    </Button>

                    <AphroditeLogo />
                </div>

                <Link href="auth">
                    <Button color="primary" className="px-[20px] py-[8px] text-[12px] h-auto w-auto rounded">
                        Iniciar Sesion
                    </Button>
                </Link>
            </nav>
        </div>
    )
}
