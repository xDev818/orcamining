'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import PageIllustration from '@/components/page-illustration'
import Footer from '@/components/ui/footer'

import background from "../src/assets/images/homeDefaultBg.webp"

import Hero from '../../components/hero'
import Features from '../../components/features'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
//import Newsletter from '@/components/newsletter'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {  

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    })
  })

  const backgroundImgStyle={
    backgroundImage:
    `url(${background.src})`,
    //`url("https://img.freepik.com/free-photo/wide-angle-shot-singletree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg")`,
   
    
    marginTop:'-70px',
    //fontSize:'50px',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
   
    
  };

  
  return (
    <>
    <div >
      <main className="grow"  style={backgroundImgStyle}
      >

       {/* <PageIllustration /> */ }
       <div  style={{
            display: 'flex',
            alignItems: 'left',
            justifyContent: 'left',
          }} >
            <Hero /> 
           
        </div>
       
       
      </main>
      <Features />
      <Zigzag />
      <br></br>
      <br></br>
      <Testimonials />
    
      <Footer />
    </div>
    </>
  )
}
