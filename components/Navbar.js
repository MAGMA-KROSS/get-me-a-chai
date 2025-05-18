"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import { useState, useEffect, useRef } from "react"

function Navbar() {
    const [IsOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handler = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);
    const { data: session } = useSession()
    if (session) {
        return (
            <>
                <header className="text-gray-400 bg-black body-font">
                    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                        <Link href="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                            <span><img src="/coffee-emoji.gif" width={34} alt="" /></span>
                            <span className="ml-3 cursor-pointer text-xl font-bold">GetMeAChai</span>
                        </Link>
                        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                            <Link href="/" className="mr-5 cursor-pointer hover:text-white">Home</Link>
                            <Link href="/about" className="mr-5 cursor-pointer hover:text-white">About</Link>
                            <Link href="/projects" className="mr-5 cursor-pointer hover:text-white">Projects</Link>
                            <div className="relative" ref={menuRef}>
                                <button
                                    id="dropdownDefaultButton"
                                    onClick={() => setIsOpen(!IsOpen)}
                                    className="text-white bg-gradient-to-br py-3 px-6 font-bold from-purple-600 to-blue-500 hover:bg-gradient-to-bl duration-300 rounded-lg text-sm text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700"
                                    type="button"
                                >
                                    {session.user.name}
                                    <svg
                                        className="w-2.5 h-2.5 ms-3"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 10 6"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 1 4 4 4-4"
                                        />
                                    </svg>
                                </button>

                                <div
                                    id="dropdown"
                                    className={`z-10 ${IsOpen ? "" : "hidden"
                                        } bg-white divide-y divide-gray-100 rounded-lg absolute shadow-sm w-44 dark:bg-gray-800`}
                                >
                                    <ul
                                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                        aria-labelledby="dropdownDefaultButton"
                                    >
                                        <li>
                                            <Link
                                                href="/settings"
                                                onClick={() => setIsOpen(false)}
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Settings
                                            </Link>
                                        </li>
                                        
                                        <li>
                                            <Link
                                                href={`/${session.user.name}`}
                                                onClick={() => setIsOpen(false)}
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Your Page
                                            </Link>
                                        </li>
                                        <li>
                                            <button
                                                onClick={() => signOut()}
                                                className="block text-start w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-red-500"
                                            >
                                                Sign out
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
            </>
        )
    }
    return (
        <header className="text-gray-400 bg-black body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    <span><img src="/coffee-emoji.gif" width={34} alt="" /></span>
                    <span className="ml-3 cursor-pointer text-xl font-bold">GetMeAChai</span>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link href="/" className="mr-5 cursor-pointer hover:text-white">Home</Link>
                    <Link href="/about" className="mr-5 cursor-pointer hover:text-white">About</Link>
                    <Link href="/projects" className="mr-5 cursor-pointer hover:text-white">Projects</Link>
                    <Link href="/login" className="mr-3 cursor-pointer hover:bg-white bg-gray-200 py-2 text-black rounded-full px-6">Login</Link>
                    <Link href="/signup" className="mr-5 text-white bg-gradient-to-br py-2 px-5 from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-full cursor-pointer text-center">Signup</Link>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
