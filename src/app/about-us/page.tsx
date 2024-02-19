'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-5 md:px-10 mb-8">
                {/* Left Column: Image with Text Overlay */}
                <div className="relative md:col-span-1">
                    <Image
                        className="w-full h-full object-cover rounded-md"
                        width={1400}
                        height={1400}
                        src="/assets/hero-section-1.png"
                        alt="Left Image"
                    />
                    <div className="absolute bottom-0 left-0 p-5 lg:p-8 w-full h-full flex flex-col justify-end items-left text-white">
                        <h2 className="text-xl lg:text-3xl font-bold mb-1 md:mb-2">
                            Nanyang Express
                        </h2>
                        <p className="text-xs lg:text-lg mb-2 lg:mb-4 max-w-72 lg:max-w-md">
                            Discover flawless logistics solutions for your t-shirts, lanyards, and tote
                            bags
                        </p>
                        <Link href='/nanyang_express' className="bg-white text-xs text-center lg:text-sm text-black font-semibold rounded-md px-2 lg:px-4 py-1 lg:py-2 max-w-36 lg:max-w-44 shadow-md hover:text-white hover:bg-blue-950" passHref>
                            Shop Now
                        </Link>
                    </div>
                </div>

                {/* Right Column: Stacked Images with Text Overlays */}
                <div className="grid grid-cols-1 gap-4 md:grid-rows-2">
                    {/* Right Image 1 */}
                    <div className="relative md:col-span-1">
                        <Image
                            className="w-full h-full object-cover rounded-md"
                            width={1400}
                            height={1400}
                            src="/assets/hero-section-2.png"
                            alt="Nanyang Print"
                        />
                        <div className="absolute bottom-0 left-0 p-5 lg:p-8 w-full h-full flex flex-col justify-end items-left text-white">
                            <h2 className="text-xl lg:text-3xl font-bold mb-1 md:mb-2">
                                Nanyang Print
                            </h2>
                            <p className="text-xs lg:text-lg mb-2 lg:mb-4 max-w-72 lg:max-w-md">
                                Explore impeccable logistics solutions for your flyers and posters
                            </p>
                            <Link href='/nanyang_print' className="bg-white text-xs text-center lg:text-sm text-black font-semibold rounded-md px-2 lg:px-4 py-1 lg:py-2 max-w-36 lg:max-w-44 shadow-md hover:text-white hover:bg-blue-950" passHref>
                            Shop Now
                        </Link>
                        </div>
                    </div>

                    {/* Right Image 2 */}
                    <div className="relative md:col-span-1">
                        <Image
                            className="w-full h-full object-cover rounded-md"
                            width={1400}
                            height={1400}
                            src="/assets/hero-section-3.png"
                            alt="Nanyang Award"
                        />
                        <div className="absolute bottom-0 left-0 p-5 lg:p-8 w-full h-full flex flex-col justify-end items-left text-white">
                            <h2 className="text-xl lg:text-3xl font-bold mb-1 md:mb-2">
                                Nanyang Award
                            </h2>
                            <p className="text-xs lg:text-lg mb-2 lg:mb-4 max-w-72 lg:max-w-md">
                                Uncover top-tier logistics solutions for your metals and trophies
                            </p>
                            <Link href='/nanyang_award' className="bg-white text-xs text-center lg:text-sm text-black font-semibold rounded-md px-2 lg:px-4 py-1 lg:py-2 max-w-36 lg:max-w-44 shadow-md hover:text-white hover:bg-blue-950" passHref>
                                Shop Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}