import { ArrowRight } from "lucide-react"
import { Button } from "../ui/button"

const Options = () => {
    return (
        <section className="py-20">
            <div className="max-w-5xl mx-auto space-y-10">
                <div className="text-center space-y-5">
                    <h2 className="text-5xl text-balance tracking-tight font-medium">
                        Shop coverage options in <br/> New York
                    </h2>
                    <p>
                        Instantly see tailored malpractice quotes for your state and specialty.
                    </p>
                </div>
                <div></div>
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