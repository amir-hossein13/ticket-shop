import Footer from "@/components/template/footer/Footer";
import Header from "@/components/template/header/Header";

function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <div className="bg-gray-1 w-full">
        <Header />
      </div>
      <div className="flex flex-1 flex-col ">
        <main className="flex-1">{children}</main>
      </div>
      <Footer />
    </div>
  );
}

export default HomeLayout;
