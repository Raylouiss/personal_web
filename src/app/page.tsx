import Navbar from '@/components/Navbar'
import About from '@/contexts/About'
import Home from '@/contexts/Home'
import Projects from '@/contexts/Projects'
import Image from 'next/image'


const Page = () => {
  return (
    <div className='h-auto relative overflow-hidden'>
      <Navbar/>
      <About/>
      <Home/>
      <Projects/>
    </div>
  )
}

export default Page