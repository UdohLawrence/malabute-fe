import Card from "@/components/Card";
import SectionHeading from "@/components/SectionHeading";
import { Carousel } from "flowbite-react";
import React from "react";
import deal1 from "../../../../public/deal-1.png";
import deal2 from "../../../../public/deal-2.png";
import deal3 from "../../../../public/deal-3.png";
import deal4 from "../../../../public/deal-4.png";
import Image from "next/image";

const Deals = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <SectionHeading title="Sample Deals" />
      <Card>
        <h2 className="text-xl font-semibold my-3">DISCLAMER</h2>
        <p className="text-base mb-3">
          The following is a sample deal to show the viewers the type of
          properties we are interested in. This is for informational purposes
          only. We do not own these properties. This is not a solicitation in
          any form.
        </p>
      </Card>
      <div className="w-full max-w-md mt-3 mx-auto h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <Image src={deal1} width={300} height={300} alt="Property one" />
          <Image src={deal2} width={300} height={300} alt="Property two" />
          <Image src={deal3} width={300} height={300} alt="Property three" />
          <Image src={deal4} width={300} height={300} alt="Property four" />
        </Carousel>
      </div>
      <Card>
        <div>
          <h3 className="text-xl font-semibold mb-3">Property Condition Before Acquisition</h3>
          <ul>
            <li className="text-sm px-3 py-1">Approx 50% of units out of service due to a fire</li>
            <li className="text-sm px-3 py-1">Significant interior deferred maintenance</li>
            <li className="text-sm px-3 py-1">Collection issues due to inadequate tenant screening</li>
            <li className="text-sm px-3 py-1">Inefficient management systems and procedures</li>
            <li className="text-sm px-3 py-1">Poor curb appeal and public image</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold my-3">Financing Sources</h3>
          <ul>
            <li className="text-sm px-3 py-1">$700k of debt provided by seller</li>
            <li className="text-sm px-3 py-1">
              $200k down payment and $450k in rehab funds provided by investor
              network
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold my-3">Solutions Implemented After Acquisition</h3>
          <ul>
            <li className="text-sm px-3 py-1">Gut rehab of out of service units</li>
            <li className="text-sm px-3 py-1">Modernize appliances and fixtures</li>
            <li className="text-sm px-3 py-1">Sign new leases at market rate</li>
            <li className="text-sm px-3 py-1">Improve tenant screening to ensure reliable collections</li>
            <li className="text-sm px-3 py-1">Rebrand and increase curb appeal</li>
            <li className="text-sm px-3 py-1">Implement efficient management procedures</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold my-3">Key Interior and Exterior Updates</h3>
          <ul>
            <li className="text-sm px-3 py-1">Re-seal and re-stripe the parking lot</li>
            <li className="text-sm px-3 py-1">Put in new signage</li>
            <li className="text-sm px-3 py-1">Fix decks and balconies</li>
            <li className="text-sm px-3 py-1">Reconfigure drainage to flow away from property</li>
            <li className="text-sm px-3 py-1">Cosmetic interior unit updates</li>
            <ul>
              <li className="text-sm px-3 py-1">Two tone interior paint scheme</li>
              <li className="text-sm px-3 py-1">Install formica countertops</li>
              <li className="text-sm px-3 py-1">Refinish cabinets</li>
              <li className="text-sm px-3 py-1">Install vinyl plank flooring</li>
              <li className="text-sm px-3 py-1">New appliances (refrigerator and stove)</li>
            </ul>
          </ul>
        </div>
      </Card>
    </section>
  );
};

export default Deals;
