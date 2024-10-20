import React from "react";
import WeatherApp from "../assets/portfolio/WeatherApp.png";
import Coffee2 from "../assets/portfolio/Coffee2.png";
import Netflix from "../assets/portfolio/Netflix2.png";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: WeatherApp,
      Link: "https://github.com/haripathakchhetri/_Weather_APP"
    },
    {
      id: 2,
      src: Coffee2,
      Link: "https://github.com/haripathakchhetri/HimalayanJava_Frontend"
    },
    {
      id: 3,
      src: Netflix,
      Link: "https://github.com/haripathakchhetri/Netflix_clone"
    },

  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>

          <p className="text-xs md:text-lg sm:py-1 md:py-6 mt-2">Let's have a look at some of the task that I have done.</p>
        </div>


        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, Link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg overflow-hidden">
              <img
                src={src}
                alt=""
                className="w-full h-48 object-cover duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={Link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="w-1/2 px-6 py-1 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
