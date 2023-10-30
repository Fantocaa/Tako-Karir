import React, { useState, useEffect } from "react";
import "../../../css/style.css";
import ImageModal from "./ImageModal";
import { Link } from "@inertiajs/react";
import aos from "aos";
import "aos/dist/aos.css";

const Why = () => {
    // const [selectedImage, setSelectedImage] = useState(null);

    // const openModal = (imageSrc) => {
    //     setSelectedImage(imageSrc);
    // };

    // const closeModal = () => {
    //     setSelectedImage(null);
    // };

    useEffect(() => {
        aos.init({
            duration: 1000, // Durasi animasi dalam milidetik
        });
    }, []);

    return (
        <div className="pt-16 md:pt-16 container mx-auto px-4 md:px-8 lg:px-16">
            <div
                className="bg-BlueTako py-16 lg:py-8 flex text-white flex-wrap relative rounded-2xl"
                data-aos="fade-in"
            >
                <img
                    src="/images/bg.jpg"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    style={{
                        opacity: "0.1", // Sesuaikan tingkat opacity sesuai keinginan Anda
                    }}
                />
                {/* <div
                    className="absolute inset-0 w-full h-full object-fill rounded-2xl"
                    style={{
                        backgroundImage: 'url("/images/bg.jpg")',
                        opacity: "0.1", // Sesuaikan tingkat opacity sesuai keinginan Anda
                    }}
                /> */}

                <div className="absolute inset-0 bg-blue-900 opacity-20" />

                <div className="lg:w-full lg:flex items-center">
                    <div className="w-full px-4 md:px-8 text-center relative z-10 lg:w-1/2 md:text-left">
                        <h1 className="font-bold text-3xl">
                            Mengapa harus memilih Tako?
                        </h1>
                        <p className="py-8">
                            Kami di Tako Group sangat mendukung pengembangan
                            talenta muda, namun kami juga membuka peluang bagi
                            individu yang memiliki jiwa kepemimpinan dan
                            pengalaman. Bergabunglah dengan kami untuk memulai
                            perjalanan karier yang penuh potensi!
                        </p>

                        <Link>
                            <span className="underline">
                                Lihat Selengkapnya
                            </span>
                        </Link>
                    </div>
                    <div className="w-full flex mx-auto justify-center px-4 md:px-8 pt-8 lg:w-1/2">
                        {/* <ImageModal /> */}
                        <div className="hidden md:grid grid-cols-3 gap-4 z-10  ">
                            <div className="col-span-2 overflow-hidden rounded-xl">
                                <img
                                    src="/images/image-5.png"
                                    className="w-full rounded-xl object-cover h-full hover:scale-105 transition-all duration-500"
                                    alt="Tailwind CSS Carousel component"
                                />
                            </div>
                            <div className="overflow-hidden rounded-xl">
                                <img
                                    src="/images/image-6.png"
                                    className="w-full rounded-xl object-cover h-full hover:scale-105 transition-all duration-500"
                                    alt="Tailwind CSS Carousel component"
                                />
                            </div>
                            <div className="overflow-hidden rounded-xl">
                                <img
                                    src="/images/image-8.png"
                                    className="w-full rounded-xl object-cover h-full hover:scale-105 transition-all duration-500"
                                    alt="Tailwind CSS Carousel component"
                                />
                            </div>
                            <div className="col-span-2 overflow-hidden rounded-xl">
                                <img
                                    src="/images/image-7.png"
                                    className="w-full rounded-xl object-cover h-full hover:scale-105 transition-all duration-500"
                                    alt="Tailwind CSS Carousel component"
                                />
                            </div>
                        </div>
                        <div className="carousel rounded-box md:hidden">
                            <div className="carousel-item w-full">
                                <img
                                    src="/images/image-1.jpg"
                                    className="w-full "
                                    alt="Tailwind CSS Carousel component"
                                />
                            </div>
                            <div className="carousel-item w-full">
                                <img
                                    src="/images/image-2.jpg"
                                    className="w-full"
                                    alt="Tailwind CSS Carousel component"
                                />
                            </div>
                            <div className="carousel-item w-full">
                                <img
                                    src="/images/image-3.jpg"
                                    className="w-full"
                                    alt="Tailwind CSS Carousel component"
                                />
                            </div>
                            <div className="carousel-item w-full">
                                <img
                                    src="/images/image-4.jpg"
                                    className="w-full"
                                    alt="Tailwind CSS Carousel component"
                                />
                            </div>
                            <div className="carousel-item w-full">
                                <img
                                    src="/images/image-5.jpg"
                                    className="w-full"
                                    alt="Tailwind CSS Carousel component"
                                />
                            </div>
                            <div className="carousel-item w-full">
                                <img
                                    src="/images/image-6.jpg"
                                    className="w-full"
                                    alt="Tailwind CSS Carousel component"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* {selectedImage && (
                <div className="modal">
                    <div className="modal-content">
                        <img src={selectedImage} alt="Modal Image" />
                        <button onClick={closeModal}>Tutup</button>
                    </div>
                </div>
            )} */}
        </div>
    );
};

export default Why;
