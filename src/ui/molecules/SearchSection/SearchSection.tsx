'use client'

import { Services } from "./Services";
import { SelectionSection } from "./SelectionSection";


export const SearchSection = () => {

    return (
        <section className="grid px-[--padding-outside] py-[1.5rem] gap-3">

            <div className="text-center pt-[10px]">
                <h3 className="title">¿Qué estás buscando?</h3>
            </div>

            <SelectionSection />

            <Services />
        </section>
    )
}
