import React from "react";
import aboutMainImage from "../assets/Images/aboutMainImage.png";
import HomeLayout from "../layout/HomeLayout";
const AboutUs = () => {
  return (
    <>
      <HomeLayout>
        <div className="pl-20 pt-6 flex flex-col text-white">
          <div className="flex items-center gap-5 max-10">
            <section className="w-1/2 space-y-10">
              <h1 className="text-5xl text-yellow-500 font-semibold">
                Affordable and quality education
              </h1>
              <p className="text-xl text-gray-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti nisi odio similique quod! Hic architecto nam nobis
                possimus repudiandae iste veniam sequi doloribus cum, magnam
                porro corrupti, quos modi laboriosam in consectetur sint
                perferendis minima. Dolor error repudiandae praesentium vitae,
              </p>
            </section>
            <div className="w-1/2">
              <img
                src={aboutMainImage}
                alt="about image"
                // className="drop-shadow-2xl"
                style={
                  {
                    //   filter: "drop-shadow(0px 10px 10px rgb(0,0,0));",
                  }
                }
              />
            </div>
          </div>
        </div>
        ;
      </HomeLayout>
    </>
  );
};

export default AboutUs;
