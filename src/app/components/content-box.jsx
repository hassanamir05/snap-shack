import Image from "next/image"
import { useState } from "react"

{/*Components */ }
import Logo from '../../../public/logo.png'
import Heading from "./heading"
import Text from "./text"
import SuggestionCard from './suggestion-card'
import Button from "./button"
import Input from './input'
import Message from './message'
import Help from '../../../public/help.png'
import Modal from "./modal"
import LoginPage from "./login"
import SignupPage from "./signup"


{/*Images */ }
import Burger from '../../../public/burger.png'
import Art from '../../../public/art.png'
import Cash from '../../../public/cash.png'
import Building from '../../../public/building.png'



import axios from 'axios';
import { useSelector } from 'react-redux';
import { useEffect, useState } from "react"
import { useDispatch } from 'react-redux'
import { fetchEmail } from '../lib/actions/user';

const details = [
    {
        path: Burger,
        title: 'Feeling Hungry',
        description: 'Let us pick our top recommendations'
    },
    {
        path: Cash,
        title: 'Feeling Cheap',
        description: 'Let us pick our top recommendations'
    },
    {
        path: Building,
        title: 'Stressed Out',
        description: 'Let us pick our top recommendations'
    },
    {
        path: Art,
        title: 'Feeling Creative',
        description: 'Let us pick our top recommendations'
    },
]

const ContentBox = () => {
    return (
        <div className="h-screen flex flex-col hide-scrollbar">
            <div className="flex-grow overflow-hidden hide-scrollbar">
                <div className="h-full overflow-y-auto pb-24 hide-scrollbar">
                    <div className='w-full max-w-[1040px] mx-auto flex flex-col py-[50px] justify-center items-center md:px-[10px] hide-scrollbar md:py-0'>
                        {
                            user ? <>
                            </>
                                :
                                <>
                                    <Image src={Logo} alt="logo" height={154} width={154} />

                                    <div className="flex flex-col gap-y-5 items-center px-[20px]">
                                        <Heading text="Meet the Snag Bot " />
                                        <Text content="Lorem ipsum dolor set amet consectetur adipsicing dolor set" customClass="text-center" />

                            <div className="flex flex-wrap gap-5 justify-center ">
                                <Button name="Create Account" customClass="h-[49px] w-[265px] bg-primary text-black font-bold" />
                                <Button name="Login" customClass="h-[49px] w-[265px] bg-black text-white font-light border border-white/30" />
                            </div>

                        <div className="flex flex-wrap gap-5 md:gap-3 justify-center px-[10px] py-[50px] md:py-[20px]">
                            {details.map((detail, index) => (
                                <SuggestionCard key={index} imgPath={detail.path} title={detail.title} description={detail.description} />
                            ))}
                        </div>
                        <div className="w-full hide-scrollbar">
                            <div className="w-full flex flex-col gap-y-2 md:gap-y-4">
                                {
                                    messages.map((value)=>(
                                        <Message sender={value.role} message={value.msg} />
                                    ))
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex h-[100px] items-center justify-center bg-black fixed bottom-0 w-[80%] md:w-full  px-[30px] ">
                <Input 
                value={inputValue}
                onChange={handleInputChange}
                onSubmit={onSubmit}
                />
            </div>



            <button className="fixed right-5 bottom-20 bg-primary h-[45px] w-[45px] rounded-full border-none text-black flex justify-center items-center md:hidden">
                <Image alt="help-logo" src={Help} className="h-[32px] w-[31px]" />
            </button>

            {/*Login/Signup Modal */}
            {isModalOpen && (
                <Modal onClose={toggleModal}>
                    {showForm === 'login' ?
                        <LoginPage closeModal={toggleModal} changeForm={setShowForm} /> : <SignupPage closeModal={toggleModal} changeForm={setShowForm} />
                    }
                </Modal>
            )}
        </div>
    )
}

export default ContentBox