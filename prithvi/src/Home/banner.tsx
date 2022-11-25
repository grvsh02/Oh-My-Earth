import img from "../Assets/get_Started.png"

const Banner = () => {
    return (
        <section className="mt-52">
            <div className="md:w-11/12 w-full md:px-0 px-3 mx-auto">
                <div className="bg-quiz-bg h-auto sm:bg-cover bg-center bg-no-repeat bg-[#6D9886] rounded-xl relative">
                    <article className="py-24 md:px-14 px-4 md:w-9/12 md:mx-0 mx-auto md:text-left text-center leading-none">
                        <h1 className="font-bold lg:text-[60px] text-[50px] text-white pb-8">
                            Get one step closer to a cleaner planet
                        </h1>
                        <button onClick={() => {}} className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-white shadow-md group">
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-black duration-300 -translate-x-full bg-white group-hover:translate-x-0 ease">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Get Started</span>
                            <span className="relative invisible">Get Started</span>
                        </button>
                    </article>
                    <div className="absolute lg:right-[10%] right-[4%] lg:-top-[10%] -top-[5%] md:block hidden">
                        <img src={img} alt="illustration" className="w-72" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;
