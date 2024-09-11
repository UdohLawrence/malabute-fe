import { Carousel } from "flowbite-react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";

export function Testimonials() {
  return (
    <>
      <SectionHeading title="Testimonials" />
      <div className="max-w-6xl min-h-32 bg-white shadow-md mt-1 mb-3 dark:bg-gray-600 px-8 py-6 mx-auto">
        <Carousel>
          <div className="flex mx-auto flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <Image
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={"/sterling-white.jpg"}
              alt="Sterling White"
              width={384}
              height={384}
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Sterling White
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                I have worked with Jason Malabute since fall of 2020. In that time
                I observed his endless dedication to learning and desire to
                achieve the goals put in front of him. I particularly remember
                the countless times of his eagerness to find answers and not
                being afraid to ask questions to better understand the industry.
              </p>
            </div>
          </div>

          <div className="flex flex-col mx-auto items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <Image
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={"/fae-bautista.jpg"}
              alt=""
              width={384}
              height={384}
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Fae Bautista
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Jason Malabute is a huge inspiration to me. We have been working
                together for years. Jason is relentless, always striving to be
                his best version, very diligent and smart, despite the first
                impression of him. Jason communicates very well, and his
                language is real estate.
              </p>
            </div>
          </div>

          <div className="flex mx-auto flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <Image
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={"/nick-giuliouni.jpg"}
              alt="Nick Giuliouni"
              width={384}
              height={384}
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Nick Giuliouni
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Jason is an incredibly dedicated investor who is willing to
                swing big. He is always willing to lend a helping hand to those
                around him. If I were putting a bet on someone to make it big -
                I would bet on Jason.
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
}
