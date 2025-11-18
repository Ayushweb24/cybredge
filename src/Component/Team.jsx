import React from "react";
import AyushImage from "../assets/IMG_20250408_215518~2.jpg";
import VishalImage from "../assets/blog-8.jpg";
import PriyaImage from "../assets/blog-8.jpg";
import GautamImage from "../assets/blog-8.jpg";
import AnjaliImage from "../assets/blog-8.jpg";
import AartiImage from "../assets/blog-8.jpg";

export default function Team() {

const teamMembers = [

  {name: "Ayush Rajbhar", role: "Front-End Developer", image: AyushImage},
  {name: "Anjali Kumari", role: "Front-End Developer", image: AnjaliImage},
  {name: "Aarti Yadav", role: "Front-End Developer", image: AartiImage},

  //second row
  {name: "Gautam Kushwaha", role: "Front-End Developer", image: GautamImage},
  {name: "Priya Rai", role: "Front-End Developer", image: PriyaImage},
  {name: "Vishal Maurya", role: "Front-End Developer", image: VishalImage}, 
];

  return (
    <div className="min-h-screen bg-gradient-to-br  from-black to-cyan-900 text-white p-6 pt-40" >

      <div className="max-w-5xl mx-auto backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-10 shadow-xl" data-aos="fade-up" data-aos-delay="100">

        <h1 className="text-5xl font-bold mb-6">Meet Our Team</h1>

        <div className="grid md:grid-cols-3 gap-6">
          {teamMembers.map((member,index) => (

            <div key={index} className="p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-lg text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border border-white/20 shadow-lg" data-aos="fade-up" data-aos-delay="100">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover"/>
              </div>
              {/* <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 "></div>*/}
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="opacity-80 text-sm mt-1">{member.role}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
