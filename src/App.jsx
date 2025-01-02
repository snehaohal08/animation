import { useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './App.css'

function Animation() {


  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
   return (
    <>
    <div  data-aos="flip-up">
      <h1>Hii sneha</h1>
    </div>
    <div  data-aos="slide-right">
    <img src="net1.jpg" alt="net1.jpg" srcset=""  width="20%" height="20%" />
    </div>
    <div  data-aos="slide-left">
    <h1>welcome to react js</h1>
    </div>
    <div  data-aos="flip-up">
    <img src="net1.jpg" alt="net1.jpg" srcset=""  width="20%" height="20%" />
    </div>

    </>
  )
}

export default Animation
