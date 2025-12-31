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
                    <div key={index} className="text-center space-y-5">
                        <h3 className="text-8xl">{item.number}<span className="text-6xl">{item.percent && "%"}</span></h3>
                        <p>{item.label}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Numbers