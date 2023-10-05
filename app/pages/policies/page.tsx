export const metadata = {
  title: 'Construction',
  description: 'Construction',
}

import Link from 'next/link'

import background from "../../src/assets/images/policies.webp"

export default function Policies() {

  const backgroundImgStyle={
    backgroundImage:
   `url(${background.src})`,
    marginTop:'10px',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
   
  };

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6"    >
        <div className="pt-10 pb-12 md:pt-10 md:pb-20"  >


          {/* Page header */}
          <div className="pt-10 pb-12 md:pt-40 md:pb-30"  style={backgroundImgStyle}>
          </div>
          <div>
            
            <h5 className="h4 text-black">
            Diversity Policy
            </h5>
            <h6 className="h6 text-black">
            
            The Policy aims to ensure that optimal and sound decision-making is achieved by diversifying the composition 
            of the Company’s Board of Directors .
            </h6>

            <br></br>
            <h5 className="h4 text-black">
            Conflict of Interest Policy
            </h5>
            <h6 className="h6 text-black">
            This policy ensures that all work-related decisions, actions or inactions of Philex Mining’s directors, 
            officers, employees, and consultants are above-board and based on sound business principles and judgment, 
            and devoid of bias or partiality.
            </h6>

            <br></br>
            <h5 className="h4 text-black">
            Vendor Relations Policy
            </h5>
            <h6 className="h6 text-black">
            
            This policy seeks to uphold the highest professional standards of business practices, core values, 
            and ethics in the company’s dealings with its suppliers in the procurement of products and services.
            </h6>

            <br></br>
            <h5 className="h4 text-black">
            More Policy Soon.........
            </h5>
          </div>

        </div>
      </div>
    </section>
  )
}
