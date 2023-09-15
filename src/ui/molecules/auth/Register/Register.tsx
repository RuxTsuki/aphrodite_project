'use client'

import { Button, Input } from "@nextui-org/react"
import { useRouter } from "next/navigation"
import { GoBackMenu } from "@/ui/molecules/GoBackMenu";
import { LoginRoute } from "@/utils/constant";

export const Register = () => {

    const router = useRouter();

    const goBack = () => {
        router.replace(LoginRoute);
    }

    return (
        <>
            <GoBackMenu customRoute={LoginRoute} />

            <div className="container max-w-[700px] px-[40px] mt-[60px] mx-auto">
                <h3 className='title'>Crear cuenta</h3>

                <div className="mt-[50px]">
                    <form action="" className="flex flex-col gap-[10px] place-content-center">
                        <Input size={'sm'} type="text" placeholder="Usuario" />
                        <Input size={'sm'} type="email" placeholder="Email" />
                        <Input size={'sm'} type="password" placeholder="Contraseña" />

                        <Button color="primary" className="w-full mt-[10px] px-[20px] py-[8px] text-[--font-s-buttons] h-auto rounded">
                            Crear cuenta
                        </Button>

                        <p className="small-text mt-[10px]">
                            Al crear una cuenta aceptas tu conformidad con nuestros
                            <span className="text-main underline pl-1">Términos</span> y
                            <span className="text-main underline pl-1">Política</span> de Privacidad.
                        </p>

                        <p className="small-text mt-[10px]"> ¿Ya tienes cuenta?
                            <span onClick={() => goBack()} className='text-main underline pl-1 cursor-pointer'>Inicia Sesión</span>
                        </p>

                    </form>
                </div>
            </div>
        </>
    )
}
