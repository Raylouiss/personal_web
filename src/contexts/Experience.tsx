import React from 'react'

const experiences =  [
    {
        startDate: "June 2023",
        endDate: "September 2023",
        title: "Junior IT Consultant",
        type: "Internship (Full-Time)",
        desc: "aaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        company: "Sharing Vision Indonesia"
    },
    {
        startDate: "October 2023",
        endDate: "January 2024",
        title: "Junior IT Consultant",
        type: "Internship (Part-Time)",
        desc: "aaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        company: "Sharing Vision Indonesia"
    },
]

const Experience = (): JSX.Element => {
  return (
    <div className='flex flex-col justify-center items-center font-marcellus overflow-hidden px-[150px] py-[150px]' id='Experiences'>
        <div className='text-center mb-[30px]'>
            <h2 className='text-xl'>
                These are my
            </h2>
            <h1 className='text-[50px] font-bold'>
                Professional Experiences
            </h1>
        </div>
        <div className="flex flex-col grid-cols-9 p-2 md:grid">
            <div className="flex md:contents flex-row-reverse">
                <div className="relative p-4 my-6 text-background bg-foreground rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                    <h3 className="text-lg font-semibold lg:text-xl">Junior IT Consultant | Internship (Full-Time)</h3>
                    <p className="mt-2 leading-6">I excel in Data Science & AI, consistently demonstrating excellence in leveraging analytical techniques and artificial intelligence to derive valuable insights and solve complex problems.</p>
                    <p className="mt-2 leading-6 font-semibold">Sharing Vision Indonesia</p>
                    <span className="absolute text-sm font-semibold text-foreground -top-8 left-1 whitespace-nowrap">June 2023 - September 2023</span>
                </div>
                <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                    <div className="flex items-center justify-center w-6 h-full">
                        <div className="w-1 h-full bg-foreground rounded-t-full bg-gradient-to-b from-foreground to-foreground-300">
                        </div>
                    </div>
                    <div className="absolute w-6 h-6 -mt-3 bg-background border-4 border-foreground rounded-full top-1/2"></div>
                </div>
            </div>

            <div className="flex md:contents">
                <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                    <div className="flex items-center justify-center w-6 h-full">
                        <div className="w-1 h-full bg-foreground"></div>
                    </div>
                    <div className="absolute w-6 h-6 -mt-3 bg-background border-4 border-foreground rounded-full top-1/2"></div>
                </div>
                <div className="relative p-4 my-6 text-background bg-foreground rounded-xl col-start-6 col-end-10 mr-auto">
                    <h3 className="text-lg font-semibold lg:text-xl">Junior IT Consultant | Internship (Part-Time)</h3>
                    <p className="mt-2 leading-6">I excel in Data Science & AI, consistently demonstrating excellence in leveraging analytical techniques and artificial intelligence to derive valuable insights and solve complex problems.</p>
                    <p className="mt-2 leading-6 font-semibold">Sharing Vision Indonesia</p>
                    <span className="absolute text-sm font-semibold text-foreground -top-8 left-1 whitespace-nowrap">October 2023 - January 2024</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience