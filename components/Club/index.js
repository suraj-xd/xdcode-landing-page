import Link from "next/link";

export default function Club() {
    return (
        <>
            <main className="sticky">
                <div className={`p-5 w-full sticky top-2 left-0 right-0 z-50`}>
                    <div className="backdrop-blur-lg bg-white bg-opacity-5 p-5 lg:px-8 px-4 rounded-2xl">
                        <div className='w-full m-auto flex justify-between items-center'>
                            {/* Logo */}
                            <div className='flex gap-x-2 group cursor-pointer justify-start items-center'>
                                <img className="h-10 w-12 p-1 hover:animate-pulse hover:rotate-[-90deg] hover:h-12 transition-all ease-in-out" src="logo2.png" />
                            </div>
                            <div className="flex justify-center items-center gap-5 monu text-white">
                                {/* <a href="#about" className="ripple hidden md:block  cursor-pointer px-2 py-2 rounded-md">About</a> */}
                                <Link href={"/rules"}>

                                    <h1 className="ripple cursor-pointer text-sm hidden md:block sm:text-base  px-2 py-2 rounded-md ">Rules</h1>
                                </Link>
                                <a href="https://forms.gle/vjS6yrbdoLu89uHA9" target={"_blank"} className="ripple -z-1 enter-app-btn btn btn-primary btn-gradient font-monument px-10 py-2 monu ">
                                    Join
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="">
                    <img className="intro-bg-vid w-[100vw] md:w-[60vw] hidden md:block" src="./globe.jpg" />
                    <img className="intro-bg-vid w-[60vw] md:w-[60vw] h-[38vh] rotate-[360deg] md:hidden block" src="./u.webp" />
                    <div className="row align-items-center justify-content-between">
                        <div className="col-xl-10">
                            <div className="text-white orbi mx-10 md:mx-20 my-10 flex justify-start items-start flex-col">
                                <div className="text-[2rem] comfort tracking-widest">

                                    <h1>eat.</h1>
                                    <h1>sleep.</h1>
                                </div>
                                <div className="w-32 h-[2px] bg-white my-5">       </div>
                                <h1 className="monu text-[4rem] md:text-[7rem] uppercase">XD Code</h1>
                                <h1 className="monu text-[2rem] text-white">Coding Club </h1>
                                <Link target={"_blank"} href={"http://srgoc.org/"}>
                                    <h1 className="cursor-pointer monu text-[2rem] text-[#9ca0d2]">SRCEM</h1>
                                </Link>
                                <div className="h-2 w-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full my-2"></div>
                                <div className="flex gap-3 mt-5 justify-start items-center">
                                    <a href="https://discord.gg/PuGhSpRdj9" target={"_blank"}>

                                        <img className="h-10 w-10 hover:scale-[1.08] hover:brightness-150" src="https://img.icons8.com/ios-filled/50/FFFFFF/discord--v1.png" />
                                    </a>
                                    {/* <a>
                                        <img className="h-8 w-8" src="https://img.icons8.com/ios-filled/50/7950F2/linkedin.png" />
                                    </a> */}
                                    <a href="https://www.instagram.com/xd.coders/" target={"_blank"}>
                                        <img className="h-9 w-9 hover:scale-[1.08] hover:brightness-150" src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/FFFFFF/external-instagram-social-media-tanah-basah-glyph-tanah-basah.png" />
                                    </a>
                                    <a href="https://www.linkedin.com/company/xdcode" target={"_blank"}>
                                        <img className="h-9 w-9 hover:scale-[1.08] hover:brightness-150" src="https://img.icons8.com/ios-filled/50/FFFFFF/linkedin--v1.png" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="about" className="w-[90%] h-full text-white comfort mx-5 sm:mx-10 md:mx-20 my-32">
                    <div className="">
                        <div className="w-20 h-[1px] bg-white my-2"></div>
                        <h1 className="monu text-gray-100  text-[2rem]">what are we?</h1>
                        <p className="mt-10 mb-5">We are coding club of Shri Ram College of Engg. & Management</p>
                    </div>
                    <p className="text-[#9ca0d2]">
                        XD Code is a coding club that teaches and mentors young coders. The club also organizes hackathons and other coding events. The club is open to small members who are very enthusiastic about coding. The club’s goal is to help young coders develop their skills and become proficient in coding. we also provide internship opportunities to the our fellow members.
                    </p>
                </div>

                <div className="w-[90%] h-full text-white comfort mx-5 sm:mx-10 md:mx-20 my-32">
                    <div className="">
                        <div className="w-20 h-[1px] bg-white my-2"></div>
                        <h1 className="monu text-gray-100  text-[2rem]">how can i join?</h1>
                    </div>
                    <p className="text-[#9ca0d2] py-10">
                        you can contact the club’s organizers and ask about membership. You can also check the club’s website or social media pages for more information about how to join
                    </p>

                    <a href="https://forms.gle/vjS6yrbdoLu89uHA9" target={"_blank"} className="ripple -z-1 enter-app-btn btn btn-primary btn-gradient font-monument px-10 py-2 monu ">
                        Join
                    </a>
                </div>
                <div className="w-[90%] h-full text-white comfort mx-5 sm:mx-10 md:mx-20 my-32">
                    <div className="">
                        <div className="w-20 h-[1px] bg-white my-2"></div>
                        <h1 className="monu text-gray-100  text-[2rem]">perks of being an XD Coder</h1>
                    </div>
                    <p className="text-[#9ca0d2] pt-10">
                        all the members of XD Coding Club gets guided throughout thier coding journey, whether it's interview preperation or a coding contest.
                    </p>
                    <p className="text-[#9ca0d2] pt-5">
                        all the latest buzz, new technologies, community calls, discussions, meetings makes your coding game better than the rest. we highly insist on getting better and better and learning along the way.
                        being a member of XD Code makes you eligible to all the important learning resources, sessions from MNC's Software Developers to guide you
                    </p>
                    <p className="text-gray-50 pt-5 monu">
                        and the cherry on the cake.
                    </p>

                    <p className="text-[#9ca0d2] pt-5">
                        all the XD Coding Club members gets these remarkable goodies  ✨
                    </p>
                    <div className="flex gap-10 my-10 justify-center flex-wrap    items-center">
                        <img className="bg-white  w-24 h-24 sm:w-32 sm:h-32 md:w-56 md:h-56 rounded-xl hover:scale-[1.03] transition-all ease-in-out" src="./14.png" />
                        <img className="bg-white rounded-xl w-24 h-24 sm:w-32 sm:h-32 md:w-56 md:h-56 hover:scale-[1.03] transition-all ease-in-out p-5" src="./12.png" />
                        <img className="bg-white rounded-xl w-24 h-24 sm:w-32 sm:h-32 md:w-56 md:h-56 hover:scale-[1.03] transition-all ease-in-out p-6  md:p-14" src="./13.png" />
                    </div>
                    <p className="text-center text-gray-50 pt-5 monu">
                        and more ....
                    </p>


                </div>
                <div className="w-[90%] h-full text-white comfort mx-5 sm:mx-10 md:mx-20 my-32">
                    <div className="">
                        <div className="w-20 h-[1px] bg-white my-2"></div>
                        <h1 className="monu text-gray-100  text-[2rem]">benifits of joining the coding club 🤔</h1>
                    </div>
                    <p className="text-gray-100 py-10 flex gap-3 justify-start items-center">
                        There are many benefits of joining a coding club, such as:
                    </p>

                    <p className="text-[#9ca0d2] py-1 flex gap-3 justify-start items-center">
                        <div className="w-3 h-[1px] bg-gray-200 rounded-full"></div>
                        Collaborating with others and learning from them.
                    </p>
                    <p className="text-[#9ca0d2] py-1 flex gap-3 justify-start items-center">
                        <div className="w-3 h-[1px] bg-gray-200 rounded-full"></div>
                        Teaching others what you know.
                    </p>
                    <p className="text-[#9ca0d2] py-1 flex gap-3 justify-start items-center">
                        <div className="w-3 h-[1px] bg-gray-200 rounded-full"></div>
                        Building soft skills such as social and communication skills, flexibility, and patience.
                    </p>
                    <p className="text-[#9ca0d2] py-1 flex gap-3 justify-start items-center">
                        <div className="w-3 h-[1px] bg-gray-200 rounded-full"></div>
                        Networking with students from other colleges.
                    </p>
                    <p className="text-[#9ca0d2] py-1 flex gap-3 justify-start items-center">
                        <div className="w-3 h-[1px] bg-gray-200 rounded-full"></div>
                        Referrals from alumni teams from big companies.
                    </p>
                    <p className="text-[#9ca0d2] py-1 flex gap-3 justify-start items-center">
                        <div className="w-3 h-[1px] bg-gray-200 rounded-full"></div>
                        Opportunities to participate in online contests
                    </p>
                </div>
                <div className="flex gap-5 my-5 justify-center items-center">
                    <div className="h-1 w-1 bg-white rounded-sm"></div>
                    <div className="h-1 w-1 bg-white rounded-sm"></div>
                    <div className="h-1 w-1 bg-white rounded-sm"></div>
                </div>
                <div className="w-[90%] h-full text-white comfort mx-5 sm:mx-10 md:mx-20 my-32">
                    <div className="">
                        <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full my-2"></div>
                        <h1 className="monu text-gray-100  text-[2rem]">#team</h1>
                    </div>

                    <div className="flexflex-col flex-wrap gap-5 justify-center sm:justify-start items-center">

                        <a href="https://www.linkedin.com/in/rahulsinghal01/" target={"_blank"}>
                            <div className="my-10 flex-row text-center flex flex-wrap md:justify-start justify-center items-center gap-6 relative ">

                                <img className="absolute hidden md:block w-10 h-10 -top-4 -left-4 rotate-[180deg] rounded-md z-[-1]" src="./u.webp" />
                                <div class="card rounded-xl overflow-hidden hover:scale-[1.1] transition-all ease-in-out">
                                    <img className=" w-full h-full object-cover" src="./rahul.jpeg" />
                                </div>
                                <div>

                                    {/* <div className="w-10 h-[1px] bg-white mt-4"></div> */}
                                    <h1 className="monu mt-2 text-blue-500 cursor-pointer">Rahul Singhal</h1>
                                    <h1 className="font-extrabold">Founder</h1>
                                    <h1 className="text-xs text-gray-300"> (Executive Officer, SRCEM)</h1>
                                </div>
                            </div>
                        </a>

                        <a target={"_blank"} href={"https://linktr.ee/surajxd"}>
                            <div className="my-10 text-center flex justify-center md:justify-start flex-wrap items-center flex-row gap-8 relative">
                                <img className="absolute hidden md:block w-10 h-10 -top-4 -left-4 rounded-md z-[-1]" src="./u.webp" />
                                <div class="card rounded-xl overflow-hidden hover:scale-[1.1] transition-all ease-in-out">
                                    <img className="w-full h-full object-cover" src="./suraj.jpg" />
                                </div>
                                <div>

                                    {/* <div className="w-10 h-[1px] bg-white mt-4"></div> */}
                                    <h1 className="monu mt-2 text-blue-500 cursor-pointer">Suraj Gaud</h1>
                                    <h1 className=" font-extrabold">Club Head</h1>
                                    <h1 className="text-xs text-gray-300"> ( Student, SRCEM )</h1>
                                </div>
                            </div>
                        </a>
                    </div>
                    {/* <div className="w-20 h-[1px] bg-white my-2"></div> */}
                    <div className=" mb-10">
                        <div className="w-20 h-[1px] bg-white mt-20 mb-2"></div>
                        <h1 className="monu text-blue-400  text-[1rem]">core members </h1>
                    </div>
                    <div>

                        <div className="flex flex-col justify-start text-[1.3rem] relative">
                            <img className="absolute w-20 h-20 left-[16rem] rounded-md z-[-1]" src="./u.webp" />
                            <Link target={"_blank"} href={"https://www.linkedin.com/in/akashtomarz"}>
                                <h1 className="monu mt-2 cursor-pointer">Akash Singh Tomar</h1>
                            </Link>

                            {/* <img className="absolute w-7 h-7 -top-1 -left-3 rounded-md z-[-1]" src="./u.webp"/> */}
                            <Link target={"_blank"} href={"https://www.linkedin.com/in/shubhanshu-saxena-902511230"}>
                                <h1 className="monu mt-2  cursor-pointer">Shubhanshu Saxena</h1>
                            </Link>
                        </div>
                    </div>

                </div>
                <div className="md:hidden block w-[90%] h-full text-white comfort mx-5 sm:mx-10 md:mx-20 my-32">
                    <div className="">
                        <div className="w-20 h-[1px] bg-white my-2"></div>
                        <h1 className="monu text-gray-100  text-[2rem]">Rules</h1>
                    </div>
                    <p className="text-gray-100 py-10 flex gap-3 justify-start items-center">
                        every member has to follow these rules and regulations for better workspace
                    </p>

                    
                        <p className="text-[#9ca0d2] py-1 flex gap-3 justify-start items-center">
                        <div className="w-3 h-[1px] bg-gray-200 rounded-full"></div>
                            Understand the club’s activities and goals.
                        </p>
                        <p className="text-[#9ca0d2] py-1 flex gap-3 justify-start items-center">
                        <div className="w-3 h-[1px] bg-gray-200 rounded-full"></div>
                            Must crarify the information before speading it into the community
                        </p>
                    
                        <p className="text-[#9ca0d2] py-1 flex gap-3 justify-start items-center">
                        <div className="w-3 h-[1px] bg-gray-200 rounded-full"></div>
                            Be aware of the club’s meeting schedule and location.
                        </p>
                    
                        <p className="text-[#9ca0d2] py-1 flex gap-3 justify-start items-center">
                        <div className="w-3 h-[1px] bg-gray-200 rounded-full"></div>
                            Be respectful to other members and their opinions.
                        </p>
                    
                        <p className="text-[#9ca0d2] py-1 flex gap-3 justify-start items-center">
                        <div className="w-3 h-[1px] bg-gray-200 rounded-full"></div>
                            Be willing to learn and help others learn.
                        </p>
                    
                        <p className="text-[#9ca0d2] py-1 flex gap-3 justify-start items-center">
                        <div className="w-3 h-[1px] bg-gray-200 rounded-full"></div>
                            Be open to feedback and constructive criticism
                        </p>
                </div>

            </main>
            <div className="w-full h-[1px] my-2 bg-gray-800"></div>
            <footer class="p-4 shadow md:px-6">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <a href="" class="flex items-center mb-4 sm:mb-0">
                        {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" /> */}
                        <span className="text-white font-extrabold monu text-4xl">XD<span className="text-gray-400 font-extrabold monu"> Code</span></span>
                    </a>
                    <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-300 sm:mb-0 dark:text-gray-400">
                        {/* <li>
                            <a href="https://www.linkedin.com/company/crackdsa/" class="mr-4 hover:underline md:mr-6 ">LinkedIn</a>
                        </li> */}
                        {/* <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li> */}
                        {/* <li>
                            <a href="https://wa.me/message/TPN76XLWVOWDB1" class="mr-4 hover:underline md:mr-6">Whatsapp</a>
                        </li> */}
                        <li>
                            <a href="mailto:unofficialartist3@gmail.com" class="comfort hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <span class="block text-sm text-white comfort sm:text-center dark:text-gray-400">©  <a href="https://crackdsa.com/" class="hover:underline">Coding Club 2023, SRCEM</a>. All Rights Reserved.
                </span>


            </footer>

        </>
    )
}