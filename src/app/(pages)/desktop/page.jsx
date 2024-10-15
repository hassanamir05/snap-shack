"use client";

import React, { useState } from "react";
import Sidebar from "../../components/sidebar";
import Header from "../../components/header";
import ContentBox from "../../components/content-box";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-row">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className={`flex flex-col w-full ml-[260px] md:ml-0 transition-all duration-300`}>
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        <ContentBox />
      </div>
    </div>
  );
};

export default Page;
