'use client'

import { AphroditeLogo, Menu } from "@/ui/atoms"
import { Button } from "@nextui-org/react"
import Link from "next/link"

export const Header = () => {
    return (
        /* el height de este div toca cambiarlo */
        <div className="relative h-[64px]">
            <nav className='fixed top-0 left-0 right-0 z-[20] px-[18px] py-[14px] flex items-center justify-between bg-[--bg-color]'>
                <div className="flex gap-[10px] items-center justify-center">
                    <Button size="sm" variant="light">
                        <Menu className="general-icon-color" />
                    </Button>

                    <AphroditeLogo />
                </div>

                <Button color="primary" className="px-[20px] py-[8px] text-[12px] h-auto w-auto rounded">
                    <Link href="join">
                        Iniciar Sesion
                    </Link>
                </Button>
            </nav>
        </div>
    )
}
