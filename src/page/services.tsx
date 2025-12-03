import { CardDescription, CardTitle } from "@/components/ui/card";
import { FloatingCard } from "../components/custom/card.float";

const services = [
    {
        id: 1,
        title: "Criação de Logo e Identidade Visual",
        description: "Desenvolvo identidades visuais modernas e memoráveis que fortalecem a presença da sua marca."
    },
    {
        id: 2,
        title: "Desenvolvimento de Sites",
        description: "Criação de sites rápidos, responsivos e personalizados para atender exatamente às necessidades do seu negócio."
    },
    {
        id: 3,
        title: "Manutenção e Otimização de Sites",
        description: "Atualização, correção e melhoria contínua do seu site para desempenho, segurança e estabilidade."
    },
    {
        id: 4,
        title: "Design de Artes para Redes Sociais",
        description: "Produção de artes profissionais e atrativas para engajar o público nas suas redes sociais."
    },
];

export function Services() {
    return (
        <>
            <h2 className="text-center my-12 uppercase text-4xl font-bold">Serviços</h2>
            <section className="flex flex-wrap gap-12 items-center justify-between px-36">
                {services.map((service) => (
                    <FloatingCard
                        key={service.id}
                        className="flex-1 items-center min-w-[600px] h-100 justify-center bg-neutral-50"
                    >
                        <CardTitle className="text-2xl">{service.title}</CardTitle>
                        <CardDescription>
                            {service.description}
                        </CardDescription>
                    </FloatingCard>
                ))}
            </section>
        </>
    );
}
