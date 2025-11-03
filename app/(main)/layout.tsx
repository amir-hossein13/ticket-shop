import Header from "@/components/template/header/Header";

function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden ">
      <div className="app-container">
        <Header />
      </div>
      <div className="app-container mb-20 flex flex-1 flex-col px-4 md:mb-2">
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}

export default HomeLayout;
