import { GoBackMenu } from "@/ui/molecules/GoBackMenu"


export default function Layout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className="h-screen">
            <GoBackMenu />
            {children}
        </div>
    )
}