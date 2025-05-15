export default function Home() {
  return (
    <div className="h-[91.5vh]">
      <div className="flex flex-col items-center justify-center h-[45vh] text-center">
        <h1 className="text-white text-6xl font-bold mb-6 gap-2 flex items-center cursor-default">Support My Chai Journey <span><img src="/coffee-emoji.gif" width={74} alt="" /></span></h1>
        <p className="text-gray-400 mb-8 max-w-2xl text-lg cursor-default">
          If you enjoy someones work and want to support them, you can do so by
          donating to them. This is a crowd funding platform for all your needs,
          you can donate to your favorite causes and help them grow in a unique way.
        </p>

        <button type="button" class="text-white bg-gradient-to-br py-3 px-6 font-bold hover:scale-105  from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800  rounded-lg text-lg cursor-pointer text-center me-2 mb-2">GetMeAChai</button>


      </div>
      <div className="container mx-auto">
        <div className="flex gap-8">
          <div className="flex flex-col items-center justify-center w-full h-full">
            <img src="/snoopy-esnupi.gif" width={184} alt="" />
            <h2 className="text-white text-4xl font-bold mb-6">Join the Community</h2>
            <p className="text-gray-400 mb-8 max-w-2xl text-lg cursor-default text-center">
              Join a thriving and inspiring community of creators and changemakers — where a cup of chai means support, love, and encouragement.
            </p>
            <div className="bg-indigo-600 rounded-full text-white py-3 px-6 font-bold hover:scale-105 transition-all duration-150 hover:bg-indigo-700 cursor-pointer">Join Now</div>
          </div>
          <div className="flex  flex-col items-center justify-center w-full h-full">
            <img src="/confused-bichon-yellet.gif" width={163} alt="" />
            <h2 className="text-white text-4xl font-bold mb-6">What is GetMeAChai?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl text-lg cursor-default text-center">
              GetMeAChai helps creators and changemakers raise small funds for their ideas — where a cup of chai means support, love, and encouragement.

            </p>
            <div className="bg-indigo-600 rounded-full text-white py-3 px-6 font-bold hover:scale-105 transition-all duration-150 hover:bg-indigo-700 cursor-pointer">Join Now</div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full">
            <img src="/baron-bunny-genshing-impact.gif" width={147} alt="" />
            <h2 className="text-white text-4xl font-bold mb-6">Who is it for?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl text-lg cursor-default text-center">
            From indie developers to passionate bloggers — GetMeAChai is made for anyone turning ideas into reality with determination, and authenticity, one cup at a time.









            </p>
            <div className="bg-indigo-600 rounded-full text-white py-3 px-6 font-bold hover:scale-105 transition-all duration-150 hover:bg-indigo-700 cursor-pointer">Join Now</div>
          </div>
        </div>
      </div>
    </div>
  );
}
