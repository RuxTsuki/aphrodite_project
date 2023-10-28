'use client'

import { Cut, Store } from "@/ui/atoms";
import { Tabs, Tab } from "@nextui-org/react";

export const SelectionSection = () => {
    return (
        <div className="flex w-full flex-col">
            <Tabs aria-label="Options" color="primary" variant="bordered">
                <Tab
                    key="services"
                    title={
                        <div className="flex items-center space-x-2">
                            <Cut className="general-icon-color" />
                            <p className="subtitle">Servicios</p>
                        </div>
                    }
                />
                <Tab
                    key="salons"
                    title={
                        <div className="flex items-center space-x-2">
                            <Store className="general-icon-color" />
                            <p className="subtitle">Salones</p>
                        </div>
                    }
                />
            </Tabs>
        </div>
    )
}
