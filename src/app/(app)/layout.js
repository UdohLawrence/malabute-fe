import Navbar from "@/components/Navbar";


const AppLayout = ({ children }) => {
  
  return (
    <>
      <Navbar />
      <main className="w-screen mt-3">
        {children}
      </main>
    </>
  );
};

export default AppLayout;
