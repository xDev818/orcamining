export const metadata = {
  title: 'Construction',
  description: 'Construction',
}

import Link from 'next/link'

import background from "../../src/assets/images/riskMgt.webp"

export default function Risk() {

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

          <div className="pt-10 pb-12 md:pt-40 md:pb-30"  style={backgroundImgStyle}>
          </div>
          <div>
            <br></br>
            <h5 className="h4 text-black">
            Policy Statement
            </h5>
            <h6 className="h6 text-black">
            
            We believe that effective management of risk is vital to the continued growth and success of ORCA Construction Material Supply. 
            and its subsidiaries, and the company is committed to manage risk in a proactive and effective manner across 
            the organization. This commitment is embodied in the ORCA Group Risk Management Philosophy Statement, as follows:
            </h6>

            <br></br>
            <h5 className="h4 text-black">
            Risk Management Documents and Activities
            </h5>
            <h6 className="h6 text-black">
            We have adopted a Risk Management Policy Manual, which encompasses the Enterprise Risk Management (ERM) 
            framework for managing risk at an enterprise-wide level within Philex Mining Corp. and its subsidiaries 
            (or the ORCA Construction Material Supplies). It contains the guidelines governing the risk management 
            process of the ORCA Group, 
            including the roles and responsibilities for its implementation. The policy aims to help the organization 
            integrate risk management into business and strategic planning by enabling operational units to identify 
            significant risks and take appropriate decisions and actions to treat these risks.
            <br></br>
            The company’s ERM activities is in accordance with internationally recognized frameworks, such as but not 
            limited to COSO, or the Committee of Sponsoring Organizations of the Treadway Commission, I and II.
            </h6>

            <br></br>
            <h5 className="h4 text-black">
            Internal Control System
            </h5>
            <h6 className="h6 text-black">
            
            We have in place an internal audit system whereby the internal audit can conduct independent and objective 
            internal-audit activities designed to add value, improve the company’s operations, and help it accomplish 
            its objectives. This shall provide a systematic and disciplined approach in the evaluation and improvement 
            of the effectiveness of risk management, control, and governance processes through which the Board, management, 
            and stockholders shall be provided with reasonable assurance that the company’s key organizational and procedural 
            controls are appropriate, adequate, effective and complied with. For this purpose, pertinent categories include 
            the following: (i) effectiveness and efficiency of operations; (ii) reliability of financial reporting; (iii) 
            compliance with applicable laws and regulations; and (iv) safeguarding of assets.
            </h6>

            <br></br>
            <h5 className="h4 text-black">
            More Risk Management Soon.........
            </h5>
          </div>

        </div>
      </div>
    </section>
  )
}
