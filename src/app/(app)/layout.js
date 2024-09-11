import FooterComponent from "@/components/FooterComponent";
import Navbar from "@/components/Navbar";


const AppLayout = ({ children }) => {
  
  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen mt-3">
        {children}
      </main>
      <FooterComponent />
    </>
  );
};

export default AppLayout;
