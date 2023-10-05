export const metadata = {
    title: 'Mission and Vision',
    description: 'Missin and Vision of Company',
  }
  
  import Link from 'next/link'
  import background from "../../src/assets/images/CoreValues.webp"
  
  export default function CoreValues() {
  
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

          <div>
          <br></br>
              <h2 className="h2 text-black" style={{color:'#08c5d6'}}>
              ORCA VALUES live by
              </h2>
              <h4 className="h4 text-black">
               - We Focus on results 
               <br></br>
               - We are Trustworthy 
               <br></br>
               - Act with Integrity
               <br></br>
               - Think Big
              </h4>
          </div>

          </div>
        </div>
      </section>
    )
  }
  