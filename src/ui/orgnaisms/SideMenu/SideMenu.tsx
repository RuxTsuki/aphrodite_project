'use client'

import { useState } from 'react';
import './side_menu.css';
import { Button } from '@nextui-org/react';

export const SideMenu = () => {

    const [isSmallSideM, setIsSmallSideM] = useState(true);
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
            <div className={`${isSmallSideM ? 'small-side-menu ' : ''}side-bar-container fixed left-[-250px] flex flex-col justify-between overflow-hidden w-[250px] h-full py-[1.25rem] px-[1rem] bg-[--bg-color-side-menu]`}>
                <div className='side-bar-top w-full h-[45px] flex items-center'>
                    <Button onClick={() => setIsSmallSideM(!isSmallSideM)} color="primary" className="px-[20px] py-[8px] text-[12px] h-auto w-auto rounded">
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
