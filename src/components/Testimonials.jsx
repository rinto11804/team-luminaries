import * as React from "react";

const testimonial = [
  {
    company_name: "NASA",
    description:
      "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”",
    person: "lio",
  },
  {
    company_name: "NASA",
    description:
      "“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”",
    person: "lio",
  },
  
];

function Testimonials() {
  return (
    <div className=" px-[100px] py-10">
      <h1 className="text-5xl w-full text-center">Testimonials</h1>
        <div className="flex gap-5 p-5">
          {testimonial.map((items) => (
            <Slider
              key={items.company_name}
              person={items.person}
              description={items.description}
              company_name={items.company_name}
            />
          ))}
        </div>
    </div>
  );
}

function Slider({ description, person, company_name }) {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8 first-letter:">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20 border-8 border-sky-500 rounded-lg" />
      <div className="mx-auto max-w-xl lg:max-w-4xl rounded-sm">
        <img
          className="mx-auto h-12"
          src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg"
          alt=""
        />
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>{description}</p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              className="mx-auto h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">{person}</div>
              <svg
                viewBox="0 0 2 2"
                width={3}
                height={3}
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-gray-600">{company_name}</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export default Testimonials;
