import { techs } from '../data/techs'
import { ITech } from '../types/techTypes'

const Tech = () => {
  return (
    <section className="mt-12 my-20 w-5/6 md:w-2/4 flex flex-col gap-10">
      <h1 className="text-center font-bungee text-2xl md:text-4xl text-pink-900">
        Technologies i use
      </h1>
      <div className="space-y-3 font-blackOpsOne">
        {techs.map((tech: ITech) => (
          <div key={tech.id} className="collapse bg-cyan-600 bg-opacity-10">
            <input type="radio" name="my-accordion-1" />
            <div className="flex items-center gap-10 h-20 md:h-32 collapse-title text-xl font-medium">
              <img className="w-10 md:w-20" src={tech.img} alt="" />
              {tech.tech}
            </div>
            <div className="collapse-content">
              <p className="text-md">{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
export default Tech
