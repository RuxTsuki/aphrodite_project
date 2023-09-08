
import { SVGProps } from "react"

export const LeftArrowThick = ({ ...props }: SVGProps<SVGSVGElement>) => {
    return (
        <>
            <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 7.18742L15 12.1874L14.1042 13.0833L10 8.95825L5.89583 13.0624L5 12.1666L10 7.18742Z" />
            </svg>
        </>
    )
}
