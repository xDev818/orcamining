

import Link from 'next/link'

import ImageSlider from "../../../../components/imageslider/ImageSlider"

import silver from "../../../src/assets/images/mineral/silver.webp"
import silica from "../../../src/assets/images/mineral/silica.webp"
import ironore from "../../../src/assets/images/mineral/Iron-Ore.webp"
import blacksand from "../../../src/assets/images/mineral/blacksand.webp"
import gold from "../../../src/assets/images/mineral/gold.webp"
import copper from "../../../src/assets/images/mineral/copper.webp"

export const metadata = {
  title: 'Company Profile',
  description: 'Company Profile',
}



export default function Mineral() {

  const slides = [
    { url: `${ironore.src}`, title: "ironore" },
    { url: `${blacksand.src}`, title: "ironore" },
    { url: `${silica.src}`, title: "silica" },
    { url: `${silver.src}`, title: "silver" },
    { url: `${gold.src}`, title: "gold" },
    { url: `${copper.src}`, title: "gold" },
  ];

  const containerStyles = {
    width: "100%",
    height: "450px",
    margin: "0 auto",
  };

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6"    >
        <div className="pt-10 pb-12 md:pt-10 md:pb-20"  >

        <div className="max-w-3xl mx-auto text-center pb-20 md:pb-20" >
            <h1 className="h1" style={{color:'#08c5d6'}}>Minerals</h1>
          </div>
          <div className='slidecontainer' style={containerStyles} >
            <ImageSlider slides={slides} />
          </div>
          {/* Page header */}
          
          <div>
            <br></br>
            <br></br>
            <h5 className="h4 text-black">
            IRON ORE
            </h5>
            <h6 className="h6 text-black">
            Iron ores are rocks and minerals from which metallic iron can be economically extracted. 
            The ores are usually rich in iron oxides and vary in color from dark grey, bright yellow, 
            or deep purple to rusty red. The iron is usually found in the form of magnetite (Fe3O4, 72.4% Fe),
            hematite (Fe2O3, 69.9% Fe), 
            goethite (FeO(OH), 62.9% Fe), limonite (FeO(OH)·n(H2O), 55% Fe) or siderite (FeCO3, 48.2% Fe).
            </h6>

            <br></br>
            <h5 className="h4 text-black">
            BLACK SAND
            </h5>
            <h6 className="h6 text-black">
            Black sand is sand that is black in color. One type of black sand is a heavy, glossy, partly magnetic mixture 
            of usually fine sands containing minerals such as magnetite, found as part of a placer deposit. 
            Another type of black sand, found on beaches near a volcano, consists of tiny fragments of basalt.
            <br></br>
            While some beaches are predominantly made of black sand, even other color beaches (e.g. gold and white) 
            can often have deposits of black sand, particularly after storms. Larger waves can sort out sand grains 
            leaving deposits of heavy minerals visible on the surface of erosion escarpments.
            </h6>

            <br></br>
            <h5 className="h4 text-black">
            SILICA 
            </h5>
            <h6 className="h6 text-black">
            Also called silicon dioxide, compound of the two most abundant elements in Earth’s crust, 
            silicon and oxygen, SiO2. The mass of Earth’s crust is 59 percent silica, the main constituent 
            of more than 95 percent of the known rocks. Silica has three main crystalline varieties: quartz 
            (by far the most abundant), tridymite, and cristobalite. Other varieties include coesite, keatite,
             and lechatelierite. Silica sand is used in buildings and roads in the form of portland cement, concrete,
              and mortar, as well as sandstone. Silica also is used in grinding and polishing glass and stone; 
              in foundry molds; in the manufacture of glass, ceramics, silicon carbide, ferrosilicon, and silicones; 
              as a refractory material; and as gemstones. Silica gel is often used as a desiccant to remove moisture.
            </h6>
          
            <br></br>
            <h5 className="h4 text-black">
            SILVER
            </h5>
            <h6 className="h6 text-black">
            Silver is a chemical element with the symbol Ag (from Latin argentum 'silver', 
            derived from the Proto-Indo-European h₂erǵ 'shiny, white') and atomic number 47. A soft, white, 
            lustrous transition metal, it exhibits the highest electrical conductivity, thermal conductivity, 
            and reflectivity of any metal.[6] The metal is found in the Earth's crust in the pure, free elemental 
            form ("native silver"), as an alloy with gold and other metals, and in minerals such as argentite and 
            chlorargyrite. Most silver is produced as a byproduct of copper, gold, lead, and zinc refining.
            <br></br>
            Silver has long been valued as a precious metal. Silver metal is used in many bullion coins, 
            sometimes alongside gold:[7] while it is more abundant than gold, it is much less abundant as a
            native metal.[8] Its purity is typically measured on a per-mille basis; a 94%-pure alloy is described 
            as "0.940 fine". As one of the seven metals of antiquity, silver has had an enduring role in most human cultures.
            <br></br>
            Other than in currency and as an investment medium (coins and bullion), silver is used in solar panels, 
            water filtration, jewellery, ornaments, high-value tableware and utensils (hence the term "silverware"), 
            in electrical contacts and conductors, in specialized mirrors, window coatings, in catalysis of chemical
            reactions, as a colorant in stained glass, and in specialized confectionery. Its compounds are used in 
            photographic and X-ray film. Dilute solutions of silver nitrate and other silver compounds are used as 
            disinfectants and microbiocides (oligodynamic effect), added to bandages, wound-dressings, catheters,
            and other medical instruments.

            </h6>

            <br></br>
            <h5 className="h4 text-black">
            GOLD
            </h5>
            <h6 className="h6 text-black">
            Is a chemical element with the symbol Au (from Latin aurum 'gold') and atomic number 79. 
            It is a bright, slightly orange-yellow, dense, soft, malleable, and ductile metal in pure form.
            Chemically, gold is a transition metal and a group 11 element. It is one of the least reactive 
            chemical elements and is solid under standard conditions.
            <br></br>
            Gold often occurs in free elemental (native state), as nuggets or grains, in rocks, veins, and alluvial deposits. 
            It occurs in a solid solution series with the native element silver (as in electrum), naturally alloyed 
            with other metals like copper and palladium, and mineral inclusions such as within pyrite. Less commonly,
            it occurs in minerals as gold compounds, often with tellurium (gold tellurides).

            </h6>

            <br></br>
            <h5 className="h4 text-black">
            COPPER
            </h5>
            <h6 className="h6 text-black">
            Copper is a chemical element with the symbol Cu (from Latin: cuprum) and atomic number 29. It is a soft, 
            malleable, and ductile metal with very high thermal and electrical conductivity. A freshly exposed surface 
            of pure copper has a pinkish-orange color. Copper is used as a conductor of heat and electricity, 
            as a building material, and as a constituent of various metal alloys, such as sterling silver used in 
            jewelry, cupronickel used to make marine hardware and coins, and constantan used in strain gauges 
            and thermocouples for temperature measurement.
            <br></br>
            Copper is one of the few metals that can occur in nature in a directly usable metallic form (native metals). 
            This led to very early human use in several regions, from c. 8000 BC. Thousands of years later, it was 
            the first metal to be smelted from sulfide ores, c. 5000 BC; the first metal to be cast into a shape in a 
            mold, c. 4000 BC; and the first metal to be purposely alloyed with another metal, tin, to create bronze, 
            c. 3500 BC.[6]

            </h6>
          </div>

        </div>
      </div>
    </section>
  )
}
