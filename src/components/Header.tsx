"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { useSession } from "@/stores/session.store";

interface ILink {
  href: string;
  name: string;
}

const links: ILink[] = [
  { href: "/dashboard", name: "Home" },
  { href: "/todos", name: "Todos" },
  { href: "/settings", name: "Settings" },
];

const Header = () => {
  const path = usePathname();
  const router = useRouter();
  const logout = useSession((state) => state.logout);
  const handleClick = async () => {
    await logout();
    router.push("/");
  };

  return (
    <div className="flex justify-evenly mb-4 py-4 border-b border-slate-700">
      {links.map(({ href, name }) => (
        <Link
          className={
            "border border-slate-500 px-2 py-1 rounded-md" +
            (path === href ? " border-yellow-500" : "")
          }
          href={href}
          key={href + name}
        >
          {name}
        </Link>
      ))}
      <Button onClick={handleClick} variant={"destructive"}>
        Logout
      </Button>
    </div>
  );
};

export default Header;
