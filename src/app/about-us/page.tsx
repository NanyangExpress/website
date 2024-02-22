
import Image from 'next/image';

export default function AboutUs() {
    return (
        <>
            <style jsx global>{`
                    body {
                        background-color: black; 
                    }
                `}</style>
            <div className="container mx-auto my-5 px-8 bg-black rounded-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column: Title and Description */}
                    <div>
                        <h1 className="text-5xl font-bold mb-6 text-white mt-40">About Us</h1>
                        <p className="text-sm md:text-md lg:text-lg mb-4 text-white">
                            Nanyang XPress is a dynamic Singaporean venture leading the charge in AI-powered custom merchandise. We dare say that our catalog is a one stop destination for everything you need.
                        </p>
                        {/* <p className="text-sm md:text-md lg:text-lg mb-4">
                            Affordable. 
                        </p>
                        <p className="text-sm md:text-md lg:text-lg mb-4">
                            Innovation. 
                        </p>
                        <p className="text-sm md:text-md lg:text-lg mb-4">
                            Quality.
                        </p> */}
                    </div>

                    {/* Right Column: Image */}
                    <div className="relative h-64 md:h-auto mt-20">
                        <Image
                            className="w-full h-full object-cover rounded-md"
                            src="/assets/about-us-1.png"
                            alt="About Us Image"
                            width={700}
                            height={700}
                        />
                    </div>
                    {/* Mission Section */}
                    <div className="bg-[#b67D43] p-8 rounded-md mt-8">
                        <h2 className="text-5xl font-bold mb-0 text-center mt-2">Innovation</h2>
                        <p className="text-sm md:text-md lg:text-lg mb-4 text-center ">
                            Quality Goods that are Cost Savings                       
                        </p>
                    </div>

                    {/* Vision Section */}
                    <div className="bg-[#b67D43] p-8 rounded-md mt-8">
                        <h2 className="text-5xl font-bold mb-0 text-center mt-2">Customization</h2>
                        <p className="text-sm md:text-md lg:text-lg mb-4 text-center ">
                            Brand Your Own Merchandise                       
                        </p>
                    </div>
                </div>
                {/* Your Trusted Partner Section */}
                <div className="mt-8">
                    <h2 className="text-3xl font-bold mb-6">Your Trusted Partner</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Column 1 */}
                        <div>
                            <Image
                                className="w-full h-40 object-cover rounded-md"
                                src="/assets/partner-1.png"
                                width={300}
                                height={300}
                                alt="Partner 1"
                            ></Image>
                            <h3 className="text-xl font-bold my-4 text-white text-center">Transparency & Clarity</h3>
                            <p className="text-sm md:text-md lg:text-lg mb-4 text-white text-justify">
                                We provide detailed descriptions and specifications of the logistics items available, ensuring that you have all the necessary information to make an informed decision. Additionally, we are committed to providing transparent pricing, breaking down the costs involved and any applicable fees, so there are no surprises or hidden charges.
                            </p>
                        </div>

                        {/* Column 2 */}
                        <div>
                            <Image
                                className="w-full h-40 object-cover rounded-md"
                                src="/assets/partner-2.png"
                                alt="Partner 2"
                                width={700}
                                height={700}
                            />
                            <h3 className="text-xl font-bold my-4 text-white text-center">AI Focused</h3>
                            <p className="text-sm md:text-md lg:text-lg mb-4 text-white text-justify">
                                At Nanyang Express, we have established partnerships with suppliers and service providers while using AI to replace human labour, allowing us to offer items at cost prices.
                            </p>
                        </div>

                        {/* Column 3 */}
                        <div>
                            <Image
                                className="w-full h-40 object-cover rounded-md"
                                src="/assets/partner-3.png"
                                alt="Partner 3"
                                width={700}
                                height={700}
                            />
                            <h3 className="text-xl font-bold my-4 text-white text-center">Customised Solutions</h3>
                            {/* <p className="text-sm md:text-md lg:text-lg mb-4 text-white text-justify">
                                We understand that every event is unique, and that's why we offer customized logistics solutions. By tailoring our services to their needs, we ensure that clients only pay for what they need, eliminating unnecessary expenses and providing a hassle-free experience.
                            </p> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
