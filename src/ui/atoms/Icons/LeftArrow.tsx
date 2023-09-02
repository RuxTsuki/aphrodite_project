
import { SVGProps } from "react"

export const LeftArrow = ({ ...props }: SVGProps<SVGSVGElement>) => {
    return (
        <>
            <svg {...props} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M7.99175 14.8751L15.2251 22.1084L14.0001 23.3334L4.66675 14.0001L14.0001 4.66675L15.2251 5.89175L7.99175 13.1251H23.3334V14.8751H7.99175Z" />
            </svg>
        </>
    )
}
