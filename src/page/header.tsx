import { Button } from "@/components/ui/button";

export function Header() {
    return (
        <div className="w-100% h-20 flex justify-between items-center">
            <div>
                <img src="logo-clrd.svg" alt="icone.svg" width={200} />
            </div>
            <div>
                <Button variant='ghost'>Contato</Button>
                <Button variant='ghost'>Serviços</Button>
            </div>
        </div>
    )
}