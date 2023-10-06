import React from "react";
import Footer from "@/Components/Shared/Footer";
import HeaderPro from "@/Components/HeaderPro";
import NavElse from "@/Components/Shared/Else/NavElse";
import SelectJob from "@/Components/Shared/Job/SelectJob";

const Profesional = () => {
    return (
        <section>
            <NavElse />
            <HeaderPro />
            <div className="bg-BgTako text-DarkTako font-inter w-full py-16">
                <div className=" w-full py-16 px-4 md:px-8 lg:px-8 xl:px-24 2xl:px-16 container mx-auto">
                    <div className="container mx-auto justify-center">
                        <h1 className="text-center font-bold text-2xl">
                            Pekerjaan yang tersedia
                        </h1>
                        <p className="text-center pt-2">
                            Pilih sesuai dengan kriteria kamu
                        </p>
                    </div>
                    <div className="pt-8 md:grid grid-cols-2 gap-4">
                        <SelectJob />
                        <SelectJob />
                        <SelectJob />
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default Profesional;