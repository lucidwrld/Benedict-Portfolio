import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className='max-container '>
      <h1 className='head-text text-white'>
        Hello, I'm{" "}
        <span className='purple-gradient_text font-semibold drop-shadow'>
          {" "}
          Benedict
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-white'>
        <p>
        Frontend Developer with 3+ years of experience building responsive websites and web applications. Proficient in Next Js,React Js, JavaScript, and CSS
        frameworks like Tailwind and Bootstrap. Passionate about creating user-friendly interfaces and improving web performance.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className="flex flex-col gap-7 ">
              
              <div className='block-container w-20 h-20' key={skill.name}>
                
                <div className='btn-back rounded-xl' />
                  
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>
              <h3 className="text-white  text-[12px]">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text text-white'>Work Experience.</h3>
        <div className='mt-5 flex flex-col gap-3 purple-gradient_text'>
          <p>
            I've worked with all sorts of companies, leveling up my skills and
            teaming up with smart people. Here's the rundown:
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline >
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full '>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  background: "#ffffff",
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: "#800080",
                  boxShadow: "none",
                }}
              >
                <div >
                  <h3 className='text-purple-950 text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-purple-950 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                    <span className="ml-2 text-gray-500">({experience.date})</span>
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-purple-950 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default About;
