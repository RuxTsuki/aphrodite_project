'use client'

import { useAppDispatch, useAppSelector } from "@/hooks/state/useStateTypes"
import { toggleMenu } from "@/store/reducers/sideBarMenu/sideBarMenu.slice"
import { AphroditeLogo, Menu } from "@/ui/atoms"
import { Button } from "@nextui-org/react"
import Link from "next/link"

export const Header = () => {

    const { isShrink } = useAppSelector(state => state.sideBarMenu)
    const dispatch = useAppDispatch();

    const toggleSideBarMenu = () => {
        dispatch(toggleMenu(true))
    }

    return (
        /* el height de este div toca cambiarlo */
        <div className="relative h-[--height-menu]">
            <nav className='fixed top-0 left-0 right-0 z-[20] px-[18px] py-[14px] flex items-center justify-between bg-[--bg-color]'>
                <div className={`flex gap-[10px] items-center justify-center`}>
                    <Button onClick={() => toggleSideBarMenu()} size="sm" variant="light">
                        <Menu className="general-icon-color" />
                    </Button>

                    <span className={`${isShrink ? 'ml-[28px]' : ''}`}>
                        <AphroditeLogo />
                    </span>
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
