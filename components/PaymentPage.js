"use client"
import React, { useState } from 'react'
import Script from 'next/script'
import { initiate } from '@/actions/useraction'
import { useSession } from 'next-auth/react'
const PaymentPage = ({ username }) => {
    const [paymentform, setPaymentform] = useState({
        name: "",
        message: "",
        amount: ""
    });

    const handlechange = (e) => {
        setPaymentform({ ...paymentform, [e.target.name]: e.target.value });
    }
    const pay = async (amount) => {
        let a = await initiate(amount, username, paymentform)
        let orderID = a.id
        var options = {

            "key": process.env.NEXT_PUBLIC_RAZOR_KEY, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Get Me A Chai", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderID, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": "http://localhost:3000/api/razorpay",
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };

        var rzp1 = new Razorpay(options);
        rzp1.open();

    }
    return (
        <>
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

            <div className=' [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]'>
                <img className='w-full ' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/18.gif?token-hash=iDr2Rv8l0aDGXCgF93qBpol_GMLbvNI8pScku_CFkmU%3D&token-time=1748995200" alt="" />
                <img className='rounded-full border-2 border-white relative left-[45%] top-[-75px]' src="https://i.pinimg.com/736x/45/f0/7b/45f07b3731e646bd3295642cafe4383e.jpg" width={200} alt="" />
                <div className="text-white my-0.5 text-center relative top-[-65px] text-4xl font-bold">
                    @{username}
                    <div className="text-sm my-0.5 text-gray-500 font-medium">Creating Animated art for VTT's
                    </div>
                    <div className="text-sm my-0.5 text-gray-500 font-medium">
                        18,053 members . 98 Posts . $17,670/release</div>
                </div>
                <div className="container mx-auto justify-center mb-6 flex gap-10">
                    <div className="w-[50%] bg-black text-white px-18 shadowutil py-12 rounded-2xl ">
                        <div className="text-4xl font-extrabold">Supporters</div>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-1 mt-4 mx-6 text-xl">
                                <span><img className='rounded-full mr-1 border-1 border-white' width={34} src="/pro.svg" alt="" /></span><span>Abi donated</span><span>100 Chai</span><span>with a message</span><span>"I support you bro"</span>
                            </div>
                            <div className="flex items-center gap-1 mt-4 mx-6 text-xl">
                                <span><img className='rounded-full mr-1 border-1 border-white' width={34} src="/pro.svg" alt="" /></span><span>Abi donated</span><span>100 Chai</span><span>with a message</span><span>"I support you bro"</span>
                            </div>
                            <div className="flex items-center gap-1 mt-4 mx-6 text-xl">
                                <span><img className='rounded-full mr-1 border-1 border-white' width={34} src="/pro.svg" alt="" /></span><span>Abi donated</span><span>100 Chai</span><span>with a message</span><span>"I support you bro"</span>
                            </div>
                            <div className="flex items-center gap-1 mt-4 mx-6 text-xl">
                                <span><img className='rounded-full mr-1 border-1 border-white' width={34} src="/pro.svg" alt="" /></span><span>Abi donated</span><span>100 Chai</span><span>with a message</span><span>"I support you bro"</span>
                            </div>
                            <div className="flex items-center gap-1 mt-4 mx-6 text-xl">
                                <span><img className='rounded-full mr-1 border-1 border-white' width={34} src="/pro.svg" alt="" /></span><span>Abi donated</span><span>100 Chai</span><span>with a message</span><span>"I support you bro"</span>
                            </div>
                            <div className="flex items-center gap-1 mt-4 mx-6 text-xl">
                                <span><img className='rounded-full mr-1 border-1 border-white' width={34} src="/pro.svg" alt="" /></span><span>Abi donated</span><span>100 Chai</span><span>with a message</span><span>"I support you bro"</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-[50%] bg-black text-white px-18 shadowutil py-12 rounded-2xl ">
                        <div className="text-4xl font-extrabold">Show some support</div>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault(); // prevent full page reload
                                if (!paymentform.name || !paymentform.message || !paymentform.amount) {
                                    alert("Please fill all the fields");
                                    return;
                                }
                                pay(paymentform.amount * 1000);
                            }}
                        >
                            <div className='my-4'>
                                <label className="block mb-2 text-sm font-medium text-white">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className=" border   rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Ramesh"
                                    onChange={handlechange}
                                    value={paymentform.name}
                                    required
                                />
                            </div>
                            <div className='my-4'>
                                <label className="block mb-2 text-sm font-medium text-white">
                                    Your Message
                                </label>
                                <input
                                    type="text"
                                    name="message"
                                    id="message"
                                    className=" border   rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Your Message"
                                    onChange={handlechange}
                                    value={paymentform.message}
                                    required
                                />
                                <div className='my-4'>
                                    <label className="block mb-2 text-sm font-medium text-white">
                                        Chai <span className='text-gray-500'> (1 Chai = 10 Ruppee) </span>
                                    </label>
                                    <input
                                        type="number"
                                        name="amount"
                                        id="amount"
                                        min={1}
                                        className=" border   rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder=""
                                        onChange={handlechange}
                                        value={paymentform.amount}
                                        required
                                    />
                                </div>
                                <button type="submit" id="rzp-button1" class="text-white w-full bg-gradient-to-br py-3 px-6 font-bold from-purple-900 to-blue-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 duration-300 rounded-lg text-lg cursor-pointer text-center me-2 mb-2">Pay</button>
                            </div>
                        </form>
                        <div className="flex mt-5 gap-2">
                            <button onClick={() => pay(10000)} className="rounded-lg p-3 bg-gray-700 cursor-pointer hover:bg-gray-500 transition-colors duration-250">10 Chai</button>
                            <button onClick={() => pay(20000)} className="rounded-lg p-3 bg-gray-700 cursor-pointer hover:bg-gray-500 transition-colors duration-250">20 Chai</button>
                            <button onClick={() => pay(30000)} className="rounded-lg p-3 bg-gray-700 cursor-pointer hover:bg-gray-500 transition-colors duration-250">30 Chai</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentPage
