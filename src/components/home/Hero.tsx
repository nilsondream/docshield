import { Button } from "../ui/button"

const Hero = () => {
    return (
        <section className="relative">
            <div className="relative z-5 max-w-5xl mx-auto">
                <div className="flex flex-col gap-15 items-center">
                    <div className="text-white text-center space-y-5 mt-40">
                        <h1 className="text-6xl text-balance tracking-tight font-medium">
                            The fastest way to get malpractice insurance for less
                        </h1>
                        <p>
                            70%+ of your application pre-filled via NPI number. Shop, compare, and save today.
                        </p>
                        <div className="flex justify-center gap-2">
                            <Button>
                                Get a Quote
                            </Button>
                            <Button variant="secondary">
                                Talk to an Expert
                            </Button>
                        </div>
                    </div>
                    <div className="h-110">
                        <img src="/images/doctor-hero.webp" alt="Docshield" className="h-full w-full object-cover" />
                    </div>
                </div>
            </div>
            <div className="bg-linear-to-b from-blue-900 to-orange-50 w-full h-full absolute top-0 left-0 z-0"></div>
        </section>
    )
}

export default Hero