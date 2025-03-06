import React from 'react'

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
                <div className="relative min-w-[250px] sm:min-w-[0px] p-4 my-6 text-background bg-foreground rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                    <h3 className="text-base sm:text-lg font-semibold lg:text-xl">AI Engineer | Internship (Full-Time)</h3>
                    <p className="mt-2 leading-6 text-sm sm:text-base text-justify">Developed and researched a chatbot using Retrieval-Augmented Generation (RAG) to enhance response accuracy and 
                    relevance using langchain, langgraph, and langsmith.</p>
                    <p className="mt-2 leading-6 font-semibold text-sm sm:text-base">PT. Sharing Vision Indonesia</p>
                    <span className="absolute text-sm font-semibold text-foreground -top-8 left-1 whitespace-nowrap">January 2025 - March 2025</span>
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
                <h3 className="text-base sm:text-lg font-semibold lg:text-xl">Software Engineer | Contract (Full-Time)</h3>
                    <p className="mt-2 leading-6 text-sm sm:text-base text-justify">Responsible for developing both the front-end and the back-end of a project using micro front-end architecture, react js, 
                    and go. </p>
                    <p className="mt-2 leading-6 font-semibold text-sm sm:text-base">PT. Praisindo Technology</p>
                    <span className="absolute text-sm font-semibold text-foreground -top-8 left-1 whitespace-nowrap">December 2024 - January 2025</span>
                </div>
            </div>

            <div className="flex md:contents flex-row-reverse">
                <div className="relative min-w-[250px] sm:min-w-[0px] p-4 my-6 text-background bg-foreground rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                <h3 className="text-lg font-semibold lg:text-xl">Application Developer | Internship (Full-Time)</h3>
                    <p className="mt-2 leading-6 text-justify">Developed and delivered 4 applications using low-code platforms, covering all SDLC phases from requirement gathering 
                    to production and evaluation.</p>
                    <p className="mt-2 leading-6 font-semibold">PT. Bank Central Asia Tbk</p>
                    <span className="absolute text-sm font-semibold text-foreground -top-8 left-1 whitespace-nowrap">June 2024 - December 2024</span>
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
                    <p className="mt-2 leading-6 text-justify">Developed a module related to automation testing (Katalon) and summarizing journals related to machine learning.</p>
                    <p className="mt-2 leading-6 font-semibold">PT. Sharing Vision Indonesia</p>
                    <span className="absolute text-sm font-semibold text-foreground -top-8 left-1 whitespace-nowrap">October 2023 - January 2024</span>
                </div>
            </div>

            <div className="flex md:contents flex-row-reverse">
                <div className="relative min-w-[250px] sm:min-w-[0px] p-4 my-6 text-background bg-foreground rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                <h3 className="text-base sm:text-lg font-semibold lg:text-xl">Junior IT Consultant | Internship (Full-Time)</h3>
                    <p className="mt-2 leading-6 text-sm sm:text-base text-justify">Updated and developed data science modules, constructed a machine learning model utilizing TensorFlow, pandas, and Python, while also summarizing journals on big data, machine learning, and natural language processing, and gained knowledge in Big Data Technologies.</p>
                    <p className="mt-2 leading-6 font-semibold text-sm sm:text-base">PT. Sharing Vision Indonesia</p>
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

        </div>
    </div>
  )
}

export default Experience