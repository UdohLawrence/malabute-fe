import Link from "next/link";
import Image from "next/image";

const ConnectLinks = () => {
  return (
    <div className="flex items-center justify-between px-6 py-5 bg-white dark:bg-gray-500 text-gray-900 dark:text-white">
      <div className="flex space-x-4">
        <Link
          href="tel:555-5555"
          className="flex items-center justify-center space-x-1 border-r-2 px-3"
        >
          <Image
            src={'/phone.svg'}
            alt="Phone"
            width={25}
            height={25}
            className="fill-white"
          />
          <span className="hidden md:inline">555-5555</span>
        </Link>
        <Link href="mailto:jason@malabutecpa.com">
          <Image src={'/email.svg'} alt="Email" width={25} height={25} />
        </Link>
      </div>
      <div className="flex space-x-4">
        <Link href="https://www.facebook.com">
          <Image src={'/facebook.svg'} alt="Facebook" width={25} height={25} />
        </Link>
        <Link href="https://www.twitter.com">
          <Image src={'/twitter.svg'} alt="Twitter" width={25} height={25} />
        </Link>
        <Link href="https://www.instagram.com">
          <Image src={'/instagram.svg'} alt="Instagram" width={25} height={25} />
        </Link>
      </div>
    </div>
  );
};

export default ConnectLinks;
