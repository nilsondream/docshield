import Marquee from "react-fast-marquee"
import Icons from "../ui/icons"

const Clients = () => {
    return (
        <section>
            <div className="text-center text-sm pt-5 max-w-5xl mx-auto">
                <p>Docshield physicians are protected by</p>
                <div className='overflow-hidden mask-custom mt-5 h-10'>
                    <Marquee>
                        <Icons.FFDegrees className="w-30 mx-5" />
                        <Icons.Acme className="w-30 mx-5" />
                        <Icons.Chromatools className="w-30 mx-5" />
                        <Icons.Ephermal className="w-30 mx-5" />
                        <Icons.Interlock className="w-30 mx-5" />
                        <Icons.LaunchSimple className="w-30 mx-5" />
                        <Icons.Magnolia className="w-30 mx-5" />
                        <Icons.Pollinate className="w-30 mx-5" />
                    </Marquee>
                </div>
            </div>
        </section>
    )
}

export default Clients