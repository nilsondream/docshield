import { ArrowRight, Menu, Stethoscope } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"

const Header = () => {
    return (
        <header className="fixed z-50 top-0 left-0 w-full">
            <div className="mx-auto max-w-5xl my-2.5 max-md:mx-2.5 bg-white/75 backdrop-blur-lg p-2 pl-5 max-md:px-5 rounded-full flex items-center justify-between border border-slate-200">
                <Link href={"/"} className="flex items-center gap-2 text-2xl font-medium tracking-tight">
                    <Stethoscope />
                    Docshield
                </Link>
                <nav className="space-x-5 text-sm max-md:hidden">
                    <span>Why Docshield</span>
                    <span>State Resources</span>
                    <span>About Us</span>
                </nav>
                <div className="flex gap-2 max-md:hidden">
                    <Button variant="icon" size="sm">
                        Log in
                        <ArrowRight size={16} />
                    </Button>
                    <Button size="sm">
                        Get a Quote
                    </Button>
                </div>
                <button className="hidden max-md:block">
                    <Menu />
                </button>
            </div>
        </header>
    )
}

export default Header