"use client"

import React from 'react'
import Card from '@/components/Projects/Card'
import ProfilePicture from '@/assets/images/about.jpg'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from "embla-carousel-autoplay"

const projects = [
  {
    name: "Lottereum",
    desc: "Ini adalah Lottereum",
    thumbnail: ProfilePicture,
    tools: ["Python", "Pandas", "Tensorflow", "Langchain", "Huggingface"],
    link: "aaaaaaaaaa",
    github: "aaaaaaaaaa"
  },
  {
    name: "Nutribuddies",
    desc: "I have intermediate-level proficiency in web development, demonstrating excellence in both front-end and back-end development.",
    thumbnail: ProfilePicture,
    tools: ["Python", "Pandas", "Tensorflow", "Langchain", "Huggingface"],
    link: "",
    github: "aaaaaaaaaa"
  },
  {
    name: "DermaticaAI",
    desc: "Ini adalah Lottereum",
    thumbnail: ProfilePicture,
    tools: ["Python", "Pandas", "Tensorflow", "Langchain", "Huggingface"],
    link: "aaaaaaaaaa",
    github: "aaaaaaaaaa"
  },
  {
    name: "SRE ITB",
    desc: "Ini adalah Lottereum",
    thumbnail: ProfilePicture,
    tools: ["Python", "Pandas", "Tensorflow", "Langchain", "Huggingface"],
    link: "aaaaaaaaaa",
    github: "aaaaaaaaaa"
  },
  {
    name: "Wispril ITB",
    desc: "Ini adalah Lottereum",
    thumbnail: ProfilePicture,
    tools: ["Python", "Pandas", "Tensorflow", "Langchain", "Huggingface"],
    link: "aaaaaaaaaa",
    github: "aaaaaaaaaa"
  },
  {
    name: "AFOLU Dashboard",
    desc: "Ini adalah Lottereum",
    thumbnail: ProfilePicture,
    tools: ["Python", "Pandas", "Tensorflow", "Langchain", "Huggingface"],
    link: "aaaaaaaaaa",
    github: "aaaaaaaaaa"
  },
  {
    name: "Rechefy",
    desc: "Ini adalah Lottereum",
    thumbnail: ProfilePicture,
    tools: ["Python", "Pandas", "Tensorflow", "Langchain", "Huggingface"],
    link: "aaaaaaaaaa",
    github: "aaaaaaaaaa"
  },
  {
    name: "Binotify",
    desc: "Ini adalah Lottereum",
    thumbnail: ProfilePicture,
    tools: ["Python", "Pandas", "Tensorflow", "Langchain", "Huggingface"],
    link: "aaaaaaaaaa",
    github: "aaaaaaaaaa"
  },
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
        plugins={[
          Autoplay({
            delay:3000,
          })
        ]}
      >
        <CarouselContent>
          {projects.map((project, index)=>(
            <CarouselItem key={index} className="flex flex-row justify-center items-center md:basis-1/2 xl:basis-1/3">
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