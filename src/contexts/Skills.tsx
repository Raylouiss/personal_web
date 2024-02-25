"use client"

import React from 'react'
import Card from '@/components/Skills/Card'

const skills = [
    {
        title: "Data Science & AI",
        desc: "I excel in Data Science & AI, consistently demonstrating excellence in leveraging analytical techniques and artificial intelligence to derive valuable insights and solve complex problems.",
        image: "fa-brain",
        tools: ["Python", "Pandas", "Tensorflow", "Langchain", "Huggingface"]
    },
    {
        title: "Web Development",
        desc: "I have intermediate-level proficiency in web development, demonstrating excellence in both front-end and back-end development.",
        image: "fa-globe",
        tools: ["HTML", "CSS", "TypeScript", "JavaScript", "PHP", "Tailwind CSS", "Chakra UI", "React.js", "Next.js", "Vercel", "Docker", "Azle"]
    },
    {
        title: "Software Development",
        desc: "I have intermediate-level proficiency in software development, excelling in coding, problem-solving, and Object-Oriented Programming.",
        image: "fa-desktop",
        tools: ["Python", "Go", "Java", "C"]
    },
    {
        title: "Data Analytics",
        desc: "I have intermediate-level proficiency in data analytics, demonstrating adept skills in analyzing and interpreting data to derive meaningful insights.",
        image: "fa-chart-simple",
        tools: ["Tableau", "SQL", "Pandas"]
    },
    {
        title: "Mobile Development",
        desc: "I am a novice in mobile development, actively acquiring foundational skills to create basic mobile applications and exploring diverse platforms and frameworks to broaden my knowledge in the field.",
        image: "fa-mobile-alt",
        tools: ["Flutter", "Firebase"]
    }
]
const Skills = (): JSX.Element => {

  return (
    <div className='w-screen h-auto flex flex-col font-marcellus justify-center items-center overflow-hidden px-20 py-[150px]' id='Skills'>
        <div className='text-center mb-[30px]'>
            <h2 className='text-xl'>
                These are my
            </h2>
            <h1 className='text-[50px] font-bold'>
                Expertise Areas
            </h1>
        </div>
        <div className='lg:flex lg:flex-wrap justify-center gap-5 mb-10'>
            {skills.map((skill, index)=>(
                <div
                    key={index}
                    className='flex flex-row justify-center'
                >
                    <Card
                        title={skill.title}
                        desc={skill.desc}
                        image={skill.image}
                        tools={skill.tools}
                    />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Skills