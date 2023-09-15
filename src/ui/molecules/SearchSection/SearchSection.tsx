'use client'

import { servicesForUsers } from "@/mocks/services";
import { RightArrow } from "@/ui/atoms";
import { Select, SelectItem, Chip, Button } from "@nextui-org/react";


export const SearchSection = () => {


    const onSearch = () => {

    }

    return (
        <section className="grid px-[--padding-outside] py-[1.5rem] gap-2">

            <div className="text-center pt-[10px]">
                <h3 className="title">Empecemos eligiendo un servicio</h3>
            </div>

            <div className="flex items-center gap-2 pt-[10px]">
                <Select
                    items={servicesForUsers}
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
                        return (
                            <div className="flex flex-wrap gap-2">
                                {items.map((item) => (
                                    <Chip variant="flat"
                                        color="secondary"
                                        key={item.key}>{item.data?.name}</Chip>
                                ))}
                            </div>
                        );
                    }}
                >
                    {(service) => (
                        <SelectItem key={service.id} textValue={service.name}>
                            <div className="flex gap-2 items-center">
                                <div className="flex flex-col">
                                    <span className="text-small">{service.name}</span>
                                </div>
                            </div>
                        </SelectItem>
                    )}
                </Select>

                <Button isIconOnly onClick={() => onSearch()} size="md" variant="light">
                    <RightArrow className="general-icon-color" />
                </Button>
            </div>
        </section>
    )
}
