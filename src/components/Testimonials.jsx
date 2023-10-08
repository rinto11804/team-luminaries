import * as React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import test_1 from '../assets/images/test_1.webp';
import test_2 from '../assets/images/test_2.webp';
import test_3 from '../assets/images/test_3.webp';

const testimonial = [
  {
    company_name: "StellarTech",
    description:
      "“I embarked on an unforgettable journey with Spacexplore. From the moment I stepped on board, I felt like an astronaut on a mission to the stars. The breathtaking views of Earth from space left me in awe, and the professionalism of the Spacexplore team made me feel safe and comfortable throughout the trip. It's an experience I'll cherish forever.”",
    person: "Jane Smith",
    img: test_1
  },
  {
    company_name: "AstroCorp",
    description:
      "“As a space enthusiast, traveling with Spacexplore was a dream come true. The voyage to the cosmos was smooth and exhilarating. The guides provided fascinating insights about the universe, and I had the chance to witness a spacewalk. It was an out-of-this-world adventure, and I can't wait to go back.”",
    person: "Michael Johnson",
    img: test_2
  },
  {
    company_name: "Galactic Innovations",
    description:
      "“Spacexplore exceeded all my expectations. The launch was breathtaking, and once in space, the feeling of weightlessness was surreal. I got to witness a sunrise from space, and it was unlike anything I've ever seen. Thanks to Spacexplore, I now have memories that are truly beyond Earth.”",
    person: "Sarah Davis",
    img: test_3
  },
];

function Testimonials() {
  return (
    <div className=" px-[100px] py-10">
      <h1 className="text-5xl font-Pbold w-full text-center">Testimonials</h1>

      <div className="flex gap-5 p-5 w-full items-center justify-center">
        <Carousel  autoPlay={true} interval={2000} swipeable={true} infiniteLoop={true}>
          {testimonial.map((items) => (
            <Slider
              key={items.company_name}
              person={items.person}
              description={items.description}
              company_name={items.company_name}
              image={items.img}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

function Slider({ description, person, company_name,image }) {
  return (
    <section className="relative isolate overflow-hidden bg-white py-24 sm:py-32  first-letter: w-full overflow">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="mx-auto max-w-xl lg:max-w-4xl rounded-sm">
        <figure className="mt-10 flex flex-col items-center justify-center">
          <blockquote className="text-center text-xl font-Nitalics leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>{description}</p>
          </blockquote>
          <figcaption className="mt-10 w-20 h-20 rounded-full flex flex-col items-center justify-center">
            <img
              className="mx-auto rounded-full w-full h-full"
              src={image}
              alt=""
            />
          </figcaption>
          <div className="mt-4 flex items-center w-full justify-center space-x-3 text-base">
            <div className="font-semibold text-gray-900">{person} | {company_name}</div>
          </div>
        </figure>
      </div>
    </section>
  );
}

export default Testimonials;
