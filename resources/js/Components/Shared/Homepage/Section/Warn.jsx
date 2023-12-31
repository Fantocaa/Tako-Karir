import React from "react";

const Warn = () => {
    return (
        <section className=" bg-RedTako font-inter text-white py-16">
            <div className="container mx-auto px-4 md:px-8 xl:px-16 py-16">
                <div className="flex gap-4 items-center">
                    <div className="md:w-1/2 pb-8 md:pt-8">
                        <p className="hidden lg:block">WARNING!!!</p>
                        <h1 className="text-center md:text-left font-bold text-4xl pb-4 lg:pt-4">
                            HATI-HATI PENIPUAN !!!
                        </h1>
                        <p className="text-center md:text-left">
                            Hati-hati terhadap penipuan perekrutan yang
                            mengatasnamakan
                            <span className="font-bold">
                                {" "}
                                PT. TAKO ANUGERAH KOPORASI
                            </span>
                            . Kami sangat memprioritaskan keamanan dan
                            integritas dalam proses perekrutan kami, oleh karena
                            itu, pastikan untuk selalu memverifikasi sumber
                            informasi rekrutmen sebelum mengambil langkah
                            selanjutnya.
                        </p>
                    </div>
                    <div className="hidden md:block md:w-1/2">
                        <img src="/images/icon/5.svg" alt="" />
                    </div>
                </div>
                <div className="flex justify-center relative">
                    <div className="bg-white rounded-2xl text-DarkTako p-8 md:flex md:flex-wrap md:gap-4 md:justify-between md:absolute shadow-md items-center">
                        <div className="flex flex-col items-center justify-center text-center md:w-[48%] lg:w-[20%]">
                            <img src="/images/icon/1.svg" alt="" />
                            <h1 className="pt-4 pb-2 font-bold text-2xl lg:text-base">
                                Undangan Palsu
                            </h1>
                            <p className="lg:text-xs lg:text-opacity-75 text-DarkTako">
                                Waspadai pekerjaan yang mencurigakan yang
                                mengklaim berasal dari PT. Tako Anugerah
                                Koporasi.
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center pt-16 md:pt-0 md:w-[48%] lg:w-[20%]">
                            <img src="/images/icon/2.svg" alt="" />
                            <h1 className="pt-4 pb-2 font-bold text-2xl lg:text-base">
                                Saluran Resmi
                            </h1>
                            <p className="lg:text-xs lg:text-opacity-75 text-DarkTako">
                                Kami hanya memposting lowongan pekerjaan di
                                situs Glints, JobStreet, Indeed, & Web resmi
                                Karir kami.
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center pt-16 md:w-[48%] lg:w-[20%] lg:pt-0">
                            <img src="/images/icon/3.svg" alt="" />
                            <h1 className="pt-4 pb-2 font-bold text-2xl lg:text-base">
                                Tidak Ada Biaya
                            </h1>
                            <p className="lg:text-xs lg:text-opacity-75 text-DarkTako">
                                Kami dan Rekruter yang kami tunjuk tidak pernah
                                meminta pembayaran apa pun dari para kandidat.
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center pt-16 md:w-[48%] lg:w-[20%] lg:pt-0">
                            <img src="/images/icon/4.svg" alt="" />
                            <h1 className="pt-4 pb-2 font-bold text-2xl lg:text-base">
                                Harap Melapor
                            </h1>
                            <p className="lg:text-xs lg:text-opacity-75 text-DarkTako">
                                Jika rekruter menemui lowongan pekerjaan
                                mencurigakan harap laporkan ke email
                                recruitment@tako.co.id
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Warn;
