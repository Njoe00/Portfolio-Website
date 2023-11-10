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
    title: "Mail",
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
      className="bg-white flex justify-center flex-col text-start items-start p-6 pl-80"
    >
      <div className="space-y-4">
        <div className="text-base text-blue-500 font-extrabold">CONTACT</div>
        <div className="text-black text-2xl font-extrabold">
          Don&apos;t be shy! Hit me up! 👇
        </div>
      </div>
      <span className="flex-row justify-start items-start flex py-14">
        {contactArray.map((item, index) => {
          return (
            <div
              className="flex-row flex items-center text-gray-400 text-sm"
              key={index}
            >
              <div className="ring-2 ring-offset-8 rounded-full ring-white drop-shadow-xl mr-4 shadow-gray-500">
                <Image
                  className="bg-white"
                  src={item.image}
                  width="22"
                  height="20"
                  alt=""
                  style={{ height: 30, width: 30 }}
                />
              </div>
              <div className="flex flex-col text-start text-base items-start pr-12 ml-2">
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
