"use client";
import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["About", "Products", "ContactUs"];

  return (
    <Navbar
      shouldHideOnScroll
      height={"4rem"}
      maxWidth="full"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        base: "bg-grey-950 backdrop-blur-sm",
      }}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden mr-4" justify="center">
        <Link href="/">
          <img className="w-20 sm:w-40" src="brandLogo.png" />
        </Link>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-10" justify="end">
        <NavbarBrand>
          <Link href="/">
            <img className="w-40" src="brandLogo.png" />
          </Link>
        </NavbarBrand>
        <NavbarItem>
          <Link
            href="/about"
            className=" text-stone-600 text-large hover:text-red-500"
          >
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/products"
            className=" text-stone-600 text-large hover:text-red-500"
          >
            Products
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/contact"
            className=" text-stone-600 text-large hover:text-red-500"
          >
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-slate-900">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full  text-slate-500 text-large hover:text-red-500"
              href="#"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
