export default function Home() {
  return (
    <>
      <div className="h-[91.5vh]">
        <div className="flex flex-col items-center justify-center h-[45vh] text-center">
          <h1 className="text-white text-6xl font-bold mb-6 gap-2 flex items-center cursor-default">Support My Chai Journey <span><img src="/coffee-emoji.gif" width={74} alt="" /></span></h1>
          <p className="text-gray-400 mb-8 max-w-2xl text-lg cursor-default">
            If you enjoy someones work and want to support them, you can do so by
            donating to them. This is a crowd funding platform for all your needs,
            you can donate to your favorite causes and help them grow in a unique way.
          </p>

          <button type="button" class="text-white bg-gradient-to-br py-3 px-6 font-bold hover:scale-105  from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 duration-300 rounded-lg text-lg cursor-pointer text-center me-2 mb-2">GetMeAChai</button>


        </div>
        <div className="container mx-auto">
          <div className="flex gap-8">
            <div className="flex flex-col items-center justify-center w-full h-full">
              <img src="/snoopy-esnupi.gif" width={184} alt="" />
              <h2 className="text-white text-4xl font-bold mb-6 cursor-default">Join the Community</h2>
              <p className="text-gray-400 mb-8 max-w-2xl text-lg cursor-default text-center">
                Join a thriving and inspiring community of creators and changemakers — where a cup of chai means support, love, and encouragement.
              </p>
              <div className="bg-indigo-600 rounded-full text-white py-3 px-6 font-bold hover:scale-105 transition-all duration-150 hover:bg-indigo-700 cursor-pointer">Join Now</div>
            </div>
            <div className="flex  flex-col items-center justify-center w-full h-full">
              <img src="/confused-bichon-yellet.gif" width={163} alt="" />
              <h2 className="text-white text-4xl font-bold mb-6 cursor-default">What is GetMeAChai?</h2>
              <p className="text-gray-400 mb-8 max-w-2xl text-lg cursor-default text-center">
                GetMeAChai helps creators and changemakers raise small funds for their ideas — where a cup of chai means support, love, and encouragement.

              </p>
              <div className="bg-indigo-600 rounded-full text-white py-3 px-6 font-bold hover:scale-105 transition-all duration-150 hover:bg-indigo-700 cursor-pointer">Join Now</div>
            </div>
            <div className="flex flex-col items-center justify-center w-full h-full">
              <img src="/baron-bunny-genshing-impact.gif" width={147} alt="" />
              <h2 className="text-white text-4xl font-bold mb-6 cursor-default">Who is it for?</h2>
              <p className="text-gray-400 mb-8 max-w-2xl text-lg cursor-default text-center">
                From indie developers to passionate bloggers — GetMeAChai is made for anyone turning ideas into reality with determination, and authenticity, one cup at a time.
              </p>
              <div className="bg-indigo-600 rounded-full text-white py-3 px-6 font-bold hover:scale-105 transition-all duration-150 hover:bg-indigo-700 cursor-pointer">Join Now</div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[170vh] w-full [background:radial-gradient(125%_125%_at_50%_90%,#000_40%,#63e_100%)]">
        <div className="container mx-auto pt-45">
          <div className="flex items-center justify-center h-[50%] gap-12">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/2SNr-PJmcZE?si=A1d3Xd1i6spDQ3eP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="">
              <h2 className="text-white text-4xl font-bold cursor-default mb-6 text-center">Who is GetMeAChai for?</h2>
              <p className="text-gray-400 mb-8 max-w-2xl text-lg cursor-default text-center mx-auto">
                GetMeAChai is made for creators, dreamers, and doers — anyone building something awesome and looking for a cup of support.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
                <div className="bg-white/5 text-white px-6 py-4 cursor-default rounded-xl shadow-md">🧑‍💻 Indie Developers</div>
                <div className="bg-white/5 text-white px-6 py-4 cursor-default rounded-xl shadow-md">🎨 Designers & Artists</div>
                <div className="bg-white/5 text-white px-6 py-4 cursor-default rounded-xl shadow-md">📸 Content Creators</div>
                <div className="bg-white/5 text-white px-6 py-4 cursor-default rounded-xl shadow-md">📚 Students & Hackathon Teams</div>
                <div className="bg-white/5 text-white px-6 py-4 cursor-default rounded-xl shadow-md">💡 Startup Founders</div>
                <div className="bg-white/5 text-white px-6 py-4 cursor-default rounded-xl shadow-md">🧘 Fitness Trainers</div>
                <div className="bg-white/5 text-white px-6 py-4 cursor-default rounded-xl shadow-md col-span-1 sm:col-span-2 md:col-span-3">📝 Bloggers & Writers</div>
              </div>
            </div>
          </div>



        </div>
        <div className="container mx-auto pt-45">
          <div className="flex items-center justify-center h-[50%] ">

            <div className="">
              <h2 className="text-white text-4xl font-bold mb-6 cursor-default text-center">How It Works</h2>
              <p className="text-gray-400 mb-10 max-w-2xl text-lg cursor-default text-center mx-auto">
                Getting started with GetMeAChai is super simple. Just follow these 3 quick steps and let the chai flow in!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <div className="bg-white/5 text-white px-6 py-8 rounded-xl shadow-lg cursor-default text-center hover:bg-white/10 transition">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-2xl font-semibold mb-2">Create a Page</h3>
                  <p className="text-gray-300 text-base">
                    Sign up in seconds and build your personalized chai page — no coding, no hassle, just your vibe.
                  </p>
                </div>

                <div className="bg-white/5 text-white px-6 py-8 rounded-xl shadow-lg cursor-default text-center hover:bg-white/10 transition">
                  <div className="text-4xl mb-4">☕</div>
                  <h3 className="text-2xl font-semibold mb-2">Share Your Link</h3>
                  <p className="text-gray-300 text-base">
                    Post your chai link on social media, in bios, or wherever your supporters hang out. Let them know you're brewing something awesome.
                  </p>
                </div>

                <div className="bg-white/5 text-white px-6 py-8 rounded-xl shadow-lg cursor-default text-center hover:bg-white/10 transition">
                  <div className="text-4xl mb-4">💸</div>
                  <h3 className="text-2xl font-semibold mb-2">Get Chai = Get Funded</h3>
                  <p className="text-gray-300 text-base">
                    Every chai you receive is more than just a sip — it’s real support for your goals, projects, and passion.
                  </p>
                </div>
              </div>

            </div>
            <img width={700} src="/evil-evil-lums.gif" alt="" />
          </div>

          <section className="text-center text-white mt-30 px-4">
            <h2 className="text-4xl cursor-default font-bold mb-4">📱 Get Started</h2>
            <p className="text-gray-300 cursor-default text-lg mb-2">
              Your next big idea deserves a cup of chai.
            </p>
            <p className="text-gray-300 cursor-default text-lg mb-6">
              Start your page today and turn support into momentum.
            </p>
            
            <button type="button" class="text-white bg-gradient-to-br py-3 px-6 font-bold hover:scale-105  from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 duration-300  rounded-lg text-lg cursor-pointer text-center me-2 mb-2">☕ Create Your Chai Page</button>
          </section>


        </div>
      </div>
    </>
  );
}
