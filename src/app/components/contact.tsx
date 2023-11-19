import React from "react";
import Image from "next/image";

const contactArray = [
  {
    title: "Location",
    image: "/map.png",
    text: "Vancouver, Canada",
    link: "https://www.google.com/maps/place/Vancouver,+BC/@49.2576182,-123.2887105,11z/data=!3m1!4b1!4m6!3m5!1s0x548673f143a94fb3:0xbb9196ea9b81f38b!8m2!3d49.2827291!4d-123.1207375!16zL20vMDgwaDI?entry=ttu",
  },
  {
    title: "Email",
    image: "/mail.png",
    text: "nick.james.joe@gmail.com",
    link: "mailto:nick.james.joe@gmail.com",
  },
];

interface aboutContactProps {
  contactRef: React.RefObject<HTMLElement | undefined>;
}

export default function Contact({ contactRef }: aboutContactProps) {
  return (
    <div
      ref={contactRef as React.RefObject<HTMLDivElement>}
      className="bg-white flex xs:items-center xs:text-center justify-center w-auto flex-col md:text-start md:items-start xl:py-24 xl:px-80 py-16 px-16"
    >
      <div className="space-y-4 flex-row sm:flex-col xs:flex-col">
        <div className="text-base text-blue-500 font-extrabold">CONTACT</div>
        <div className="text-black text-2xl font-extrabold">
          Don&apos;t be shy! Hit me up! 👇
        </div>
      </div>
      <span className="md:flex-row xs:flex-col sm:flex-col xs:justify-items-center xs:justify-center xs:items-center justify-start items-start flex py-8 md:gap-16">
        {contactArray.map((item, index) => {
          return (
            <div
              className="flex-row md:flex-row sm:flex-col xs:flex-col xs:mt-8 sm:mt-8 justify-center flex items-center h-auto w-auto text-gray-400 text-sm"
              key={index}
            >
              <div className="flex ring-2 ring-offset-8 rounded-full w-auto h-auto ring-white drop-shadow-xl sm:mr-0 xs:mr-0 md:mr-8 mr-8 shadow-gray-500">
                <Image
                  className="bg-white flex"
                  src={item.image}
                  width="50"
                  height="50"
                  alt=""
                  style={{ height: 30, width: 30 }}
                />
              </div>
              <div className="flex flex-col xs:items-center sm:items-center md:text-start md:items-start text-start text-base items-start pr-12 ml-2 xs:mt-6 sm:mt-6 sm:p-0 xs:p-0 sm:m-0 xs:m-0">
                <div className="text-base text-black font-black mb-2">
                  {item.title}
                </div>
                <a
                  className="cursor-pointer text-[#767676] font-medium hover:text-blue-500"
                  href={item.link}
                  target="_blank"
                >
                  {item.text}
                </a>
              </div>
            </div>
          );
        })}
      </span>
    </div>
  );
}
