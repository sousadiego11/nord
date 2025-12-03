import { FloatingCard } from "../components/custom/card.float";
import { Button } from "../components/ui/button";

export function Hero() {
    return (
        <section className="flex items-center justify-between py-20">
            {/* Lado esquerdo */}
            <div className="max-w-xl space-y-4">
                <h1 className="text-5xl font-bold leading-tight uppercase">
                    Design <span className="text-blue-600">&</span> Tecnologia
                </h1>

                <p className="text-lg text-gray-600">
                    Soluções modernas para impulsionar seu negócio com eficiência,
                    design e tecnologia de ponta.
                </p>

                <div className="pt-4">
                    <Button variant='default'>
                        Entrar em Contato
                    </Button>
                </div>
            </div>

            <FloatingCard className="bg-blue-600  min-w-[400px] h-[400px] flex items-center justify-center">
                <img src="icone.svg" alt="icone.svg" width={300} />
            </FloatingCard>
        </section>
    )
}