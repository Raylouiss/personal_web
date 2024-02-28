"use client"

import React from 'react'
import Card from '@/components/Projects/Card'
import ProfilePicture from '@/assets/images/about.jpg'
import Lottereum from '@/assets/images/Lottereum.png'
import Nutribuddies from '@/assets/images/Nutribuddies.png'
import DermaticaAI from '@/assets/images/DermaticaAI.png'
import SREITB from '@/assets/images/SREITB.png'
import WisprilITB from '@/assets/images/WisprilITB.png'
import ReChefy from '@/assets/images/ReChefy.png'
import Dashboard from '@/assets/images/Dashboard.png'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

const projects = [
  {
    name: "Lottereum",
    desc: "An innovative giveaway system integrating blockchain technology; provided a secure, reliable, and transparent platform, revolutionizing the web3 ecosystem",
    thumbnail: Lottereum,
    tools: ["Azle", "Typescript", "React.ts", "Next.js", "Chakra UI"],
    link: "https://bit.ly/Lottereum",
    github: "https://github.com/Raylouiss/web3-lottery-system"
  },
  {
    name: "Nutribuddies",
    desc: "A mobile application to tackle the challenges associated with stunting.",
    thumbnail: Nutribuddies,
    tools: ["Flutter", "Firebase", "Tensorflow", "Google Cloud Platform"],
    link: "https://youtu.be/JlNDTJo-bAQ",
    github: "https://github.com/Raylouiss/nutribuddies"
  },
  {
    name: "DermaticaAI",
    desc: "A mobile application leveraging AI to identify and diagnose skin diseases, integrating AI model and enhanced with RAG & dermatological knowledge.",
    thumbnail: DermaticaAI,
    tools: ["Flutter", "Firebase", "Tensorflow", "Langchain", "Google Cloud Platform"],
    link: "https://youtu.be/91Mqu27Vf7Y",
    github: "https://github.com/Raylouiss/SkinDiseaseRecognition"
  },
  {
    name: "SRE ITB",
    desc: "A website showcasing the profile of the Society Renewable Energy ITB and IYREF.",
    thumbnail: SREITB,
    tools: ["Next.js", "React.ts", "Tailwind CSS"],
    link: "https://sreitb.com/",
    github: "https://github.com/Raylouiss/SRE-ITB-frontend/"
  },
  {
    name: "Wispril ITB",
    desc: "A website showcasing information about the April 2023 graduation at ITB.",
    thumbnail: WisprilITB,
    tools: ["Next.js", "React.ts", "Tailwind CSS"],
    link: "https://wisuda-april2023-frontend.vercel.app/",
    github: "https://github.com/Raylouiss/WisudaApril2023-frontend/"
  },
  {
    name: "AFOLU Dashboard",
    desc: "A dashboard about AFOLU's Challenges in Realizing a Green Future with Renewable Energy",
    thumbnail: Dashboard,
    tools: ["Tableau"],
    link: "https://public.tableau.com/app/profile/raynard.tanadi/viz/TantanganAFOLUdalamMewujudkanMasaDepanHijaudenganEnergiTerbarukan/Dashboard1",
    github: ""
  },
  {
    name: "Rechefy",
    desc: "A desktop-based application that is here as your cooking companion",
    thumbnail: ReChefy,
    tools: ["Python", "Pylint", "Sqlite", "PyQT"],
    link: "",
    github: "https://github.com/Raylouiss/ReChefy-Recipe-Application/"
  }
]

const Projects = (): JSX.Element => {

  return (
    <div className='h-screen w-screen flex flex-col font-marcellus justify-center items-center overflow-hidden py-[150px]' id='Projects'>
      <div className='text-center mb-[30px]'>
          <h2 className='text-xl'>
              Take a look at
          </h2>
          <h1 className='text-[50px] font-bold'>
              My Projects
          </h1>
      </div>
      <Carousel
        opts={{
          align: "center",
        }}
        className='flex flex-row justify-center items-center w-[100vw] px-[10vw] mb-10'
      >
        <CarouselContent>
          {projects.map((project, index)=>(
            <CarouselItem key={index} className="flex flex-row justify-center items-center lg:basis-1/2  2xl:basis-1/3">
              <div
                  key={index}
                  className='flex flex-row justify-center'
              >
                  <Card
                      name={project.name}
                      desc={project.desc}
                      thumbnail={project.thumbnail}
                      tools={project.tools}
                      link={project.link}
                      github={project.github}
                  />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext/>
      </Carousel>
    </div>
  )
}

export default Projects