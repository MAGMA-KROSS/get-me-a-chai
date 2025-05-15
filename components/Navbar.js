import React from 'react'

function Navbar() {
    return (
        <header class="text-gray-400 bg-black body-font">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    <span><img src="/coffee-emoji.gif" width={34} alt="" /></span>
                    <span class="ml-3 cursor-pointer text-xl font-bold">GetMeAChai</span>
                </a>
                <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a class="mr-5 cursor-pointer hover:text-white">Home</a>
                    <a class="mr-5 cursor-pointer hover:text-white">About</a>
                    <a class="mr-5 cursor-pointer hover:text-white">Projects</a>
                    <a class="mr-3 cursor-pointer hover:bg-white bg-gray-200 py-2 text-black rounded-full px-6">Login</a>
                    <a class="mr-5 text-white bg-gradient-to-br py-2 px-5  from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800  rounded-full cursor-pointer text-center ">Signup</a>
                    
                </nav>
                
            </div>
        </header>
    )
}

export default Navbar
