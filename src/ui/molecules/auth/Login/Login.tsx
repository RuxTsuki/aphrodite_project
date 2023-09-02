'use client'

import { Button, Input } from '@nextui-org/react'
import { useRouter } from "next/navigation"

export const Login = () => {
    const router = useRouter();

    const goToCreateAccount = () => {
        router.replace('/auth/register');
    }

    return (
        <div className="container max-w-[700px] px-[50px] mt-[50px] mx-auto">
            <h3 className='title'>Iniciar Sesión</h3>

            <div className="mt-[50px]">
                <form action="" className="flex flex-col gap-[10px] place-content-center">
                    <Input size={'sm'} type="email" placeholder="Enter your email" />
                    <Input size={'sm'} type="password" placeholder="Enter your Password" />

                    <p className="normal-text mt-[5px]"> ¿Olvidaste tu
                        <span className='text-main underline pl-1'>
                            Contraseña?
                        </span>
                    </p>

                    <Button color="primary" className="w-full mt-[10px] px-[20px] py-[8px] text-[12px] h-auto rounded">
                        Iniciar Sesion
                    </Button>

                    <p className="normal-text mt-[10px]">¿No tienes cuenta?
                        <span onClick={() => goToCreateAccount()} className='text-main underline pl-1'>Registrate</span>
                    </p>

                </form>
            </div>
        </div>
    )
}
