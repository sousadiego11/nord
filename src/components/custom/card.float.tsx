import type React from "react";
import { Card } from "../ui/card";

export function FloatingCard({ children, className }: { className: string, children: React.ReactNode }) {
    return (
        <Card
            className={
                `
                    ${className}
                    rounded-2xl
                    transition-all duration-300 ease-out
                    hover:-translate-y-1 hover:shadow-2xl
                    hover:cursor-pointer
                `
            }
        >
            {children}
        </Card>
    )
}