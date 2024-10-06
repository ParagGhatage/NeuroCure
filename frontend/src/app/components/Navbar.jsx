"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../../app/components/ui/navbar-menu";
import { cn } from "../../app/lib/utils";
import Link from "next/link";


export default function Navbar({
  className
}) {
  const [active, setActive] = useState(null);
  return (
    (<div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <Link href="/">
        
        <MenuItem setActive={setActive} active={active} item="Home">
          
        </MenuItem>
        </Link>
        <Link href="/about">
        <MenuItem setActive={setActive} active={active} item="About">
          
        </MenuItem>
        </Link>
        <Link href="/contact">
        <MenuItem setActive={setActive} active={active} item="Contact us">
          
        </MenuItem>
        </Link>
      </Menu>
    </div>)
  );
}
