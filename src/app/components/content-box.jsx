import Image from "next/image"
import Logo from '../../../public/logo.png'



import Heading from "./heading"
import Text from "./text"
import SuggestionCard from './suggestion-card'
import Button from "./button"
import Input from './input'
import Message from './message'


{/*Images*/ }
import Burger from '../../../public/burger.png'
import Cash from '../../../public/cash.png'
import Building from '../../../public/building.png'
import Art from '../../../public/art.png'
import Help from '../../../public/help.png'




const details = [
    {
        path: Burger,
        title: 'Feeling Hungry',
        description: 'Let us pick our top reccomendations'
    },
    {
        path: Cash,
        title: 'Feeling Cheap',
        description: 'Let us pick our top reccomendations'
    },
    {
        path: Building,
        title: 'Stressed Out',
        description: 'Let us pick our top reccomendations'
    },
    {
        path: Art,
        title: 'Feeling Creative',
        description: 'Let us pick our top reccomendations'
    },
]

const ContentBox = () => {
    return (
        <div className="relative flex justify-center items-center flex-col ml-[10px] pb-[100px] pr-[20px]">




            <div className='w-full max-w-[896px] flex flex-col py-[50px] justify-center items-center  md:px-[10px]'>




                {/*----------------------------------------------------------*/}
                {/* <Image src={Logo} alt="logo" height="154" width="154" />

                <div className="flex flex-col gap-y-5 items-center px-[20px]">

                    <Heading text="Meet the Snag Bot " />

                    <Text content="Lorem ipsum dolor set amet consectetur adipsicing dolor set" customClass="text-center" />


                    <div className="flex flex-wrap gap-5 justify-center ">
                        <Button name="Create Account" customClass="h-[49px] w-[265px] bg-primary text-black font-bold" />
                        <Button name="Login" customClass="h-[49px] w-[265px] bg-black text-white font-light border border-white/30" />
                    </div>


                    <div className="flex flex-wrap gap-5 justify-center px-[10px] py-[50px]">
                        {
                            details.map((detail) => {
                                return <SuggestionCard imgPath={detail.path} title={detail.title} description={detail.description} />
                            })
                        }
                    </div>



                </div> */}

                {/*----------------------------------------------------------*/}


                {/*Messages*/}
                {/*----------------------------------------------------------*/}
                <div className="w-full h-full overflow-y-auto flex flex-col gap-y-2 md:gap-y-4 hide-scrollbar">
                    <Message sender="bot" message="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, veritatis iusto esse pariatur aut, expedita excepturi incidunt ad eius quaerat tenetur magnam enim alias voluptates velit exercitationem vel officia totam?" />

                    <Message sender="hassan" message="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, veritatis iusto esse pariatur aut, expedita excepturi incidunt ad eius quaerat tenetur magnam enim alias voluptates velit exercitationem vel officia totam?" />

                    <Message sender="bot" message="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, veritatis iusto esse pariatur aut, expedita excepturi incidunt ad eius quaerat " />

                    <Message sender="hassan" message="  Lorem ipsum dolor sit amet consectetur adipisicing elit. magnam enim alias voluptates velit exercitationem vel officia totam?" />
                    <Message sender="bot" message="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, veritatis iusto esse pariatur aut, expedita excepturi incidunt ad eius quaerat tenetur magnam enim alias voluptates velit exercitationem vel officia totam?" />

                    <Message sender="hassan" message="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, veritatis iusto esse pariatur aut, expedita excepturi incidunt ad eius quaerat tenetur magnam enim alias voluptates velit exercitationem vel officia totam?" />

                    <Message sender="bot" message="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, veritatis iusto esse pariatur aut, expedita excepturi incidunt ad eius quaerat " />

                    <Message sender="hassan" message="  Lorem ipsum dolor sit amet consectetur adipisicing elit. magnam enim alias voluptates velit exercitationem vel officia totam?" />
                </div>
                {/*----------------------------------------------------------*/}


            </div>
            <Input />




            <button className="bg-primary h-[45px] w-[45px] rounded-full border-none absolute right-5 bottom-5 text-black flex justify-center items-center">
                <Image alt="help-logo" src={Help} className="h-[32px] w-[31px]" />
            </button>

        </div>
    )
}

export default ContentBox
