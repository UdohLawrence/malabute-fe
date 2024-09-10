import {
  Footer,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";
import SiteLogo from "../../public/malabute-logo.png";
import Image from "next/image";

const FooterComponent = () => {

  let thisYear = new Date();
  thisYear = thisYear.getFullYear()

  return (
    <Footer container className="w-full text-center bg-gray-500">
      <div className="w-full text-center px-6 py-6">
        <div className="w-full max-w-7xl mx-auto justify-between sm:flex sm:items-center sm:justify-between text-white">
          <FooterCopyright
            href="#"
            by="Malabute"
            year={thisYear}
            className="text-xl font-semibold text-white"
          />
          <FooterLinkGroup>
            <FooterLink href="#" className="text-xl font-semibold text-white">
              Our Team
            </FooterLink>
            <FooterLink href="#" className="text-xl font-semibold text-white">
              Content
            </FooterLink>
            <FooterLink href="#" className="text-xl font-semibold text-white">
              Sample Deal
            </FooterLink>
            <FooterLink href="#" className="text-xl font-semibold text-white">
              Contact Us
            </FooterLink>
          </FooterLinkGroup>
        </div>
      </div>
    </Footer>
  );
}

export default FooterComponent;