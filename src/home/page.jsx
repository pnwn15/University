
import ButtonComponent from "../components/Button"
import Carousel from "../components/Carousel"
import Mockup from "../components/Mockup"
import MockupComponent from "../components/Mockup1"
import News from "../components/News"
import News1 from "../components/์News1"


const HomePage = ({ children }) => {
    return (
        <section className="mx-auto">
            <div className="flex flex-wrap ">
                {/* First Section */}
                <div className="flex-2">
                    <h1 className="text-sm font-normal border-b-2  border-gray-600">
                        หน้าหลัก
                    </h1>
                    <div className="border  p-1 mt-2 rounded-2xl ">
                        <Carousel />
                        <Mockup />
                    </div>
                    <div className="border p-1 mt-2 rounded-2xl ">
                        <News />
                    </div>
                    <div className="border p-1 mt-2 rounded-2xl ">
                        <News1 />
                    </div>
                </div>

                {/* Second Section */}
                <div className="flex flex-col items-center mt-10 mx-auto">
                    {/* ปุ่ม */}
                    <div className="flex items-center overflow-auto justify-center max-w-4xl mt-2">
                        <ButtonComponent />
                    </div>
                    {/* Mockup */}
                    <div className="flex items-center overflow-auto justify-center max-w-4xl mt-4">
                        <MockupComponent />
                    </div>
                </div>


            </div>
        </section>


    )
}

export default HomePage