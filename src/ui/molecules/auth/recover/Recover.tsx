'use client'

import { Button, Input } from "@nextui-org/react";
import { GoBackMenu } from "@/ui/molecules/GoBackMenu";


export const Recover = () => {
    return (
        <>
            <GoBackMenu customRoute="/join" />

            <div className="container max-w-[700px] px-[50px] mt-[60px] mx-auto">
                <h3 className='title'>Restablecer Contraseña</h3>

                <div className="mt-[50px]">
                    <form action="" className="flex flex-col gap-[10px] place-content-center">
                        <p className="normal-text">
                            Ingresa el email asociado a tu cuenta de Aphrodite, enviaremos un correo con un enlace para restablecer tu contraseña.
                        </p>

                        <Input className="mt-[10px]" size={'sm'} type="email" placeholder="Email" />

                        <Button color="primary" className="w-full mt-[10px] px-[20px] py-[8px] text-[--font-s-buttons] h-auto rounded">
                            Enviar
                        </Button>
                    </form>
                </div>
            </div>
        </>
    )
}
