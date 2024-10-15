"use client"

import { useEffect, useState } from "react";

import Image from "next/image";
import Logo from "../../../public/logo.png";
import PricingTag from "../../../public/pricing-tag.png";
import { X } from 'lucide-react';

const Sidebar = ({ isOpen, setIsOpen }) => {

    const [isGreater, setIsGreater] = useState(true); // Assume larger screen by default

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setIsGreater(false); // On small screens, don't show sidebar automatically
            } else {
                setIsGreater(true); // On large screens, always show sidebar
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Run on component mount to check initial screen size

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);



    return (
        <div className={`h-full min-h-screen w-[260px] bg-foreground p-[10px] pl-[30px] flex-col gap-y-[25px] shadow-sidebar fixed z-10 md:pt-[50px]
            ${isGreater ? 'flex' : ''} 
            ${!isGreater && isOpen ? 'flex' : 'hidden'}`}>

            {/* Sidebar close button for small screens */}
            {!isGreater && (
                <button className="absolute top-2 right-3" onClick={() => setIsOpen(false)}>
                    <X height={25} />
                </button>
            )}

            {/* Logo and name */}
            <span className="flex flex-row items-center w-auto md:hidden">
                <Image src={Logo} alt="logo" className="h-[52px] w-[52px]" />
                <p className="font-ginto text-[17px] font-bold leading-[18px] ml-2">SnagBot</p>
            </span>

            <span className="flex flex-row w-full leading-[19px]">
                <Image src={PricingTag} alt="pricing-tag" className="h-[19px] w-[19px] mr-2" />
                Explore Pricing
            </span>

            {/* Today's Items */}
            <span className="flex flex-col gap-y-[2px]">
                <span className="font-inter text-[14px] font-bold text-white">Today</span>
                <ul>
                    <li className="font-inter text-[14px] font-medium text-white/80 my-2 fade-out-text">Best Taco near me on budget</li>
                    <li className="font-inter text-[14px] font-medium text-white/80 my-2 fade-out-text">Best Taco near me on budget</li>
                    <li className="font-inter text-[14px] font-medium text-white/80 my-2 fade-out-text">Best Taco near me on budget</li>
                    <li className="font-inter text-[14px] font-medium text-white/80 my-2 fade-out-text">Best Taco near me on budget</li>
                </ul>
            </span>

            {/* Yesterday's Items */}
            <span className="flex flex-col gap-y-[2px]">
                <span className="font-inter text-[14px] font-bold text-white">Yesterday</span>
                <ul>
                    <li className="font-inter text-[14px] font-medium text-white/80 my-2 fade-out-text">Best Taco near me on budget</li>
                    <li className="font-inter text-[14px] font-medium text-white/80 my-2 fade-out-text">Best Taco near me on budget</li>
                </ul>
            </span>
        </div>
    );
};

export default Sidebar;
