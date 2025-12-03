import { FloatingCard } from "../components/custom/card.float";

const services = [
    { id: 1, title: "Test 1" },
    { id: 2, title: "Test 2" },
    { id: 3, title: "Test 3" },
    { id: 4, title: "Test 4" },
];

export function Services() {
    return (
        <section className="flex flex-wrap gap-12 flex-1 items-center justify-between py-20">
            {services.map((service) => (
                <FloatingCard
                    key={service.id}
                    className="flex-1 items-center min-w-[250px] h-110 justify-center"
                >

                    <h3 className="font-bold uppercase">{service.title}</h3>
                </FloatingCard>
            ))}
        </section>
    );
}
