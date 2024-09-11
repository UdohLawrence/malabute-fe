import Card from "@/components/Card";
import SectionHeading from "@/components/SectionHeading";
import React from "react";
import Image from 'next/image'

const Team = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <SectionHeading title="Our Team" />
      <Card>
        <div className="flex mx-auto flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row w-full max-w-6xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <Image
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src={"/jason-profile.jpg"}
            alt="Jason Malabute Profile"
            width={384}
            height={192}
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Jason Malabute
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Jason Malabute, CPA, has been in the accounting industry since
              2013. Over the years, he has honed his skills in tax preparation,
              tax planning, accounting, and payroll services, specifically
              working with high-net-worth individuals involved in real estate.
              His extensive experience has equipped him to address the unique
              financial needs and challenges that come with real estate
              investments. On the real estate side, Jason is not just an
              accountant but also an active investor. Since 2019, he has built a
              diverse portfolio that includes out-of-state rental properties,
              single-family homes, and large multi-family deals. He has
              successfully implemented buy-and-hold and BRRRR strategies and
              currently serves as a general partner on two multi-family
              syndication deals totaling 342 units. His combined expertise in
              accounting and real estate investment allows him to offer
              unparalleled insights and services to his clients.
            </p>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default Team;
