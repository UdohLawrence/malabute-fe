import Link from "next/link";
import Image from "next/image";

const ConnectLinks = () => {
  return (
    <div className="w-full bg-gray-200 py-1 px-4 sm:px-2">
      <div className="flex items-center justify-between max-w-6xl mx-auto py-3">
        <div className="flex">
          <Link
            href="tel:555-5555"
            className="flex items-center justify-center gap-2 border-r-1 border-l-1 px-3"
          >
            <Image
              src={"/phone.svg"}
              alt="Phone"
              width={20}
              height={20}
              className="fill-white"
            />
            <span className="hidden md:inline">555-5555</span>
          </Link>
          <Link href="mailto:jason@malabutecpa.com" className="px-3 border-r-1">
            <Image src={"/email.svg"} alt="Email" width={20} height={20} />
          </Link>
        </div>
        <div className="flex">
          <Link href="https://www.facebook.com" className="px-3 border-r-1">
            <Image
              src={"/facebook.svg"}
              alt="Facebook"
              width={20}
              height={20}
            />
          </Link>
          <Link href="https://www.twitter.com" className="px-3 border-r-1">
            <Image src={"/twitter.svg"} alt="Twitter" width={20} height={20} />
          </Link>
          <Link href="https://www.instagram.com" className="px-3 border-r-1">
            <Image
              src={"/instagram.svg"}
              alt="Instagram"
              width={20}
              height={20}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConnectLinks;
