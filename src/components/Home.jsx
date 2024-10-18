import HeroImage from "../assets/heroimg.jpg"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">

      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">

        <div className="flex flex-col">
          <h2 className="text-4xl md:text-7xl font-bold text-white">I'm a Full Stack Developer</h2>
          <p className="text-gray-500 py-4 max-w-md">I am a very passonate on building and designing software.
            Currently, I love to work on web application using technologies like React, Tailwind, Node JS, Express Js and MongoDB.
          </p>

          <div>
            <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 via-blue-600 to-blue-800 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300"> <MdOutlineKeyboardArrowRight className="ml-1" size={25} /></span>
            </Link>
          </div>
        </div>

        <div className="relative">
          <img src={HeroImage} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full md:h-[300px]" />
          <div className="absolute inset-0 bg-black opacity-30 rounded-2xl"></div>
        </div>
      </div>

    </div>
  )
}
export default Home