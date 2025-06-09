import react from "react";
import Image from "next/image";
import ceopic from "../images/ceo-BOUBE_YP.jpeg";

export default function About() {
  return (
    <div className="bg-[#f5f5f5] py-20 ">
      <div className="max-w-7xl mx-10">
        <div>
          <h6 className="text-[#E04448] mb-2 text-[16px] font-semibold">
            ABOUT US
          </h6>
          <h2 className="text-[#122344] capitalize font-extrabold text-[30px]">
            <span className=" border-b-3 border-[#E04448]">Soaring</span> to New
            Heights
          </h2>
          <div className="space-y-6">
            <p className="text-lg text-[#333C] py-5">
              Tiercel Consulting takes its name from the male falcon—swift,
              precise, and reliable. Like our namesake, we help students
              navigate the complex journey of studying abroad with speed and
              accuracy, guiding them to prestigious institutions in the UK, USA,
              Canada, Ireland, Australia, Europe. Our foundation is built on
              trust, transparency, and a genuine passion for empowering student
              success.
            </p>
            <div className="bg-white rounded-xl shadow-md overflow-hidden active">
              <div className="md:flex">
                {/* ************************************** */}
                <div className="md:w-1/3 lg:w-1/4">
                  <div className="h-64 md:h-full relative">
                    <div className="absolute inset-0 flex items-center justify-center bg-[#132244]">
                      <Image src={ceopic} alt="ceopic" />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <div className="flex justify-center space-x-6 text-white">
                        <div className="text-center">
                          <p className="text-3xl font-bold">15+</p>
                          <p className="text-sm opacity-80">Years Experience</p>
                        </div>
                        <div className="text-center">
                          <p className="text-3xl font-bold">5000+</p>
                          <p className="text-sm opacity-80">Students Placed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ***************** */}

                <div className="p-8 md:w-2/3 lg:w-3/4">
                  <div className="text-[#E04448] font-semibold">LEADERSHIP</div>
                  <h3 className="text-2xl font-bold text-[#0A2342]">
                    Meet Our Founder & CEO
                  </h3>
                  <div className="mt-2">
                    <div className="flex items-center mb-4">
                      <h4 className="text-[#0A2342] text-xl font-bold">
                        Mahmood Ur Rehman
                      </h4>
                      <span className="mx-2 font-extrabold text-[#E04448]  pb-4">
                        .
                      </span>
                      <p className="text-[#E04448]">
                        Founder & Chief Executive Officer
                      </p>
                    </div>
                    <p className="mb-4 text-[#333333CC]">
                      Driven by a clear vision to revolutionize the educational
                      consulting landscape, Mahmood founded Tiercel Consulting.
                      He masterfully combines his deep-seated industry expertise
                      and an extensive network of relationships with top-tier
                      institutions worldwide with genuine, personalized care for
                      each student's journey, ensuring Tiercel clients receive
                      unparalleled opportunities and insightful guidance.
                    </p>
                    <p className="mb-4 text-[#333333CC]">
                      With over 15+ years of shaping future of students, Mahmood
                      Ur Rehman brings a wealth of experience and a deep passion
                      for empowering students to achieve their academic
                      ambitions abroad. His journey is built on a genuine
                      commitment to guiding scholars through every step of their
                      international education.
                    </p>
                    <p className="mb-4 text-[#333333CC]">
                      His expertise was significantly sharpened during his
                      impactful tenure with Study Group, where he demonstrated
                      exceptional leadership by adeptly spearheading the
                      development of the crucial UK and US markets within
                      Pakistan. Furthermore, Mahmood skillfully managed the
                      broader dynamic South Asia market, encompassing key
                      countries like India, Bangladesh, and Sri Lanka,
                      showcasing his versatile market acumen.
                    </p>
                    <p className="mb-4 text-[#333333CC]">
                      As a distinguished foreign graduate himself, holding an
                      Education degree from the prestigious Queen Mary
                      University of London, Mahmood possesses an invaluable
                      firsthand understanding of the unique challenges and
                      transformative opportunities that await international
                      students. This personal experience fuels his empathetic
                      and effective approach to consulting.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
