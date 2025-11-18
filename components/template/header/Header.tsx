"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const menuItem = [
  { id: 1, name: "خانه", link: "/" },
  { id: 2, name: "بیمه مسافرتی", link: "/" },
  { id: 3, name: "سفرهای من", link: "/" },
  { id: 4, name: "سایرموارد", link: "/" },
];

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="mx-auto max-w-[1440px] px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
      <div className="flex items-center justify-between py-4">
        {/* Mobile Menu Button */}
        <div className="cursor-pointer md:hidden" onClick={() => setOpen(true)}>
          <Menu size={35} />
        </div>

        <div>
          <Image
            src="/img/logo.png"
            width={150}
            height={150}
            alt="logo bilito"
            priority
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="text-gray-7 flex items-center gap-8 text-lg sm:text-xl">
            {menuItem.map((item) => (
              <li
                key={item.id}
                className="hover:text-primary cursor-pointer transition-all duration-200 ease-in"
              >
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-6">
          <Button className="bg-primary">ورود/ثبت نام</Button>
        </div>
      </div>

      {/* Drawer for all screens */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-80 max-w-[400px] transform bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5">
          <Image
            src="/img/logo.png"
            width={150}
            height={150}
            alt="logo bilito"
            priority
          />
          <X
            className="cursor-pointer"
            size={30}
            onClick={() => setOpen(false)}
          />
        </div>

        <ul className="flex flex-col gap-6 p-6 text-xl">
          {menuItem.map((item) => (
            <li key={item.id} onClick={() => setOpen(false)}>
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </header>
  );
}
export default Header;
