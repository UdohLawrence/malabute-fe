const Card = ({ children }) => {
  return (
    <section className="mt-4 bg-white text-gray-800 dark:bg-gray-600 dark:text-gray-300 shadow-md">
      <div className="max-w-6xl w-full mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default Card;
