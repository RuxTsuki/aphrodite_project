'use client'

import './side_menu.css';
import { Button } from '@nextui-org/react';
import { useAppDispatch, useAppSelector } from '@/hooks/state/useStateTypes';
import { toggleMenu, toggleShrink } from '@/store/reducers/sideBarMenu/sideBarMenu.slice';
import { AphroditeLogo, Close, LeftArrowThick, RightArrowThick, ToggleTheme } from '@/ui/atoms';
import Link from 'next/link';

export const SideMenu = () => {
    const { isOpen, isShrink } = useAppSelector(state => state.sideBarMenu);
    const dispatch = useAppDispatch();

    const toggleSmallView = (value: boolean) => {
        dispatch(toggleShrink(value));
        document.getElementsByClassName('main-content')[0].classList.toggle('main-small-shrink');
    }

    const toggleMenuFromOutside = () => {
        dispatch(toggleMenu(!isOpen));
    }

    const sideMenus = [{
        title: 'Usuarios',
        menus: [{
            title: 'Peluqueria',
        }]
    }, {
        title: 'Negocios',
        menus: [{
            title: 'Panel Administrativo',
        }]
    }]

    return (
        <>
            <div className={`${isOpen ? 'side-bar-open ' : ''}${isShrink ? 'small-side-menu ' : ''}side-bar-container fixed z-[25] top-0  flex-col justify-between overflow-hidden w-[--side-bar-menu-left] h-full py-[1.25rem] px-[1rem] bg-[--bg-color-side-menu]`}>
                <div className={`left-[231px] ${isShrink ? 'left-[60px]' : ''} ${isOpen ? 'block ' : 'hidden '}side-bar-arrows-view md:hidden fixed rounded-full p-[6px] bg-[--bg-color]`}>
                    <LeftArrowThick onClick={() => toggleSmallView(true)} className={`${isShrink ? 'hidden ' : 'block '}general-icon-color`} />
                    <RightArrowThick onClick={() => toggleSmallView(false)} className={`${isShrink ? 'block ' : 'hidden '}general-icon-color`} />
                </div>

                <div className='side-bar-top w-full h-[45px] flex items-center gap-2'>
                    <Button onClick={() => toggleMenuFromOutside()} isIconOnly variant='light' className="px-[2px] h-auto w-auto rounded">
                        <Close className='general-icon-color' />
                    </Button>

                    <AphroditeLogo />
                </div>

                <nav className='side-bar-nav h-full overflow-y-auto overflow-x-hidden'>
                    <ul>
                        {
                            sideMenus.map((sectionMenu, index) =>
                                <>
                                    <li key={index}>{sectionMenu.title}</li>
                                    <ul>
                                        {
                                            sectionMenu.menus.map((menu, index) =>
                                                <li key={index}>{menu.title}</li>
                                            )
                                        }
                                    </ul>
                                </>
                            )
                        }
                    </ul>
                </nav>

                <div className='side-bar-bottom'>
                    <div className='line mt-[1rem]'></div>

                    <div className='change-theme'>
                        <ToggleTheme />
                    </div>

                    <div className='user'>

                    </div>
                </div>
            </div>

            <div
                onClick={() => toggleMenuFromOutside()}
                className={`${isOpen && !isShrink ? 'block ' : 'hidden '}
            absolute bg-darkness-screen top-0 bottom-0 left-0 z-[22] right-0 h-full w-full`}></div>
        </>
    )
}
