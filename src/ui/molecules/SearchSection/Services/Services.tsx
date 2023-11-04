'use client'

import { servicesForUsers } from "@/mocks/services";
import { Search } from "@/ui/atoms";
import { Select, SelectItem, Chip, Button, Selection } from "@nextui-org/react";
import { ChangeEvent, ChangeEventHandler, useState } from "react";


export const Services = () => {

    const [allServices, setAllServices] = useState<Selection>(new Set([]));

    const onSearch = () => {

    }

    const handleClose = (fruitToRemove: string | number | null) => {
        if (!fruitToRemove) return;

        /*         const newItemsSelected = allServices.
                    setAllServices(allServices.map(fruit => ({
                        ...fruit,
        
                    })));
                if (allServices.length === 1) {
                    setAllServices([...servicesForUsers]);
                } */

        /* console.log(fruitToRemove) */
    };

    const handleSelectionChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setAllServices(new Set(e.target.value.split(",")));
    };

    return (
        <div className="flex items-center gap-2 pt-[10px]">
            <Select
                selectedKeys={allServices}
                onChange={handleSelectionChange}
                variant="bordered"
                isMultiline={true}
                size="lg"
                aria-label="multiple select of services"
                selectionMode="multiple"
                placeholder="Selecciona uno o mas servicios"
                classNames={{
                    base: "max-w-xs",
                    trigger: "min-h-unit-12 py-2",
                }}
                renderValue={(items) => {
                    console.log(items)
                    return (
                        <div className="flex flex-wrap gap-2">
                            {items.map((item) => (
                                <Chip
                                    size="lg"
                                    variant="flat"
                                    color="secondary"
                                    key={item.key}
                                    onClose={() => {
                                        handleClose(item.key || null);
                                    }}
                                >{item.textValue}</Chip>
                            ))}
                        </div>
                    );
                }}
            >
                {
                    servicesForUsers.map((service) => (
                        <SelectItem key={service.id} textValue={service.name}>
                            <div className="flex gap-2 items-center">
                                <div className="flex flex-col">
                                    <span className="text-small">{service.name}</span>
                                </div>
                            </div>
                        </SelectItem>
                    ))
                }
            </Select>

            {/*             <Button isIconOnly onClick={() => onSearch()} size="md" variant="light">
                <Search className="general-icon-color" />
            </Button> */}
        </div>
    )
}
