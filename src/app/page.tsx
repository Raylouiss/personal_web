import Navbar from '@/components/Navbar'
import About from '@/contexts/About'
import Home from '@/contexts/Home'
import Projects from '@/contexts/Projects'
import Skills from '@/contexts/Skills';
import Experience from '@/contexts/Experience';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Contact from '@/contexts/Contact';


const Page = () => {
  return (
    <div className='h-auto relative overflow-hidden'>
      <Navbar/>
      <Home/>
      <About/>
      <Skills />
      <Projects/>
      <Experience/>
      {/* <Contact/> */}
    </div>
  )
}

export default Page