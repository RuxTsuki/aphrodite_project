import { AphroditeLogo } from "@/ui/atoms"
import { LeftArrow } from "@/ui/atoms/Icons/LeftArrow"

export const GoBackMenu = () => {
    return (
        <nav className="px-[18px] py-[14px] flex items-center gap-[10px]">
            <LeftArrow className="general-icon-color" />

            <AphroditeLogo />
        </nav>
    )
}
