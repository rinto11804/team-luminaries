import React from 'react';
import image1 from '../assets/images/img1.jpg';
import image2 from '../assets/images/img2.jpg';
import image3 from '../assets/images/img3.jpg';
const makes = [
    {
        title: "Easy Visa",
        description:
            "“Our space travel agency is committed to providing hassle-free and accessible opportunities for interstellar exploration. We take pride in simplifying the visa process, ensuring that aspiring space tourists can focus on their journey rather than bureaucratic hurdles. Our streamlined procedures and expert guidance make obtaining a space travel visa a straightforward and stress-free experience.“",
        image: image1,
    },
    {
        title: "Entertainment",
        description:
           "“SpaceExplore offers captivating entertainment experiences beyond space travel. From mesmerizing space watching to immersive space-themed events, we enrich every moment of your journey with wonder and excitement.”",
        image: image2, 
    },
    {
        title: "Sports",
        description:
            "“SpaceExplore provides thrilling space sports activities like zero-gravity sports, space swimming, and lunar hiking. With expert guides ensuring safety and fun, these unique adventures are accessible to all, whether you're an aspiring space athlete or simply seeking an exhilarating challenge.”",
        image: image3,    

    },
]
function Card({title,description,image}) {
    return (
        <>
            <div className="lg:w-1/3 rounded-lg transform  shadow-5xl transition-transform hover:-translate-y-2 bg-white  dark:bg-neutral-700 w-full ">
                <div className="relative overflow-hidden bg-cover bg-no-repeat" data-te-ripple-init data-te-ripple-color="light">
                    <img className="rounded-t-lg" src={image} alt="" />
                    <a href="#!">
                        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                    </a>
                </div>
                <div className="p-6">
                    <div>
                        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">{title}</h5>
                        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">{description}</p>
                    </div>
                </div>
            </div>
        </>

    );
}

function Makes() {
    return (
        <>
            <div className="mx-auto max-w-7xl lg:px-8 w-full py-[100px] ">
                    <h1 className='text-4xl font-bold tracking-tight text-black text-center sm:text-6xl w-full'>What makes us <span className='text-amber-300 underline'>Different</span> ?</h1>
                    <div className="p-5 mt-5 flex gap-5 w-full ">
                        {makes.map((items,i) => (
                            <Card
                                title={items.title}
                                key={i}
                                description={items.description}
                                image={items.image}
                            />
                        ))}
                    </div>
                </div>
        </>
    );
}

export default Makes;
