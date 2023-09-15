
import { SVGProps } from "react"

export const RightArrow = ({ ...props }: SVGProps<SVGSVGElement>) => {
    return (
        <>
            <svg {...props} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" /></svg>
        </>
    )
}
