"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation";

const Dashboard = () => {
    const { data: session } = useSession()
    if (!session) {
        const router = useRouter();
        router.push('/login')
    }
    return (
        <>
            <div className="flex flex-col items-center mt-23 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] min-h-screen">
                <h1 className="text-3xl font-bold mb-6 text-white">Welcome to Dashboard</h1>
                <form className="bg-black p-6 rounded-lg shadowutil text-white w-full max-w-md">
                    <div className="mb-4">
                        <label htmlFor="name" className="block  font-medium mb-2">Name:</label>
                        <input type="text" placeholder='ramesh' id="name" name="name" required className="w-full px-4 py-2 bg-gray-700 rounded-lg" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="username" className="block font-medium mb-2">Username:</label>
                        <input type="text" placeholder='ramu@123' id="username" name="username" required className="w-full px-4 py-2 bg-gray-700 rounded-lg" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="razorpayID" className="block  font-medium mb-2">Razorpay ID:</label>
                        <input type="text" placeholder='RazorPay ID' id="razorpayID" name="razorpayID" required className="w-full px-4 py-2 bg-gray-700 rounded-lg" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="razorpaySecret" className="block  font-medium mb-2">Razorpay Secret:</label>
                        <input type="text" placeholder='RazorPay Secret' id="razorpaySecret" name="razorpaySecret" required className="w-full px-4 py-2 bg-gray-700 rounded-lg" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block  font-medium mb-2">Email:</label>
                        <input type="email" placeholder='ramesh@132gmail.com' id="email" name="email" required className="w-full px-4 py-2 bg-gray-700 rounded-lg" />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Dashboard
