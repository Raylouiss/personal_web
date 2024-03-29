import { Tilt } from 'react-tilt'
import Image from 'next/image'
import ProfilePicture from '@/assets/images/about.jpg'


const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            30,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.05,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

const TiltComponent = () => {
  return (
    <Tilt options={defaultOptions}>
      <div>
        <Image
            src={ProfilePicture}
            alt='Profile Picture'
            className='w-[350px] min-w-[200px] rounded-[10%] cursor-pointer shadow-xl'
        />
      </div>
    </Tilt>
  )
}

export default TiltComponent