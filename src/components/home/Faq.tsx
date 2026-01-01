"use client"

import { useState } from "react"
import { ArrowRight, MinusCircle, PlusCircle } from "lucide-react"
import { Button } from "../ui/button"

const faqData = [
    {
        question: "What is DocShield?",
        answer: "DocShield is a secure document management platform that helps you store, organize, and protect your important files with advanced encryption and access controls."
    },
    {
        question: "How secure are my documents?",
        answer: "Your documents are protected with industry-standard AES-256 encryption, ensuring your data remains private and secure at all times."
    },
    {
        question: "Can I share documents with others?",
        answer: "Yes, you can securely share documents with other users by generating shareable links with customizable permissions and expiration dates."
    },
    {
        question: "What file types are supported?",
        answer: "DocShield supports all common file types including PDF, Word, Excel, images, and more. You can upload files up to 100MB each."
    },
    {
        question: "Is there a free trial available?",
        answer: "Yes, we offer a 14-day free trial with full access to all features. No credit card is required to get started."
    }
]

const Faq = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 space-y-40">
            <div className="max-w-3xl mx-auto space-y-15">
                <div className="text-center space-y-5">
                    <h2 className="text-5xl text-balance tracking-tight font-medium">
                        Frequently asked questions
                    </h2>
                </div>
                <div>
                    {faqData.map((item, index) => (
                        <div key={index} onClick={() => toggleAccordion(index)} className="cursor-pointer py-5 border-t last:border-b border-foreground/25">
                            <div className="flex items-center justify-between">
                                <h4 className="text-lg">{item.question}</h4>
                                {openIndex === index ? <MinusCircle size={20} /> : <PlusCircle size={20} />}
                            </div>
                            <p className={`overflow-hidden opacity-50 mr-40 transition-all ${openIndex === index ? "mt-5 h-auto" : "mt-0 h-0"}`}>{item.answer}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-5xl mx-auto">
                <div className="relative h-120 grid place-items-center">
                    <div className="absolute z-5 flex flex-col items-center w-3/4 gap-10 mx-auto text-center">
                        <h3 className="text-8xl font-medium tracking-tight text-balance">
                            15 minutes or less to apply
                        </h3>
                        <p className="text-balance">
                            No more digging through your licenses. We index into dozens of federal, state, and private data sources to pre-populate 70%+ of your application.
                        </p>
                        <Button variant="icon" size="lg">
                            Get a Quote
                            <ArrowRight />
                        </Button>
                    </div>
                    <img src="/images/blur.webp" alt="Docshield" className="absolute z-0 scale-125 animate-pulse" />
                </div>
            </div>
        </section>
    )
}

export default Faq