export const metadata = {
  title: 'Waste Management',
  description: 'Company Profile',
}

import Link from 'next/link'
import ModalVideo from '../../../../components/modal-video'
import VideoThumb from '../../../src/assets/images/waste/zeco.webp'

export default function Waste() {

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6"    >
        <div className="pt-10 pb-12 md:pt-10 md:pb-20"  >

          {/* Page header */}
          <div>
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={900}
            thumbHeight={900}
            thumbAlt="Modal video thumbnail"
            video= "/videos/waste/ZWM.mp4"
            videoWidth={2000}
            videoHeight={1080} />
          </div>
     
          <div>
          <br></br>
          <br></br>
            <h5 className="h4 text-black">
            WASTE MANAGEMENT
            </h5>
            <h6 className="h6 text-black">
            A waste management system or waste disposal is a streamlined process that organizations use to dispose of, 
            reduce, reuse, and prevent waste. It is also an approach where companies implement comprehensive 
            strategies to efficiently manage wastes from their origin until their final disposal. Possible waste 
            disposal methods are recycling, composting, incineration, landfills, bioremediation, waste to energy, 
            and waste minimization.

            </h6>
          </div>

        </div>
      </div>
    </section>
  )
}
