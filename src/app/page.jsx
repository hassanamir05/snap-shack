"use client";

import React, { useState } from "react";
import Sidebar from "./components/sidebar.jsx";
import Header from "./components/header.jsx";
import ContentBox from "./components/content-box.jsx";
import Navbar from "@/app/components/navbar.jsx";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-row hide-scrollbar">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className={`flex flex-col w-full ml-[260px] md:ml-0 transition-all duration-300 hide-scrollbar`}>
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        <ContentBox />
      </div>
    </div>
  );
};

export default Page;
