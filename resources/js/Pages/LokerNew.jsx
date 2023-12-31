import React, { useState, useEffect } from "react";
import Layout from "@/Layouts/Layout";
import Footer from "@/Components/Shared/Footer";
import NavElse from "@/Components/Shared/Else/NavElse";
import PerusahaanCard from "@/Components/Loker/PerusahaanCard";

const LokerNew = () => {
    // Gunakan useState dan useEffect untuk memuat tampilan Blade
    // Anda dapat menggunakan metode fetch() atau Axios untuk mengambil tampilan Blade dari server.
    const [bladeView, setBladeView] = useState(null);

    useEffect(() => {
        // Lakukan permintaan ke server untuk mendapatkan tampilan Blade
        fetch("/lowongan_kerja") // Ganti dengan rute yang sesuai
            .then((response) => response.text())
            .then((data) => setBladeView(data));
    }, []);
    return (
        <Layout pageTitle="Lowongan Pekerjaan | Tako Karir">
            <section className="bg-BgTako font-inter text-DarkTako md:pt-16">
                <NavElse />
                {/* <div className="flex mx-auto px-4 md:px-8 xl:px-16 pt-24 lg:pt-16 pb-16 md:py-8 flex-wrap items-center text-white">
                    <div className="text-center container mx-auto"> */}
                <div dangerouslySetInnerHTML={{ __html: bladeView }} />
                {/* <div className="w-full">
                            <h1 className="font-semibold text-2xl">
                                Temukan Lowongan Berdasarkan Perusahaan
                            </h1>
                            <p className="pt-4">
                                Lebih mudah daripada mencari satu per satu,
                                Jelajahi Peluang Karir yang Tepat untukmu,
                                Temukan Lowongan Kerja yang Sesuai dengan
                                Perusahaan Impianmu!
                            </p>
                        </div>
                        <div className="carousel w-full pt-8">
                            <div
                                id="item1"
                                className="carousel-item w-full grid md:grid-cols-2 lg:grid-cols-4 gap-4"
                            >
                                <PerusahaanCard />
                                <PerusahaanCard />
                                <PerusahaanCard />
                                <PerusahaanCard />
                                <PerusahaanCard />
                                <PerusahaanCard />
                                <PerusahaanCard />
                                <PerusahaanCard />
                            </div>
                            <div
                                id="item2"
                                className="carousel-item w-full grid md:grid-cols-2 lg:grid-cols-4 gap-4"
                            >
                                <PerusahaanCard />
                                <PerusahaanCard />
                                <PerusahaanCard />
                                <PerusahaanCard />
                                <PerusahaanCard />
                                <PerusahaanCard />
                                <PerusahaanCard />
                                <PerusahaanCard />
                            </div>
                            <div
                                id="item3"
                                className="carousel-item w-full grid md:grid-cols-2 lg:grid-cols-4 gap-4"
                            >
                                <PerusahaanCard />
                                <PerusahaanCard />
                                <PerusahaanCard />
                                <PerusahaanCard />
                                <PerusahaanCard />
                                <PerusahaanCard />
                                <PerusahaanCard />
                                <PerusahaanCard />
                            </div>
                            <div
                                id="item4"
                                className="carousel-item w-full grid md:grid-cols-2 lg:grid-cols-4 gap-4"
                            >
                                <PerusahaanCard />
                                <PerusahaanCard />
                                <PerusahaanCard />
                                <PerusahaanCard />
                                <PerusahaanCard />
                                <PerusahaanCard />
                                <PerusahaanCard />
                                <PerusahaanCard />
                            </div>
                        </div>
                        <div className="flex justify-center w-full py-2 gap-2 pt-8">
                            <a href="#item1" className="btn btn-xs">
                                1
                            </a>
                            <a href="#item2" className="btn btn-xs">
                                2
                            </a>
                            <a href="#item3" className="btn btn-xs">
                                3
                            </a>
                            <a href="#item4" className="btn btn-xs">
                                4
                            </a>
                        </div> */}
                {/* </div>
                </div> */}
                <Footer />
            </section>
        </Layout>
    );
};

export default LokerNew;
