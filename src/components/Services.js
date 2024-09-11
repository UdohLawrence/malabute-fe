import SectionHeading from "@/components/SectionHeading";
import Card from "./Card";

const Services = () => {
  const servicesList = [
    {
      title: "Accounting",
      description:
        "Good accounting and bookkeeping are crucial for real estate investors and passive investors to accurately track the financial performance of their properties. Our specialized accounting services provide detailed financial reports and cash flow monitoring, helping you make informed decisions while saving valuable time.",
    },
    {
      title: "Tax Planning",
      description:
        "We stay in regular contact with you throughout the year to plan and maximize your tax savings. Our focus is on high-net-worth individuals and high-income earners involved in real estate, ensuring you get the best strategies for your financial success.",
    },
    {
      title: "Tax Preparation",
      description:
        "Ensure your tax documents are prepared and distributed on time, whether it’s for your individual tax needs or meeting the demands of your passive investors. Our timely and accurate tax preparation services are designed to keep you compliant and stress-free.",
    },
    {
      title: "Payroll Services",
      description:
        "Manage payroll efficiently and stay compliant with state and federal payroll tax laws.",
    },
    {
      title: "Advisory",
      description:
        "Get expert advice on structuring and growing your real estate investments for success. We help you make informed decisions and optimize your real estate investment portfolio.",
    },
  ];
  return (
    <>
      <SectionHeading title="Our Services" />
      <Card>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 shadow max-w-6xl mx-auto gap-4 p-4 flex-wrap">
          {servicesList.map((service) => (
          <div
            key={service.title}
            className="w-full max-w-sm p-6 mx-auto bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {service.title}
            </h3>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {service.description}
            </p>
          </div>
        ))}
        </div>
      </Card>
    </>
  );
};

export default Services;
