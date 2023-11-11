'use client'

import { useAppDispatch, useAppSelector } from "@/hooks/state/useStateTypes"
import { toggleMenu } from "@/store/reducers/sideBarMenu/sideBarMenu.slice"
import { Account, AphroditeLogo, Menu } from "@/ui/atoms"
import { LoginRoute, RegisterRoute } from "@/utils/constant";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
// next/navigation es el nuevo
import { useRouter } from "next/navigation";

import { Key } from "react";

export const Header = () => {

    const { isShrink } = useAppSelector(state => state.sideBarMenu)
    const router = useRouter();
    const dispatch = useAppDispatch();

    const toggleSideBarMenu = () => {
        dispatch(toggleMenu(true))
    }

    const handelActionMenu = (key: Key) => {
        key === 'login'
            ? router.push(LoginRoute)
            : router.push(RegisterRoute);
    }

    return (
        /* el height de este div toca cambiarlo */
        <div className="relative h-[--height-menu]">
            <nav className='fixed top-0 left-0 right-0 z-[20] px-[--padding-outside] py-[14px] flex items-center justify-between bg-transparent'>
                <div className={`flex gap-[10px] items-center justify-center`}>
                    <Button className="bg-transparent" isIconOnly onClick={() => toggleSideBarMenu()} size="sm" variant="flat">
                        <Menu className="general-icon-color" />
                    </Button>


                </div>

                <span className={`${isShrink ? 'ml-[28px]' : ''}`}>
                    <AphroditeLogo />
                </span>

                <Dropdown>
                    <DropdownTrigger>
                        <Button isIconOnly variant="light" className="rounded">
                            <Account className="general-icon-color" />
                        </Button>
                    </DropdownTrigger>

                    <DropdownMenu
                        aria-label="Action event example"
                        onAction={handelActionMenu}
                    >
                        <DropdownItem key="login">Iniciar Sesión</DropdownItem>
                        <DropdownItem key="register">Registrarse </DropdownItem>
                    </DropdownMenu>
                </Dropdown>

            </nav>
        </div>
    )
}
