import { Button } from "@/components/ui/button";
import Nord from '../assets/icone.svg?react';

export function Header() {
    return (
        <div
            className="
                h-20 flex justify-between items-center px-6 mx-28 my-6
                rounded-full shadow-md
                
                bg-linear-to-r from-neutral-50 to-neutral-100

                animate-in fade-in slide-in-from-top duration-1000 ease-out
            "
        >
            <div>
                <img src="logo-clrd.svg" alt="icone.svg" width={200} />
            </div>
            <div className="flex gap-4">
                <Button className="rounded-full" variant='default'><h3 className="uppercase font-semibold">Contato</h3></Button>
                <Button className="rounded-full" variant='default'><h3 className="uppercase font-semibold">Serviços</h3></Button>
                <Button className="rounded-full" size='icon' variant='default'><Nord /></Button>
            </div>
        </div>
    )
}