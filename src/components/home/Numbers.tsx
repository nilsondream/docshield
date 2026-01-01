"use client"
import { motion } from "framer-motion"

const numbersData = [
    {
        number: 21,
        label: "Average policy savings",
        percent: true
    },
    {
        number: 49,
        label: "Active states",
        percent: false
    },
    {
        number: 98,
        label: "Specialties served",
        percent: true
    },
    {
        number: 7,
        label: "Lines of coverage beyond MPL",
        percent: false
    }
]

const Numbers = () => {
    return (
        <section className="pb-20">
            <div className="max-w-7xl mx-auto flex justify-between">
                {numbersData.map((item, index) => (
                    <motion.div
                        key={index}
                        className="text-center space-y-5"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                    >
                        <h3 className="text-8xl">
                            {item.number}
                            {item.percent && <span className="text-6xl">%</span>}
                        </h3>
                        <p>{item.label}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Numbers