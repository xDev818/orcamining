export const metadata = {
  title: 'Construction',
  description: 'Construction',
}

import Link from 'next/link'
import background from "../../../src/assets/images/waste/zeco.webp"

export default function Zeco() {

  const backgroundImgStyle={
    backgroundImage:
   `url(${background.src})`,
    marginTop:'10px',
    backgroundPosition: 'center left',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '50vh',
    width: '100%'
  };

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6"    >
        <div className="pt-10 pb-12 md:pt-10 md:pb-20"  >
        <div className="pt-10 pb-12 md:pt-40 md:pb-30"  style={backgroundImgStyle}>
        </div>
          <div>
            <br></br>
            <h5 className="h4 text-black">
            ZECO INDUSTRIES
           
            </h5>
            <br></br>
            <h6 className="h6 text-black">
            <a href='https://www.zecowaste.com/' className='h6 text-black'> Click here: https://www.zecowaste.com/</a>
            <br></br>
            <br></br>
            The revolutionary & unique, Zēco Waste Machine will save the world from the brink of irreversible climate change. 
            Waste is a huge and growing problem. The world’s population produces an astronomical 5.5 million tonnes of 
            municipal solid waste EACH DAY. In total, the world generates OVER 2 billion tonnes of municipal solid waste 
            annually, with at least 33 percent of that—extremely conservatively—not managed in an environmentally safe manner. 
            When looking forward, global waste is expected to grow to 3.40 billion tonnes by 2050, more than double population 
            growth over the same period.
            <br></br>
            The Zēco Waste Machine will change the way we get rid of garbage. The decomposition process produces zero waste 
            and is done within emissions standards. The machine doesn't run on anything other than the garbage we throw away. 
            The only flame used, is to start the decomposition process. Once the ignition chamber is lit, it will be closed 
            and the flame will go out. With the solid waste still red hot, only a certain amount of atmospheric oxygen will 
            be let into the chamber to allow the waste to continue to decompose. Think of it like a charcoal BBQ. First, the 
            charcoal brickets need to be lit and when the flame goes out they are red hot. If left alone the charcoal will 
            eventually turn to ash. As long as you keep the charcoal coming, the BBQ will run indefinitely. The solid waste 
            is like the charcoal, as long as you keep the machine fed with solid waste it will continue to decompose. 
            The Zēco Waste Machine works on that principle. By controlling the oxygen within the chamber, we can control 
            it so the solid waste only is red hot but doesn't catch on fire. The little amount of harmful gases that are 
            made, will be cleaned through the patented 3-stage wet scrubber, leaving only clean and safe emissions. Also, 
            none of the garbage needs to be separated, almost everything can be thrown into the machine to be decomposed. 
            Lastly, this whole process produces heat energy that can be converted to energy we can harness and use to power 
            our towns and cities.


            </h6>

          </div>

        </div>
      </div>
    </section>
  )
}
