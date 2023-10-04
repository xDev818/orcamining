export const metadata = {
    title: 'Mission and Vision',
    description: 'Missin and Vision of Company',
  }
  
  import Link from 'next/link'
  import background from "../../src/assets/images/OrgChart.jpg"
  
  export default function Articles() {
  
    const backgroundImgStyle={
      backgroundImage:
      `url(${background.src})`,
      //`url("https://img.freepik.com/free-photo/wide-angle-shot-singletree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg")`,
     
      
      marginTop:'-70px',
      //fontSize:'50px',
      backgroundPosition: 'center center',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
    };
  
    return (
      <section className="relative ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6" >
          <div className="pt-10 pb-12 md:pt-10 md:pb-20" >
  
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20 " style={{color:'#08c5d6'}}>
              
              <h1 className="h1" >Articles of Corporation </h1>
              <h2 className="h3"> Coming soon ... </h2>
          </div>
           
          </div>
        </div>
      </section>
    )
  }
  