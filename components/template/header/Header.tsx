import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const menuItem = [
  {id:1,name:"خانه",link:'/'},
  {id:2,name:"بیمه مسافرتی",link:'/'},
  {id:3,name:"سفرهای من",link:'/'},
  {id:4,name:"سایرموارد",link:'/'},
]

function Header() {
  return (
    <header className="">
      <div className="flex  items-center py-4 justify-between">
      <div><Image src="/img/logo.png" width={150} height={150} alt="logo bilito" priority /></div>
      <div>
        <ul className="flex gap-8 text-gray-7 items-center  sm:text-xl text-lg">
          {menuItem.map(item=>(
            <li key={item.id} className="hover:text-primary transition-all ease-in duration-200 cursor-pointer ">
              <Link href={item.link}>
              {item.name}
              </Link>
              </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-6">
        <h3 className="text-lg text-gray-8 gap-2 flex items-center">
          پشتیبانی <Phone size={15} />
        </h3>
        <Button className="bg-primary">ورود/ثبت نام</Button>
      </div>
      </div>

    </header>
  );
}

export default Header;
