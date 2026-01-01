import { ArrowRight, ShieldCheck } from "lucide-react"
import { Button } from "../ui/button"

const Options = () => {
    return (
        <section className="py-20">
            <div className="max-w-5xl mx-auto space-y-15">
                <div className="text-center space-y-5">
                    <h2 className="text-5xl text-balance tracking-tight font-medium">
                        Shop coverage options in <br /> New York
                    </h2>
                    <p>
                        Instantly see tailored malpractice quotes for your state and specialty.
                    </p>
                </div>
                <div className="grid grid-cols-[1.25fr_1fr_1fr] gap-2">
                    <div className="flex flex-col gap-10 justify-between bg-blue-50 rounded-3xl p-7">
                        <div className="space-y-5">
                            <p>Standard Limits</p>
                            <h3 className="text-5xl">$1.3M/$3.9M</h3>
                            <p>Per-claim / Per-year</p>
                        </div>
                        <ShieldCheck size={50} strokeWidth={1.5} />
                    </div>
                    <div className="flex flex-col gap-10 justify-between bg-blue-50 rounded-3xl p-7">
                        <div className="space-y-5">
                            <p>Affordability Rank</p>
                            <h3 className="text-5xl">50th</h3>
                            <p>of 50 states</p>
                        </div>
                        <div>
                            <div className="flex justify-between text-xs mb-2">
                                <p>Expensive</p>
                                <p>Affordable</p>
                            </div>
                            <div className="w-full h-10 rounded-full bg-background overflow-hidden">
                                <div className="h-full w-20 bg-foreground"></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-10 justify-between bg-blue-50 rounded-3xl p-7">
                        <div className="space-y-5">
                            <p>Average Claim Payout</p>
                            <h3 className="text-5xl">$587k</h3>
                            <p>17th highest payout</p>
                        </div>
                        <div>
                            <div className="flex justify-between text-xs mb-2">
                                <p>Lowest</p>
                                <p>Highest</p>
                            </div>
                            <div className="w-full h-10 rounded-full bg-background overflow-hidden">
                                <div className="h-full w-20 bg-foreground"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 justify-center">
                    <Button variant="icon">
                        Get a Quote
                        <ArrowRight size={20} />
                    </Button>
                    <Button variant="outline">
                        Read More
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Options