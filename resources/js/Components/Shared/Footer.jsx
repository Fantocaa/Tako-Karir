import React from "react";
import { Link } from "@inertiajs/react";

const Footer = () => {
    return (
        <footer className="bg-DarkTako text-white font-inter w-full z-50 py-8">
            <div className="container py-4 px-4 md:px-8 xl:px-16 mx-auto ">
                <div className="block md:flex justify-between items-center pb-12">
                    <div className="flex items-center gap-4">
                        <div className="">
                            <Link href="/">
                                <img
                                    src="/images/logo-footer.png"
                                    alt="Tako Logo"
                                    className="w-16 h-16"
                                />
                            </Link>
                        </div>
                        <div>
                            <h1 className="font-bold">
                                PT. TAKO ANUGERAH KOPORASI
                            </h1>
                            <h2>United For Success</h2>
                        </div>
                    </div>
                    <div className="flex gap-4 pt-6">
                        <Link href="https://www.instagram.com/tako.koporasi/">
                            <img src="/images/ig.svg" alt="" />
                        </Link>
                        <Link href="">
                            <img src="/images/fb.svg" alt="" />
                        </Link>
                        <Link href="">
                            <img src="/images/yt.svg" alt="" />
                        </Link>
                        <Link href="">
                            <img src="/images/x.svg" alt="" />
                        </Link>
                        <Link href="">
                            <img src="/images/linkedin.svg" alt="" />
                        </Link>
                    </div>
                </div>

                <div className="w-full h-1 bg-white rounded-2xl"></div>
                <div>
                    <h1 className="text-xs md:text-base text-center pt-12">
                        © 2023 PT. TAKO ANUGERAH KOPORASI, All Rights Reserved
                    </h1>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
