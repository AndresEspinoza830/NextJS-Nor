import Image from "next/image"

export default function Home() {
  return (
    <>
      <div className=' bg-yellow-400 w-full '>
        <div className="container mx-auto flex justify-between items-center px-20 py-2">
          <h2 className='text-red-900 text-lg italic font-medium '>Call Now</h2>
          <p className='text-red-900 text-lg italic font-extrabold'>Order Online</p>
        </div>

      </div>
      <div className="bg-red-900 py-6">
        <div className="container mx-auto px-20 flex justify-between items-center">
          <Image src='/logo.webp' width={160} height={40} />
          <ul className="flex ">
            <li className=" text-lg text-yellow-400 font-extrabold italic">Home</li>
            <li className=" text-lg text-white font-extrabold italic pl-5">Menu</li>
          </ul>
        </div>
      </div>

      <div className="w-full h-screen relative">
        <video src="norkys.mp4" className="w-full h-full object-cover" autoPlay loop muted />
        <div className="absolute w-full h-full top-0 flex flex-col justify-center items-center text-white">
          <Image src='/logo.webp' width={500} height={120} />
          <h1 className="text-8xl font-extrabold italic text-center mt-10">POLLOS A LA <br /> BRASA </h1>
          <button className=" bg-yellow-400 text-red-900 hover:bg-red-900 hover:text-yellow-400 duration-400 transition text-lg italic font-extrabold mt-16 py-3 px-8 rounded-sm">Order Online</button>
        </div>
      </div>

      <div className="bg-gray-800 py-40 h-auto">
        <div className="container mx-auto px-28">
          <p className="text-yellow-400 italic font-medium text-2xl">Popular Dishes</p>
          <h2 className="text-white italic uppercase font-extrabold text-5xl">PERUVIAN DISHES</h2>
        </div>
        <div className="container mx-auto px-28 flex justify-between mt-16 flex-wrap">
          <div>
            <Image src='/plato1.webp' width={350} height={260} className="hover:scale-125 hover:opacity-70 duration-2000 transition" />
            <div className="bg-red-900 mb-8">
              <h3 className="text-xl text-white font-extrabold italic text-center py-3 border-b-4 border-yellow-400">Lomo Saltado</h3>
            </div>
          </div>
          <div>
            <Image src='/plato2.webp' width={350} height={260} className="hover:scale-125 hover:opacity-70 duration-2000 transition" />
            <div className="bg-red-900 mb-8">
              <h3 className="text-xl text-white font-extrabold italic text-center py-3 border-b-4 border-yellow-400">Pollo a la Brasa</h3>
            </div>
          </div>
          <div>
            <Image src='/plato3.jpg' width={350} height={260} className="hover:scale-125 hover:opacity-70 duration-2000 transition" />
            <div className="bg-red-900 mb-8">
              <h3 className="text-xl text-white font-extrabold italic text-center py-3 border-b-4 border-yellow-400">Papa a la Huancaina</h3>
            </div>
          </div>
          <div>
            <Image src='/plato1.webp' width={350} height={260} className="hover:scale-125 hover:opacity-70 duration-2000 transition" />
            <div className="bg-red-900 mb-8">
              <h3 className="text-xl text-white font-extrabold italic text-center py-3 border-b-4 border-yellow-400">Lomo Saltado</h3>
            </div>
          </div>
          <div>
            <Image src='/plato2.webp' width={350} height={260} className="hover:scale-125 hover:opacity-70 duration-2000 transition" />
            <div className="bg-red-900 mb-8">
              <h3 className="text-xl text-white font-extrabold italic text-center py-3 border-b-4 border-yellow-400">Pollo a la Brasa</h3>
            </div>
          </div>
          <div>
            <Image src='/plato3.jpg' width={350} height={260} className="hover:scale-125 hover:opacity-70 duration-2000 transition" />
            <div className="bg-red-900 mb-8">
              <h3 className="text-xl text-white font-extrabold italic text-center py-3 border-b-4 border-yellow-400">Papa a la Huancaina</h3>
            </div>
          </div>
        </div>

        <div className="container mx-auto text-center">
          <button className=" bg-yellow-400 text-red-900 hover:bg-red-900 hover:text-yellow-400 duration-400 transition text-lg italic font-extrabold mt-16 py-3 px-8 rounded-sm">More Special Dishes</button>
        </div>
      </div>

      <div className="bg-red-900 py-11 px-80">
        <div className="container mx-auto flex items-end">
          <Image src='/breakfast.webp' width={306} height={227} />
          <div className="ml-14">
            <h3 className="text-white italic font-medium text-2xl ">Saturday And Sundays</h3>
            <h2 className="text-white italic font-extrabold text-5xl ">PERUVIAN <br /> BREAKFAST</h2>
            <button className=" bg-yellow-400 text-red-900 hover:scale-110  duration-600 ease-in-out transition text-lg italic font-extrabold mt-4 py-2 px-8">Order Now</button>
          </div>
        </div>
      </div>

      <div className="h-screen">
      </div>

    </>
  )
}
