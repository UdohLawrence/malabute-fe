import Image from "next/image";
import SiteLogo from "../../public/malabute-logo.png";
import Link from "next/link";

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

  return (
    <nav className="bg-white dark:bg-gray-500 shadow-lg dark:shadow-2xl text-gray-800 dark:text-white">
      <div className="flex justify-between max-w-7xl mx-auto py-5 items-center">
        <div className="flex justify-start items-center space-x-4">
          <Image src={SiteLogo} alt="Site Logo" width={60} height={60} />
          <h1 className="text-2xl font-semibold">Jason Malabute</h1>
        </div>
        <div className="flex space-x-8">
          {layoutRoutes.map((layoutRoute, index) => (
            <Link
              href={layoutRoute.link}
              key={index}
              className="font-semibold text-xl hover:text-blue-600"
            >
              {layoutRoute.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

{
  /* 
<nav class="bg-gray-50 dark:bg-gray-700">
    <div class="max-w-screen-xl px-4 py-3 mx-auto">
        <div class="flex items-center">
            <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                <li>
                    <a href="#" class="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a>
                </li>
                <li>
                    <a href="#" class="text-gray-900 dark:text-white hover:underline">Company</a>
                </li>
                <li>
                    <a href="#" class="text-gray-900 dark:text-white hover:underline">Team</a>
                </li>
                <li>
                    <a href="#" class="text-gray-900 dark:text-white hover:underline">Features</a>
                </li>
            </ul>
        </div>
    </div>
</nav>  
*/
}