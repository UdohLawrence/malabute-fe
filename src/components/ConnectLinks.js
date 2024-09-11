import Link from "next/link";
import Image from "next/image";
import Phone from "../../public/phone.svg";
import Email from "../../public/email.svg";
import Instagram from "../../public/instagram.svg";
import Facebook from "../../public/facebook.svg";
import Twitter from "../../public/Twitter.svg";

const ConnectLinks = () => {
  return (
    <div className="flex items-center justify-between px-6 py-5 bg-white dark:bg-gray-500 text-gray-900 dark:text-white">
      <div className="flex space-x-4">
        <Link
          href="tel:555-5555"
          className="flex items-center justify-center space-x-1 border-r-2 px-3"
        >
          <Image
            src={Phone}
            alt="Phone"
            width={25}
            height={25}
            className="fill-white"
          />
          <span className="hidden md:inline">555-5555</span>
        </Link>
        <Link href="mailto:jason@malabutecpa.com">
          <Image src={Email} alt="Email" width={25} height={25} />
        </Link>
      </div>
      <div className="flex space-x-4">
        <Link href="https://www.facebook.com">
          <Image src={Facebook} alt="Facebook" width={25} height={25} />
        </Link>
        <Link href="https://www.twitter.com">
          <Image src={Twitter} alt="Twitter" width={25} height={25} />
        </Link>
        <Link href="https://www.instagram.com">
          <Image src={Instagram} alt="Instagram" width={25} height={25} />
        </Link>
      </div>
    </div>
  );
};

export default ConnectLinks;
