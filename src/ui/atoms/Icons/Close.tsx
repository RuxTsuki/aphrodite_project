
import { SVGProps } from "react";

export const Close = ({ ...props }: SVGProps<SVGSVGElement>) => {
    return (
        <>
            <svg {...props} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M7.2626 21.9626L6.0376 20.7376L12.7751 14.0001L6.0376 7.2626L7.2626 6.0376L14.0001 12.7751L20.7376 6.0376L21.9626 7.2626L15.2251 14.0001L21.9626 20.7376L20.7376 21.9626L14.0001 15.2251L7.2626 21.9626Z" />
            </svg>
        </>
    )
}