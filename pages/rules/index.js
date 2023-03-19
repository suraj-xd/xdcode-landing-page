import Link from "next/link";

export default function Club() {
    return (
        <>
            <main className="sticky">
                <div className={`p-5 w-full sticky top-2 left-0 right-0 z-50`}>
                    <div className="backdrop-blur-lg bg-white bg-opacity-5 p-5 lg:px-8 px-4 rounded-2xl">
                        <div className='w-full m-auto flex justify-between items-center'>
                            {/* Logo */}
                            <div className='flex gap-x-2 items-center'>
                                <Link href={"/"}>
                                <img className="cursor-pointer h-10 w-12" src="logo2.png" />
                                </Link>
                            </div>
                            <div className="flex justify-center items-center gap-5 monu text-white">
                                {/* <a href="#about" className="ripple hidden md:block  cursor-pointer px-2 py-2 rounded-md">About</a> */}
                                <a href="https://forms.gle/vjS6yrbdoLu89uHA9" target={"_blank"} className="ripple -z-1 enter-app-btn btn btn-primary btn-gradient font-monument px-10 py-2 monu ">
                                    Join
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-screen text-white comfort mx-10 md:mx-20 my-32">
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
            <footer class="p-4 shadow md:px-6 dark:bg-gray-900">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <a href="https://crackdsa.com/" class="flex items-center mb-4 sm:mb-0">
                        {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" /> */}
                        <span className="monu text-white font-extrabold  text-4xl">XD<span className="text-gray-400 font-extrabold monu"> Code</span></span>
                    </a>
                    <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-300 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="https://www.linkedin.com/company/crackdsa/" class="mr-4 hover:underline md:mr-6 ">LinkedIn</a>
                        </li>
                        {/* <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li> */}
                        <li>
                            <a href="https://wa.me/message/TPN76XLWVOWDB1" class="mr-4 hover:underline md:mr-6">Whatsapp</a>
                        </li>
                        <li>
                            <a href="mailto:helloss@crackdsa.com" class="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-gray-700 sm:mx-auto dark:border-gray-900 lg:my-8" />
                <span class="block text-sm text-gray-300 comfort sm:text-center dark:text-gray-400">©  <a href="https://crackdsa.com/" class="hover:underline">Coding Club, SRCEM</a>. All Rights Reserved.
                </span>


            </footer>

        </>
    )
}