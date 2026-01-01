"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonialsData = [
    {
        name: "Sarah Johnson",
        quote: "DocShield has completely transformed how we manage our documents. The automation features alone have saved our team countless hours every week.",
        ocupation: "Operations Manager",
        color: "bg-gray-100"
    },
    {
        name: "Michael Chen",
        quote: "The ease of use combined with enterprise-grade security is exactly what we needed. Our data is now protected without sacrificing accessibility.",
        ocupation: "IT Director",
        color: "bg-blue-50"
    },
    {
        name: "Emma Rodriguez",
        quote: "We've reduced document handling time by 60% and improved accuracy significantly. The ROI was immediate and undeniable.",
        ocupation: "Business Analyst",
        color: "bg-orange-50"
    },
    {
        name: "David Thompson",
        quote: "Outstanding customer support and an intuitive interface that required minimal training for our entire team. This is the solution we've been searching for.",
        ocupation: "CEO",
        color: "bg-green-50"
    },
    {
        name: "Lisa Anderson",
        quote: "The compliance features ensure all regulations are met seamlessly. We've eliminated manual compliance checks and reduced our audit risk considerably.",
        ocupation: "Compliance Officer",
        color: "bg-purple-50"
    }
];

const Reviews = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const trackRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!sectionRef.current || !trackRef.current) return;

        const cardsWidth = trackRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;

        gsap.fromTo(
            trackRef.current,
            { x: viewportWidth },
            {
                x: -cardsWidth,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    scrub: true,
                    pin: true,
                    anticipatePin: 1
                }
            }
        );

        return () => ScrollTrigger.getAll().forEach(t => t.kill());
    }, []);

    return (
        <section>
            <div className="mx-auto max-w-5xl sticky top-0 h-screen flex justify-center items-center -z-1">
                <h2 className="text-[12.5rem] max-md:px-5 max-md:text-6xl max-md:leading-16 font-medium tracking-tighter text-center leading-45">
                    The Docshield difference
                </h2>
            </div>
            <div className="-mt-[100vh] max-md:-mt-[25vh] select-none">
                <div ref={sectionRef} className="relative h-screen overflow-hidden">
                    <div
                        ref={trackRef}
                        className="flex items-center h-full will-change-transform"
                    >
                        {testimonialsData.map((item, i) => (
                            <div key={i} className="mx-6 shrink-0">
                                <div
                                    className={`${item.color} p-7 rounded-3xl aspect-3/4 w-80 flex flex-col justify-between`}
                                >
                                    <p className="text-2xl">{item.quote}</p>

                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-full bg-foreground text-white text-xl font-medium flex items-center justify-center">
                                            {item.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p>{item.name}</p>
                                            <span className="opacity-75 text-sm">
                                                {item.ocupation}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;