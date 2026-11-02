import Image from "next/image"
import { Button } from "../ui/button"
import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardAction,
    CardDescription,
    CardContent,

} from "../ui/card"
import { ArrowRight } from "lucide-react"

export default function CompleteYourLook() {
    return (
        <section className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1">
            <div>
                <CardTitle>
                    Complete Your Look
                </CardTitle>
            </div>

            <div className="relative">
                <Image
                src="/Images/Men/CustomTailoring.webp"
                alt="Bg-of-custom-tailoring"
                fill
                loading="eager"
                className="absolute object-fit object-center"
                />
                <div className="relative z-10 max-w-[calc(var(--content-area)/2)] w-[90%] mx-auto flex justify-start ">
                    <Card className="font-serif pt-3 gap-1.5 w-1/2">
                        <CardTitle className=" flex flex-col text-2xl ">
                            Custom Tailoring Made For You 
                        </CardTitle>
                        <CardDescription className="flex text-xs ">
                            From fabric selection to final fiting, get a custom outfit that matches your style and occasion.
                        </CardDescription>
                        <Button className="bg-brand-Brown w-fit text-brand-beige text-xs p-4 rounded-lg ">
                            Book a Consultation 
                            <ArrowRight className="size-4"/>
                        </Button>
                    </Card>
                </div>
            </div>
        </section>
    )
}
