'use client'

import './side_menu.css';
import { Button } from '@nextui-org/react';
import { useAppDispatch, useAppSelector } from '@/hooks/state/useStateTypes';
import { toggleMenu, toggleShrink } from '@/store/reducers/sideBarMenu/sideBarMenu.slice';
import { AphroditeLogo, Calendar, Close, Cut, DisplaySettings, Leaf, LeftArrowThick, MoreVert, Person, Question, RightArrowThick, SelfCare, Store, StoreFront, ToggleTheme } from '@/ui/atoms';
import Link from 'next/link';
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Themes } from '@/theme/theme.types';
import Image from 'next/image';
import ImageTest from '@/assets/imgs/imageTest.png';

export const SideMenu = () => {
    const { isOpen, isShrink } = useAppSelector(state => state.sideBarMenu);
    const { value } = useAppSelector(state => state.theme);
    const dispatch = useAppDispatch();

    const whatThemeIs = value === Themes.light ? 'Modo Claro' : 'Modo Oscuro';

    const toggleSmallView = (value: boolean) => {
        dispatch(toggleShrink(value));
        document.getElementsByClassName('main-content')[0].classList.toggle('main-small-shrink');
    }

    const toggleMenuFromOutside = () => {
        dispatch(toggleMenu(!isOpen));
    }

    const sideMenus = [{
        title: 'Usuarios',
        icon: Person,
        id: 'users',
        menus: [{
            title: 'Peluqueria',
            id: 'hairSalon',
            icon: SelfCare
        }, {
            title: 'Barberia',
            id: 'barberSalon',
            icon: Cut
        }, {
            title: 'Spa',
            id: 'spaSalon',
            icon: Leaf
        }]
    }, {
        title: 'Negocios',
        id: 'business',
        icon: StoreFront,
        menus: [{
            title: 'Panel Administrativo',
            id: 'administrativePanel',
            icon: DisplaySettings
        }, {
            title: 'Calendario',
            id: 'calendarPanel',
            icon: Calendar
        },
        {
            title: 'My Negocio',
            id: 'BusinessPanel',
            icon: Store
        },
        {
            title: 'Ayuda',
            id: 'HelpPanel',
            icon: Question
        }]
    }]

    return (
        <>
            <div className={`${isOpen ? 'side-bar-open ' : ''}${isShrink ? 'small-side-menu ' : ''}side-bar-container fixed z-[25] top-0  flex-col justify-between overflow-hidden w-[--side-bar-menu-left] h-full py-[1.25rem] px-[1rem] bg-[--bg-color-side-menu]`}>
                {/* <div className={`left-[231px] ${isShrink ? 'left-[60px]' : ''} ${isOpen ? 'block ' : 'hidden '}side-bar-arrows-view md:hidden fixed rounded-full p-[6px] bg-[--bg-color]`}>
                    <LeftArrowThick onClick={() => toggleSmallView(true)} className={`${isShrink ? 'hidden ' : 'block '}general-icon-color`} />
                    <RightArrowThick onClick={() => toggleSmallView(false)} className={`${isShrink ? 'block ' : 'hidden '}general-icon-color`} />
                </div> */}

                <div className='side-bar-top w-full h-[45px] flex items-center gap-2'>
                    <Button onClick={() => toggleMenuFromOutside()} isIconOnly variant='light' className="px-[2px] h-auto w-auto rounded">
                        <Close className='general-icon-color' />
                    </Button>

                    <AphroditeLogo />
                </div>

                <nav className='side-bar-nav h-full overflow-y-auto overflow-x-hidden py-[1rem]'>
                    <Accordion selectionMode="multiple" defaultExpandedKeys={[sideMenus[0].id, sideMenus[1].id]}>
                        {
                            sideMenus.map((sectionMenu) =>
                                <AccordionItem key={sectionMenu.id} startContent={<sectionMenu.icon className='general-icon-color sidebar-menu-icons-color' />} className='py-[1rem]' aria-label="Accordion 1" title={<p className='item-menu-text font-[500]'>{sectionMenu.title}</p>}>
                                    <ul className='grid gap-3 pl-[.5rem]'>
                                        {
                                            sectionMenu.menus.map((menu) =>
                                                <li key={menu.id} tabIndex={1} className='sidebar-item-menu px-[8px] py-[5px]'>
                                                    <Link href={`/${menu.id}`} className='flex gap-3 items-center'>
                                                        <>
                                                            <menu.icon className='general-icon-color sidebar-menu-icons-color' />
                                                            <p className='item-menu-text'>{menu.title}</p>
                                                        </>
                                                    </Link>
                                                </li>
                                            )
                                        }
                                    </ul>
                                </AccordionItem>
                            )
                        }
                    </Accordion>

                </nav>

                <div className='side-bar-bottom min-h-[130px]'>
                    <hr className="shrink-0 bg-divider border-none w-full h-divider" role="separator" />

                    <div className='grid gap-3 pt-[1rem] h-full'>
                        <div className='change-theme flex gap-[10px]'>
                            <ToggleTheme />

                            <p className='item-menu-text'>
                                {whatThemeIs}
                            </p>
                        </div>

                        <div className='user flex items-center sidebar-item-menu'>
                            <div className="rounded-md w-[46px] h-[46px]">
                                <Image src={ImageTest} alt='Profile Image' />
                            </div>

                            <div className='flex pl-[8px] w-[124px] overflow-hidden'>
                                <p className='item-menu-text'>Diego Bello</p>
                            </div>

                            <div className='ml-auto'>
                                <Button isIconOnly variant='light'>
                                    <MoreVert className='sidebar-menu-icons-color' />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                onClick={() => toggleMenuFromOutside()}
                className={`${isOpen && !isShrink ? 'block ' : 'hidden '}
            fixed bg-darkness-screen top-0 bottom-0 left-0 z-[22] right-0 h-full w-full`}></div>
        </>
    )
}
