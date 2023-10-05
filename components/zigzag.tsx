import Image from 'next/image'





import ImageSlider from "../components/imageslider/ImageSlider"
import zg1 from "../app/src/assets/images/zigzag/quality/zigProduct1.webp"
import zg2 from "../app/src/assets/images/zigzag/quality/zigzagProduct2.webp"
import zg3 from "../app/src/assets/images//zigzag/quality/zigzagProduct3.webp"
import zg4 from "../app/src/assets/images//zigzag/quality/quality1.webp"
import zg5 from "../app/src/assets/images//zigzag/quality/quality2.webp"
import zg6 from "../app/src/assets/images//zigzag/quality/quality3.webp"

import zgintegrity from"../app/src/assets/images//zigzag/integrity/integrity1.webp"
import zgintegrity2 from"../app/src/assets/images//zigzag/integrity/integrity2.webp"

import zgspeed1 from"../app/src/assets/images//zigzag/speed/zigzagProduct3.webp"

import ImageSliderenergy from "../components/imageslider/ImageSlider"
import zgenergy1 from '../app/src/assets/images/zigzag/energy/bioenergy.webp'
import zgenergy2 from '../app/src/assets/images/zigzag/energy/peletting.webp'
import zgenergy3 from '../app/src/assets/images/zigzag/energy/clean.webp'
import zgenergy4 from '../app/src/assets/images/zigzag/energy/clean4.webp'

export default function Zigzag() {

  const slides1 = [
    { url: `${zg1.src}`, title: "Product1" },
    { url: `${zg2.src}`, title: "Product2" },
    { url: `${zg4.src}`, title: "Product3" },
    { url: `${zg5.src}`, title: "Product3" },
    { url: `${zg6.src}`, title: "Product3" },
    { url: `${zg3.src}`, title: "Product3" },
  ];

  const slidesIntegrity = [
    { url: `${zgintegrity.src}`, title: "Clean1" },
    { url: `${zgintegrity2.src}`, title: "Energy1" },
    
  ];

  const slidesenergy = [
    { url: `${zgenergy4.src}`, title: "Clean1" },
    { url: `${zgenergy1.src}`, title: "Energy1" },
    { url: `${zgenergy2.src}`, title: "Energy2" },
    { url: `${zgenergy3.src}`, title: "Clean1" },
  ];


  const containerStyles = {
    width: "100%",
    height: "450px",
    margin: "0 auto",
  };

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        

          {/* Section header
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">

            <h1 className="h2 mb-4 text-gray-800">See our Products</h1>
            
          </div>
 */}
            {/* 1st item 
             <Image className="max-w-full mx-auto md:max-w-none h-auto" src={zigzagImg1} width={540} height={405} alt="Features 01" />
            */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
               
              <div className='slidecontainer' style={containerStyles} >
                <ImageSlider slides={slides1} />
              </div>
               
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2"></div>
                  <h3 className="h3 mb-3 text-black">Product Quality</h3>
                  <p className="text-xl text-gray-400 mb-4">
                    The source of primary iron for the world's iron and steel industries.
                    It is therefore essential for the production of steel, which in turn is essential to maintain a 
                    strong industrial base. Almost all (98%) iron ore is used in steelmaking. Iron ore is mined in 
                    about 50 countries.
                  </p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>abundant mineral on Earth, one of the main minerals used by humans.</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>solid and durable material that has a wide range of uses.</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>relatively easy to mine and process, making it an excellent choice for construction and other applications.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <br></br>
            <br></br>
            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 "  data-aos="fade-up">
              <div className='slidecontainer' style={containerStyles} >
                <ImageSlider slides={slidesIntegrity} />
              </div>
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2"></div>
                  <h3 className="h3 mb-3 text-black">Business Integrity</h3>
                  <p className="text-xl text-gray-400 mb-4">
                  closing any gaps between your intentions and actions, ensuring your interactions with customers, 
                  employees, suppliers, investors and regulators are aligned with your stated aims and purpose
                    </p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Better Customer Relationships</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Improved Business Performance</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Reduced Compliance and Governance Risk</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Stronger Supply Chain</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <br></br>
            <br></br>
            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={zgspeed1} width={540} height={600} alt="Features 03" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-orange-500 mb-2">Customer Satisfaction</div>
                  <h3 className="h3 mb-3 text-black">On Schedule Delivery</h3>
                  <p className="text-xl text-gray-400 mb-4">
                  can result lower delivery costs, more reliable delivery performance and better utilization 
                  of delivery resources.
                  <br></br>
                  route plan are data accuracy and route optimization software that can accurately model the 
                  physical and operational conditions and the flexibility to model business objectives, 
                  and a clear understanding of the desired business goals.
                    </p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Priority Level</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Right Delivery Scheduling Software</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Optimize Your Routes</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span> Customer involvement in the process to know what is going on.</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Analyze Performance And Results Using Metrics</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <br></br>
            <br></br>
            {/* 4nd item 
            <Image className="max-w-full mx-auto md:max-w-none h-auto" src={zigzagImg4} width={540} height={405} alt="Features 02" />
            */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 " data-aos="fade-up">
              <div className='slidecontainer' style={containerStyles} >
                <ImageSliderenergy slides={slidesenergy} />
              </div>
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2"></div>
                  <h3 className="h3 mb-3 text-black">Waste Environmentalist</h3>
                  <p className="text-xl text-gray-400 mb-4 ">
                    Generally, any materials can be made into biomass pellets as long as it will burn. Traditional materials for fuel 
                    pellets are made out of wood from the forest industry residue and now agri-waste can be made into biomass pellets. 
                    Also paper and plastic pellets are made from municipal solid waste. We go one step further and use mixed municipal 
                    solid waste, which include textiles, plastics, food waste and household waste. Combined with our patented burners, 
                    will burn cleaner and more efficient than traditional burners and biomass pellets. If correctly managed, biomass is a 
                    sustainable fuel that can deliver a significant reduction in net carbon emissions as compared to fossil fuels. 
                    The amount of CO2-neutral fuel produced with equipment from ZecoWaste in time will be able to replace millions tons of 
                    oil per year.
                  </p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">        
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Simple handling</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Reduced transport cost</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Better storage capabilities</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Homogenous fuel of identical standard</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Environmentally friendly, which is free of contaminants and burns cleanly with very low ash</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Renewable that is sustainable biomass from solid municipal waste</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Efficient with consistant quality and moisture content</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Econimical with attactive colorific value which greatly reduces energy costs</span>
                  </li>
                  </ul>
                </div>
              </div>
            </div>


        </div>
   
    </section>
  )
}
