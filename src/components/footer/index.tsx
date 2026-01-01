import { Stethoscope } from "lucide-react"
import Link from "next/link"

const footerLinks = [
    { label: "Why Docshield" },
    { label: "State Resources" },
    { label: "State Guides" },
    { label: "About Us" },
    { label: "Term and Conditions" },
    { label: "Privacy Policy" }
]

const Footer = () => {
    return (
        <footer>
            <div className="mb-20 max-md:mb-5 max-w-5xl mx-auto bg-linear-to-tr from-red-50 to-blue-900/75 rounded-3xl outline-hidden p-10 text-white max-md:mx-5">
                <div className="grid grid-cols-2 max-md:flex max-md:flex-col-reverse max-md:gap-10">
                    <div className="flex flex-col gap-40 max-md:gap-10  justify-between">
                        <div className="flex flex-col gap-2">
                            {footerLinks.map((item, index) => (
                                <Link href={"/#"} key={index} className="hover:underline">
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                        <div className="flex items-center gap-5">
                            <Stethoscope size={60} className="max-md:h-10 max-md:w-10 shrink-0" />
                            <p className="text-6xl max-md:text-5xl tracking-tight">
                                Docshield
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-40 max-md:gap-10 justify-between">
                        <p className="text-4xl tracking-tight">
                            Complete protection for every stage of your practice
                        </p>
                        <div className="flex flex-col">
                            <p>Phone: +1 (555) 123-4567</p>
                            <p>Email: info@docshield.com</p>
                            <p>Address: 123 Medical Plaza, New York, NY 10001, USA</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer