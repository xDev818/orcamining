import Image from "next/image";

import ModalVideo from '@/components/modal-video'

import HomeBgEmail from '../app/src/assets/images/homeBgIronOre.webp'
import contactus from '../app/src/assets/images/contactus.webp'
import '../app/css/Background.module.css'

export default function Hero() {
  return (
    <section>
      <div className="max-w-6xl mx-auto relative">

        {/* Hero content 
        className="relative pt-40  md:pt-50 md:pb-16 md:mx-[200px] lg:ml-[400px]"
        <h1 className='text-5xl md:text-center' >Let's talk your requirement</h1>
        <p className="text-6sm text-gray-800 mb-8 md:text-center" >Mining , Construction and Waste Management Industry is our expertise. Making the complex simple.</p>
        */}
        <div className="relative pt-40  md:pt-50 md:pb-16 ">
         
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-gray-800 md:pb-10">
            <h1 className='text-5xl md:text-center' >Let's talk your requirement</h1>
            <p className="text-6sm text-gray-800 mb-8" >Mining , Construction and Waste Management Industry is our expertise. Making the complex simple.</p>
            <div className="text-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div  className="flex">
                <a className="btn text-white w-22 h-20 " href="#0" style={{backgroundColor:'#08c5d6'}}>
                  {/* 
                  btn text-white bg-gray-800 hover:bg-orange-500 w-30 
                  style={{alignContent:'normal',alignItems:'left', width: '50px',height:'50px'}}
                  */}
                <Image src={contactus} alt={""} style={{alignContent:'normal',textAlign: 'left', alignItems:'left', width: '50px',height:'50px'}} > 
                </Image> 
                <div className="text-white text-2xl">
                 (+63) 915 1234567 
                 <br></br> (+63) 915 8888888
                 </div>
                </a> 
                
              </div>

              
            </div>
          </div>
          <div className="modalvideomain">
            <ModalVideo
              thumb={HomeBgEmail}
              thumbWidth={600}
              thumbHeight={600}
              thumbAlt="Modal video thumbnail"
              video="/videos/Mining.mp4"
              videoWidth={2000}
              videoHeight={1080} />
          </div>
        </div>
        
      </div>
    </section>
  )
}
