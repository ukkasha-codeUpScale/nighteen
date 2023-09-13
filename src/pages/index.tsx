import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import Features from "../components/features";
import img1 from "../../public/1.jpg";
import img2 from "../../public/2.jpg";
import img3 from "../../public/3.jpg";
import img4 from "../../public/4.jpg";
import img5 from "../../public/5.jpg";
import img6 from "../../public/6.jpg";
import img7 from "../../public/7.jpg";
import bgimage from "../content/bgimage.jpg";
import logoimg from "../../public/pngwing.png";
import Fullscreen  from '../components/fullscreen'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className=" ">
      <Navbar />
  
      <video autoPlay={true} muted={true} loop={true} id="BgVideo" className="filter contrast-50 max-h-min"  >
        <source src="https://dayinterpretingdev.daydevelopers.com/assets/public/2022/images/header-banner-video.mp4"
          type="video/mp4" />
      </video>


      <div className="absolute grid grid-cols-7  bottom-0   w-full ">
        <Features imageurl={img1} logoimg={logoimg} />
        <Features imageurl={img2} logoimg={logoimg} />
        <Features imageurl={img3} logoimg={logoimg} />
        <Features imageurl={img4} logoimg={logoimg} />
        <Features imageurl={img5} logoimg={logoimg} />
        <Features imageurl={img6} logoimg={logoimg} />
        <Features imageurl={img7} logoimg={logoimg} />
      </div>
    
    </div>

  );
}
