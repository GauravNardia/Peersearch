import Navbar from "@/components/shared/Navbar";
import "../globals.css";

const AuthLayout = async({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

  return (
    <section className="w-full min-h-screen flex justify-center items-center">
      <div className="mx-auto px-4 py-3">
          <main className="w-full text-white">{children}</main> 
      </div>
    </section>
  );
}

export default AuthLayout