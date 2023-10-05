import Image from 'next/image'

import TestimonialImage01 from '@/public/images/testimonial-01.jpg'
import TestimonialImage02 from '@/public/images/testimonial-02.jpg'
import TestimonialImage03 from '@/public/images/testimonial-03.jpg'
import TestimonialSample from "../app/src/assets/images/favicon.webp"

export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">


          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 text-gray-800" >Don't take our word for it</h2>
            <p className="text-xl text-gray-800"> More companies contracted to us to deliver their supply and requirement with  BUSINESS PROFESSIIONALISM and QUALITY.</p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-6 " style={{backgroundColor: '#08c5d6'}} data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  
                  <Image className="rounded-full" src={TestimonialImage01} width={48} height={48} alt="Testimonial 01">
                  </Image>
                  <Image className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" alt="sampple00" 
                  src={TestimonialSample} />
                  {/*
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                  
                */}
                
                </div>
              </div>
              <blockquote className="text-lg text-gray-800 grow">— ORCA lets me quickly get the supply. I honestly don't know how to find partner's until the ORCA discuss the solutions.</blockquote>
              <div className="text-gray-800 font-medium mt-6 pt-5 border-t border-black">
                <cite className="text-gray-800 not-italic">Anastasia Dan</cite> - <a className="text-gray-800 transition duration-150 ease-in-out" href="#0">PRESIDENT , XYZ COMPANY </a>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div className="flex flex-col h-full p-6 " style={{backgroundColor: '#08c5d6'}} data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage02} width={48} height={48} alt="Testimonial 01" />
                  <Image className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" alt="sampple02" 
                  src={TestimonialSample} />
                                <Image className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" alt="sampple0001" 
                  src={TestimonialSample} />
                </div>
              </div>
              <blockquote className="text-lg text-gray-800 grow">— ORCA was the quickest and with professional experience in delivering quality products. We'll surely can't wait to their next product delivery</blockquote>
              <div className="text-gray-800 font-medium mt-6 pt-5 border-t border-black">
                <cite className="text-gray-800 not-italic">Dan Brows</cite> - <a className="text-gray-800 transition duration-150 ease-in-out" href="#0">PRESIDENT , XYZ COMPANY </a>
              </div>
            </div>

            {/* 3rd testimonial */}
            <div className="flex flex-col h-full p-6 "  style={{backgroundColor: '#08c5d6'}} data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage03} width={48} height={48} alt="Testimonial 01" />
                  <Image className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" alt="sampple02" 
                  src={TestimonialSample} />

                </div>
              </div>
              <blockquote className="text-lg text-gray-800 grow">— Their product is the purest and graded as 100% materials. 
              Our company maximize the contract from 200 METRIC TONS per month to 2 MILLION TONS per week.
              We'll order more from ORCA
              </blockquote>
              <div className="text-gray-800 font-medium mt-6 pt-5 border-t border-black">
                <cite className="text-gray-800 not-italic">Dan Brows</cite> - <a className="text-gray-800 transition duration-150 ease-in-out" href="#0">GENERAL MANAGER , XYZ COMPANY </a>
              </div>
            </div>



          </div>

        
      </div>
    </section>
  )
}
