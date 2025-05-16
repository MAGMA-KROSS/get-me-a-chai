
'use client'
import { useSession, signIn, signOut } from "next-auth/react"
import React from 'react'
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import Link from "next/link";
import { useRouter } from "next/navigation";

function Login() {
    const { data: session } = useSession()
    if(session){
        const router = useRouter();
        router.push('/')
    }
    return (

        <section className="">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-[90vh] lg:py-0">
                
                <div style={{boxShadow: '0 0 10px #ffffff'}} className="w-full  rounded-lg  border md:mt-0 sm:max-w-md xl:p-0 border-gray-400">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl cursor-default font-bold leading-tight tracking-tight md:text-2xl text-white">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className=" border   rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-200 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@company.com"
                                    
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="border   rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-200 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 dark:focus:border-blue-500"
                                    
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="remember"
                                            aria-describedby="remember"
                                            type="checkbox"
                                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                            
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">
                                            Show Password
                                        </label>
                                    </div>
                                </div>
                                <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                                    Forgot password?
                                </a>
                            </div>
                            <button type="submit" class="text-white bg-gradient-to-br w-full py-3 px-6 font-bold hover:scale-105  from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 duration-300  rounded-lg text-lg cursor-pointer text-center me-2 mb-2">Login</button>
                            <p className="text-sm font-light text-gray-500 cursor-default dark:text-gray-400">
                                Don’t have an account yet?{" "}
                                <Link href="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                    Sign up
                                </Link>
                            </p>
                            <div className="flex flex-col gap-4 w-full max-w-sm mx-auto">
                                {/* Google Button */}
                                <button
                                    onClick={() => console.log('Google login')}
                                    className="flex items-center justify-center gap-3 cursor-pointer px-4 py-2 border rounded-lg bg-gray-100 hover:bg-gray-400 transition"
                                >
                                    <FcGoogle size={24} />
                                    <span className="font-medium text-sm">Continue with Google</span>
                                </button>

                                {/* GitHub Button */}
                                <button
                                    onClick={() => {signIn('github')}}
                                    className="flex items-center justify-center gap-3 cursor-pointer px-4 py-2 border bg-gray-100 rounded-lg hover:bg-gray-400 transition"
                                >
                                    <FaGithub size={24} />
                                    <span className="font-medium text-sm">Continue with GitHub</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Login
