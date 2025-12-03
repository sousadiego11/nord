import { Button } from "@/components/ui/button";

export function Header() {
    return (
        <div
            className="
        h-20 flex justify-between items-center px-36 mx-28 my-6
        rounded-full shadow-md
        
        bg-linear-to-r from-neutral-50 to-neutral-100

        animate-in fade-in slide-in-from-top duration-1000 ease-out
    "
        >
            <div>
                <img src="logo-clrd.svg" alt="icone.svg" width={200} />
            </div>
            <div>
                <Button size='lg' variant='ghost'><h3 className="uppercase font-semibold">Contato</h3></Button>
                <Button size='lg' variant='ghost'><h3 className="uppercase font-semibold">Serviços</h3></Button>
            </div>
        </div>
    )
}