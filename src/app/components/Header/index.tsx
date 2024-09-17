import Link from "next/link";
import Image from "next/image";
import React from "react";

interface ItemMenuProps {
  children: React.ReactNode;
  href: string;
}

function ItemMenu({ children, href }: ItemMenuProps) {
  return (
    <li>
      <Link href={href}>{children}</Link>
    </li>
  );
}

export function Header() {
  return (
    <header className="py-6">
      <div className="container flex items-center justify-between">
        <Link href="#">
          <Image
            src="/assets/images/logo.png"
            alt="Logo"
            width={177}
            height={113}
          />
        </Link>
        <nav>
          <ul className="flex justify-center gap-6">
            <ItemMenu href="#">COMPRAR</ItemMenu>
            <ItemMenu href="#">ALUGAR</ItemMenu>
            <ItemMenu href="#">EMPREENDIMENTOS</ItemMenu>
          </ul>
        </nav>
      </div>
    </header>
  );
}
