import React from "react";
import image1 from "../assets/images/facebook-blue.svg";
import image2 from "../assets/images/linkedin-blue.svg";
import image3 from "../assets/images/twitter-blue.svg";
import image4 from "../assets/images/youtube-blue.svg";
import image6 from "../assets/images/phone-solid.svg";
import image7 from "../assets/images/envelope-solid.svg";
import image8 from "../assets/images/location-arrow-solid.svg";

const Contacts = [
  {
    img: image6,
    detail_1: "+(91) 8086222806 [Phone No]",
    detail_2: "+(91) 8086222806 [Phone No]",
  },
  {
    img: image7,
    detail_1: "+(91) 8086222806 [Phone No]",
    detail_2: "+(91) 8086222806 [Phone No]",
  },
  {
    img: image8,
    detail_1: "+(91) 8086222806 [Phone No]",
    detail_2: "+(91) 8086222806 [Phone No]",
  },
];
function Contact() {
  return (
    <>
      <footer className="border-t-4 border-t-gray-400  py-3 h-screen flex items-center justify-center ">
        <div className="py-5">
            <div className="top">
              <h1 className="text-center text-6xl font-Pbold ">
                Contact Us
              </h1>

              <div className="flex justify-center items-center w-full gap-3">
                {Contacts.map((contact) => (
                  <div className="flex flex-col justify-center relative overflow-hidden sm:py-12">
                    <div className="max-w-7xl mx-auto px-5">
                      <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

                        <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                          <div className="space-y-2 flex flex-col items-center justify-center gap-3">
                            <a href="#">
                              <img
                                src={contact.img}
                                className="w-[50px]"
                                alt=""
                              />
                            </a>
                            <div>{contact.detail_1}</div>
                            <div>{contact.detail_1}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-center text-4xl py-3 font-Nitalics">
                "Your Prosperity Is Our Priority"
              </p>

              <ul className="flex items-center justify-center gap-5 py-5">
                <li>
                  <a href="#">
                    <img src={image1} className="w-7" alt="icon" />{" "}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={image2} className="w-7" alt="icon" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={image3} className="w-7" alt="icon" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={image4} className="w-7" alt="icon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
      </footer>
    </>
  );
}

export default Contact;
