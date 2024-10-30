"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { Card } from "@nextui-org/card";
import { Link } from "@nextui-org/link";
import { Tabs, Tab } from "@nextui-org/tabs";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

import { ThemeSwitch } from "@/components/theme-switch";

export const Navbar = () => {
  const pathname = usePathname();

  const items = [
    {
      key: "/",
      label: "Главная",
    },
    {
      key: "about",
      label: "О нас",
    },
    {
      key: "news",
      label: "Новости",
    },
    {
      key: "rules",
      label: "Правила",
    },
  ];

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="font-bold text-inherit">FactoryCraft</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent
        className="hidden md:inline-flex justify-center"
        justify="center"
      >
        <Tabs aria-label="Options" radius="full" selectedKey={pathname}>
          <Tab key="/" as={NextLink} href="/" title="Главная" />
          <Tab key="/about" as={NextLink} href="/about" title="О нас" />
          <Tab key="/news" as={NextLink} href="/news" title="Новости" />
          <Tab key="/rules" as={NextLink} href="/rules" title="Правила" />
        </Tabs>
      </NavbarContent>
      <NavbarContent
        className="inline-flex gap-4 basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem>
          <Card className="flex flex-row gap-3 p-2">
            <Link href="https://t.me/FactoryCraftNews">
              <FaTelegramPlane
                className="hover:opacity-80 text-default-500"
                size={22}
              />
            </Link>
            <Link>
              <FaYoutube
                className="hover:opacity-80 text-default-500"
                size={22}
              />
            </Link>
          </Card>
        </NavbarItem>
        <NavbarItem className="inline-flex">
          <ThemeSwitch />
        </NavbarItem>
        <Dropdown>
          <DropdownTrigger>
            <Link
              as="button"
              className="md:hidden text-default-500 hover:opacity-80 inline-flex bg-transparent"
            >
              <IoMenu size={22} />
            </Link>
          </DropdownTrigger>
          <DropdownMenu aria-label="Actions" items={items} variant="flat">
            {(item) => (
              <DropdownItem
                key={item.key}
                className="data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground"
                href={item.key}
              >
                {item.label}
              </DropdownItem>
            )}
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </NextUINavbar>
  );
};
