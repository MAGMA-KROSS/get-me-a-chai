import React from 'react'

const Username = ({ params }) => {
  return (
    <>
      <div className=' [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]'>
        <img className='w-full ' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/18.gif?token-hash=iDr2Rv8l0aDGXCgF93qBpol_GMLbvNI8pScku_CFkmU%3D&token-time=1748995200" alt="" />
        <img className='rounded-full border-2 border-white relative left-[45%] top-[-75px]' src="https://i.pinimg.com/736x/45/f0/7b/45f07b3731e646bd3295642cafe4383e.jpg" width={200} alt="" />
        <div className="text-white my-0.5 text-center relative top-[-65px] text-4xl font-bold">
          @{params.username}
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
            <form action="">
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
                  required
                />
              </div>
              <div className='my-4'>
                <label className="block mb-2 text-sm font-medium text-white">
                  Your Message
                </label>
                <input
                  type="text"
                  name="Message"
                  id="Message"
                  className=" border   rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your Message"
                  required
                />
                <div className='my-4'>
                  <label className="block mb-2 text-sm font-medium text-white">
                    Chai <span className='text-gray-500'> (1 Chai = 10 Ruppee) </span>
                  </label>
                  <input
                    type="number"
                    name="Chai"
                    id="Chai"
                    min={1}
                    className=" border   rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    required
                  />
                </div>
                <button type="button" class="text-white w-full bg-gradient-to-br py-3 px-6 font-bold from-purple-900 to-blue-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 duration-300 rounded-lg text-lg cursor-pointer text-center me-2 mb-2">Pay</button>
              </div>
            </form>
            <div className="flex mt-5 gap-2">
              <button className="rounded-lg p-3 bg-gray-700 cursor-pointer hover:bg-gray-500 transition-colors duration-250">10 Chai</button>
              <button className="rounded-lg p-3 bg-gray-700 cursor-pointer hover:bg-gray-500 transition-colors duration-250">20 Chai</button>
              <button className="rounded-lg p-3 bg-gray-700 cursor-pointer hover:bg-gray-500 transition-colors duration-250">30 Chai</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Username
