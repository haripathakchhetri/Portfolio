import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import node from "../assets/node.png"
import reactImage from "../assets/react.png"
import tailwind from "../assets/tailwind.png"
import github from "../assets/github.png"

const Experience = () => {

  const tech = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500'
    },

    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500'
    },

    {
      id: 3,
      src: javascript,
      title: 'JavaScript',
      style: 'shadow-yellow-500'
    },

    {
      id: 4,
      src: reactImage,
      title: 'REACT',
      style: 'shadow-blue-600'
    },

    {
      id: 5,
      src: tailwind,
      title: 'Tailwind',
      style: 'shadow-sky-400'
    },

    {
      id: 6,
      src: node,
      title: 'NODE',
      style: 'shadow-green-500'
    },

    {
      id: 7,
      src: github,
      title: 'GITHUB',
      style: 'shadow-gray-400'
    },


  ]

  return (
    <div name="skills" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen ">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-lg md:text-4xl font-bold border-b-4 border-gray-500 p-2 inline ">Skills</p>
          <p className="text-xs md:text-lg sm:py-1 md:py-6 mt-2">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-8 text-center py-6 px-12 sm:px-0">
          {tech.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Experience