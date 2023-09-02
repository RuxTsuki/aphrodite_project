'use client'

import { AphroditeLogo } from "@/ui/atoms"
import { LeftArrow } from "@/ui/atoms/Icons/LeftArrow"
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export const GoBackMenu = ({ customRoute = '' }: { customRoute?: string }) => {

    const router = useRouter();

    const goTo = () => {
        if (customRoute) {
            router.push(customRoute);
            return;
        }

        router.back();
    }

    return (
        <nav className="px-[18px] py-[14px] flex items-center gap-[10px]">
            <Button onClick={() => goTo()} size="sm" variant="light">
                <LeftArrow className="general-icon-color" />
            </Button>

            <AphroditeLogo />
        </nav>
    )
}
