'use client'

import { Button, Input } from '@nextui-org/react';
import { GoBackMenu } from '@/ui/molecules/GoBackMenu';
import Link from 'next/link';

export const Login = () => {

    return (
        <>
            <GoBackMenu customRoute="/" />

            <div className="container max-w-[700px] px-[50px] mt-[60px] mx-auto">
                <h3 className='title'>Iniciar Sesión</h3>

                <div className="mt-[50px]">
                    <form action="" className="flex flex-col gap-[10px] place-content-center">
                        <Input size={'sm'} type="email" placeholder="Enter your email" />
                        <Input size={'sm'} type="password" placeholder="Enter your Password" />

                        <p className="small-text mt-[5px]"> ¿Olvidaste tu
                            <Link href={'/join/recover'}>
                                <span className='text-main underline pl-1'>
                                    Contraseña?
                                </span>
                            </Link>
                        </p>

                        <Button color="primary" className="w-full mt-[10px] px-[20px] py-[8px] text-[--font-s-buttons] h-auto rounded">
                            Iniciar Sesion
                        </Button>

                        <p className="small-text mt-[10px]">¿No tienes cuenta?
                            <Link href={'/join/register'}>
                                <span className='text-main underline pl-1'>Registrate</span>
                            </Link>
                        </p>

                    </form>
                </div>
            </div>
        </>

    )
}
