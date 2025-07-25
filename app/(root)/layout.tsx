import Navbar from "@/components/shared/Navbar";
import "../globals.css";
import { Footer } from "@/components/shared/Footer";

const RootLayout = async({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

  return (
    <section className="w-full bg-neutral-100">
      <div className="max-w-3xl mx-auto px-4 py-3 flex items-center">
        <div className="w-full flex flex-col justify-center items-center min-h-screen">
           <Navbar/>
          <main className="w-full flex-1 text-white">{children}</main> 
          <Footer/>
        </div>
      </div>
    </section>
  );
}

export default RootLayout