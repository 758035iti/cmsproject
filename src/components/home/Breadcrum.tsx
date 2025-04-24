'use client';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/navigation";
import { breadcrumbArr, newseventsArr } from "@/utils/home";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  waitForAnimate: true,
  autoplay: true,
  autoplaySpeed: 2000,
};

export default function Breadcrumb() {
  const router=useRouter()
  return (

<div className="bg-gray-200 w-full h-[70vh] flex flex-col items-center justify-center ">
  <div className="flex w-full h-full px-20 gap-5 p-2 ">
    <div className="w-full h-[60vh] overflow-hidden relative">
      <Slider {...settings}>
        {breadcrumbArr.map((item:any)=> (
          <div key={item.id} className=" w-full h-screen flex flex-col relative">
            <img
              src={item.img.src}
              alt=""
              className="lg:w-full lg:h-full w-full h-[20rem] object-fill z-50"
            />

            <div className="absolute lg:top-48 lg:left-20 top-10 left-5  w-full h-[20rem] flex flex-col justify-center items-cente bg-opacity-50 text-white p-4">
              {/* <h2 className="text-xl lg:text-6xl w-1/2 font-bold">{item.title}</h2>
              <p className="text-md w-40 lg:w-full lg:text-xl mt-2">{item.content}</p> */}

              {/* <div className="mt-6">
                <button
                  className="bg-red-800 hover:bg-gray-700 text-white font-extrabold  px-1 lg:py-4 lg:px-7 rounded"
                  onClick={() => router.push("/contact")}>
                  CONTACT US
                </button>
              </div> */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
    <div className="w-96 h-[60vh] border-2 border-green-800">
        <div className="bg-green-800 w-full h-10">
          <p className="text-white font-semibold text-center text-2xl p-1">NEWS & EVENTS</p>
        </div>
        <div className="w-full h-[50vh] bg-white flex items-center justify-center">
        <div className=" overflow-hidden relative">
          <style>
            {`
              @keyframes scroll-up {
                0% { transform: translateY(100%); }
                100% { transform: translateY(-100%); }
              }
              .scroll-up {
                animation: scroll-up 10s linear infinite;
              }
            `}
          </style>

          <div className="flex flex-col gap-4 scroll-up h-full overflow-hidden">
            {newseventsArr.map((item: any) => (
              <div key={item.id} className="flex items-center gap-2">
                <p>{item.id}.</p>
                <p className="text-sm lg:text-md font-medium">{item.title}</p>
                <span className="text-red-800">{item.icon}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* <div className='w-full px-20'>
        <p className="font-bold text-lg">Recognised as Scientific and Industrial Research Organisation, Dept. of Scientific & Industrial Research, Govt. of India || National Key Resource Centre, Ministry of Jal Shakti, Govt. of India || Empanelled Training Institute of MoHUA, Govt. of India || Empanelled Agency of Conducting Survey-Related Activities by the Ministry of Statistics & Programme Implementation(MoSPI), Govt. of India ||</p>
  </div> */}

{/* export default function ScrollingMarquee() {
  return ( */}
    <div
      style={{
        width: '100%',
        overflow: 'hidden',
        backgroundColor: '#ffffff',
        padding: '0 1rem',
      }}
    >
      <div
        style={{
          display: 'inline-block',
          whiteSpace: 'nowrap',
          animation: 'marquee 30s linear infinite',
        }}
      >
        <p
          style={{
            fontWeight: 'bold',
            fontSize: '1.125rem', // equivalent to Tailwind's text-lg
            paddingLeft: '5rem',
            paddingRight: '5rem',
            margin: 0,
          }}
        >
          Recognised as Scientific and Industrial Research Organisation, Dept. of Scientific & Industrial Research, Govt. of India || National Key Resource Centre, Ministry of Jal Shakti, Govt. of India || Empanelled Training Institute of MoHUA, Govt. of India || Empanelled Agency of Conducting Survey-Related Activities by the Ministry of Statistics & Programme Implementation(MoSPI), Govt. of India ||
        </p>
      </div>

      {/* Inline CSS keyframes with styled-jsx (Next.js built-in) */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  {/* );
} */}

</div>

  );
}