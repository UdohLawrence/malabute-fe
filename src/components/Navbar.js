"use client";

import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const layoutRoutes = [
    {
      name: "Our Team",
      link: "/team",
    },
    {
      name: "Content",
      link: "/content",
    },
    {
      name: "Sample Deal",
      link: "/deals",
    },
    {
      name: "Contact Us",
      link: "/contact",
    },
  ];

  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <>
      <nav className="bg-white sticky top-0 z-10 dark:bg-gray-500 shadow-lg dark:shadow-2xl text-gray-800 dark:text-white">
        <div className="flex justify-between max-w-6xl mx-auto py-6 px-4 sm:px-6 items-center">
          <div className="flex justify-start items-center">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src={"/malabute-logo.png"}
                alt="Site Logo"
                width={60}
                height={60}
              />
              <h1 className="inline text-2xl font-semibold">
                Jason Malabute
              </h1>
            </Link>
          </div>
          {/*Mobile Menu*/}
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="hidden md:flex gap-8">
              {layoutRoutes.map((layoutRoute, index) => (
                <Link
                  href={layoutRoute.link}
                  key={index}
                  className="font-semibold text-md hover:text-blue-600"
                >
                  {layoutRoute.name}
                </Link>
              ))}
            </div>

            <span
              className="md:hidden text-3xl"
              onClick={() => setOpenMobileMenu(!openMobileMenu)}
            >
              {openMobileMenu ? <FaTimes /> : <GiHamburgerMenu />}
            </span>
            <div className="">
              {openMobileMenu && (
                <div className="flex w-screen flex-col mx-auto items-center justify-center md:hidden">
                  <Link href="/">
                    <h1 className="font-semibold w-full py-6 text-center text-xl hover:text-blue-600 hover:opacity-90">
                      Home
                    </h1>
                  </Link>
                  {layoutRoutes.map((layoutRoute, index) => (
                    <Link
                      href={layoutRoute.link}
                      key={index}
                      className="font-semibold w-full py-6 text-center text-xl hover:text-blue-600 hover:opacity-90"
                    >
                      {layoutRoute.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
