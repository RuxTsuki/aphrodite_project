'use client'

import './side_menu.css';
import { Button } from '@nextui-org/react';
import { useAppDispatch, useAppSelector } from '@/hooks/state/useStateTypes';
import { toggleShrink } from '@/store/reducers/sideBarMenu/sideBarMenu.slice';

export const SideMenu = () => {
    const { isOpen, isShrink } = useAppSelector(state => state.sideBarMenu);
    const dispatch = useAppDispatch();

    const toggleSmallView = () => {
        dispatch(toggleShrink(!isShrink));
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
            <div className={`${isOpen ? 'side-bar-open ' : ''}${isShrink ? 'small-side-menu ' : ''}side-bar-container fixed z-[22] left-[-250px] top-0 md:flex flex-col justify-between overflow-hidden w-[250px] h-full py-[1.25rem] px-[1rem] bg-[--bg-color-side-menu]`}>
                <div className='side-bar-top w-full h-[45px] flex items-center'>
                    <Button onClick={() => toggleSmallView()} color="primary" className="px-[20px] py-[8px] text-[12px] h-auto w-auto rounded">
                        Open
                    </Button>
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

                    </div>

                    <div className='user'>

                    </div>
                </div>
            </div>
        </>
    )
}
