"use client"
import React, { useEffect, useState } from 'react'
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation";
import { fetchuser, updateprofile } from '@/actions/useraction';

const Dashboard = () => {
    const { data: session, update } = useSession()
    const router = useRouter();
    const [form, setForm] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [updateSuccess, setUpdateSuccess] = useState(false);

    useEffect(() => {
        if (!session) {
            router.push('/login');
            return;
        }
        
        getData();
    }, [session, router]);

    const handleChange = (e) => {
        setForm(prevForm => ({ ...prevForm, [e.target.name]: e.target.value }));
        if (updateSuccess) setUpdateSuccess(false);
    }

    const getData = async () => {
        try {
            setIsLoading(true);
            if (!session?.user?.name) return;
            
            const userData = await fetchuser(session.user.name);
            if (userData) {
                setForm(userData);
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        } finally {
            setIsLoading(false);
        }
    }

    const handleSubmit = async (e) => {
        try {
            if (!session?.user?.name) return;
            
            const result = await updateprofile(e, session.user.name);
            if (result) {
                await update();
                setUpdateSuccess(true);
                console.log("Profile updated successfully");
            }
        } catch (error) {
            console.error("Error updating profile:", error);
        }
    }

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
                <p className="mt-4 text-white">Loading profile...</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center py-12 px-4 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-white">Your Profile Dashboard</h1>
            
            {updateSuccess && (
                <div className="bg-green-500/20 border border-green-500 rounded-lg p-4 mb-6 w-full max-w-md">
                    <p className="text-green-300 text-center">Profile updated successfully!</p>
                </div>
            )}
            
            <form action={handleSubmit} className="bg-black/50 p-6 rounded-lg shadow-xl text-white w-full max-w-md border border-purple-500/30">
                <div className="mb-4">
                    <label htmlFor="name" className="block font-medium mb-2">Name:</label>
                    <input 
                        type="text" 
                        onChange={handleChange} 
                        value={form.name || ""} 
                        placeholder='Enter your name' 
                        id="name" 
                        name="name" 
                        required 
                        className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors" 
                    />
                </div>
                
                <div className="mb-4">
                    <label htmlFor="username" className="block font-medium mb-2">Username:</label>
                    <input 
                        type="text" 
                        onChange={handleChange} 
                        value={form.username || ""} 
                        placeholder='Enter your username' 
                        id="username" 
                        name="username" 
                        required 
                        className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors" 
                    />
                </div>
                
                <div className="mb-4">
                    <label htmlFor="razorpayID" className="block font-medium mb-2">Razorpay ID:</label>
                    <input 
                        type="text" 
                        onChange={handleChange} 
                        value={form.razorpayID || ""} 
                        placeholder='Enter your Razorpay ID' 
                        id="razorpayID" 
                        name="razorpayID" 
                        className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors" 
                    />
                </div>
                
                <div className="mb-6">
                    <label htmlFor="razorpaySecret" className="block font-medium mb-2">Razorpay Secret:</label>
                    <input 
                        type="password" 
                        onChange={handleChange} 
                        value={form.razorpaySecret || ""} 
                        placeholder='Enter your Razorpay Secret' 
                        id="razorpaySecret" 
                        name="razorpaySecret" 
                        className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors" 
                    />
                    <p className="text-xs text-gray-400 mt-1">This sensitive information is used to connect to your Razorpay account</p>
                </div>
                
                <button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 px-4 rounded-lg hover:from-purple-700 hover:to-blue-600 transition duration-300 font-medium flex items-center justify-center"
                >
                    Save Profile
                </button>
            </form>
        </div>
    )
}

export default Dashboard