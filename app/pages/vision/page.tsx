export const metadata = {
    title: 'Mission and Vision',
    description: 'Missin and Vision of Company',
  }
  
  import Link from 'next/link'
  import background from "../../src/assets/images/MissionVision.webp"
  
  export default function CompanyProfile() {
  
    const backgroundImgStyle={
      backgroundImage:
      `url(${background.src})`,
      //`url("https://img.freepik.com/free-photo/wide-angle-shot-singletree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg")`,
     
      
      marginTop:'10px',
      //fontSize:'50px',
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
            {/* Page header */}
            
            <div>
              <br></br>
              <h2 className="h2 text-black" style={{color:'#08c5d6'}}>
              MISSION AND VISION
              </h2>
            <br></br>
            <h6 className="h6 text-black">
            ORCA Vision and Mission and Core Values, which gets reviewed annually, initially created by the management 
            and approved by the Board of Directors. The goal is to develop a global mindset while keeping a 
            Filipino heart.

            Having expanded its Vision and Mission and geared this toward ORCA becoming a premier in mining,
            construction and waste management company as well 
            as a highly-respected and world-class business entity, it is important for the company to keep its Core Values alive in 
            the hearts and actions of its employees and key partners.
            </h6>
              <br></br>
              <h4 className="h4 text-black">
              MISSION
              </h4>
              <h6 className="h6 text-black">
              We are responsible construction, mining company and waste management that delivers,discovers and process minerals and energy
              resources for the use of society.
              </h6>
  
              <br></br>
              <h4 className="h4 text-black">
              VISION
              </h4>
              <h6 className="h6 text-black">
              Our vision is to be highly respected, world-class construction and natural resources company commited to adhere to internatinal 
              standards in mining operations and environmental conservation and deliver excellent value to our partner communities,investors,
              employees and other stakeholders.
              </h6>
  
            </div>
  
          </div>
        </div>
      </section>
    )
  }
  