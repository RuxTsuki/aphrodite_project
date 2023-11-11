import { MostSearched } from "@/ui/molecules/MostSearched"
import { Recommended } from "@/ui/molecules/Recomended"


export const MainContent = () => {
    return (
        <div className="square-custom-1 mt-[35px]">

            <div className="pt-[20px]">
                <main>

                    <MostSearched />
                    <Recommended />

                </main>

            </div>
        </div>
    )
}
