import {
  Footer,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";

const FooterComponent = () => {

  let thisYear = new Date();
  thisYear = thisYear.getFullYear()

  return (
    <Footer container className="w-full text-center bg-white">
      <div className="w-full text-center px-6 py-6">
        <div className="w-full max-w-6xl flex flex-col gap-4 sm:flex-row mx-auto justify-between sm:items-center sm:justify-between text-white">
          <FooterCopyright
            href="#"
            by="Malabute"
            year={thisYear}
            className="text-xl font-semibold text-gray-600"
          />
          <FooterLinkGroup className="flex flex-col md:flex-row gap-3">
            <FooterLink href="#" className="text-xl font-semibold text-gray-600">
              Our Team
            </FooterLink>
            <FooterLink href="#" className="text-xl font-semibold text-gray-600">
              Content
            </FooterLink>
            <FooterLink href="#" className="text-xl font-semibold text-gray-600">
              Sample Deal
            </FooterLink>
            <FooterLink href="#" className="text-xl font-semibold text-gray-600">
              Contact Us
            </FooterLink>
          </FooterLinkGroup>
        </div>
      </div>
    </Footer>
  );
}

export default FooterComponent;