export const metadata = {
  title: "Company Profile",
  description: "Company Profile",
};

import Link from "next/link";
import background from "../../src/assets/images/CompanyProfile.jpg";

export default function CompanyProfile() {
  const backgroundImgStyle = {
    backgroundImage: `url(${background.src})`,
    //`url("https://img.freepik.com/free-photo/wide-angle-shot-singletree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg")`,

    marginTop: "10px",
    //fontSize:'50px',
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  };

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-20 pb-12 md:pt-10 md:pb-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-10">
            <h1 className="h1" style={{ color: "#08c5d6" }}>
              We exist to make it happen.
            </h1>
          </div>

          <div
            className="pt-10 pb-12 md:pt-40 md:pb-30"
            style={backgroundImgStyle}
          ></div>
          {/* Page header */}

          <div>
            <br></br>
            <h2 className="h2 text-black" style={{ color: "#08c5d6" }}>
              CORPORATE PROFILE
            </h2>

            <br></br>
            <h5 className="h4 text-black">MINING</h5>
            <h6 className="h6 text-black">
              To strengthen the human resources base for the development of the
              requisite skill and expertise. To maintain high level of customer
              satisfaction by ensuring supply of quality products. To improve
              the socio-economic environment to brighten the growth prospect of
              the people living in and around mines
            </h6>

            <br></br>
            <h4 className="h4 text-black">CONSTRUCTION</h4>
            <h6 className="h6 text-black">
              To be a leading construction company in the global market. To
              become the customers most preferred choice by attaining excellence
              in quality and timely completed value added projects. To provide
              the highest level of service in the constrcution industry while
              offering superior craftsmanship to every project ORCA handled.
            </h6>

            <br></br>
            <h4 className="h4 text-black">WASTE MANAGEMENT</h4>
            <h6 className="h6 text-black">
              To be the leading company in reducing the environmental and health
              hazardsthat arise from indiscriminate dumping of waste and
              pollution of natural resources like the land, sea and air in the
              world.
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
}
