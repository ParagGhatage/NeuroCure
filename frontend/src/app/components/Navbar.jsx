"use client";

import React, { useState } from "react";
import Link from "next/link";
import { cn } from "../../app/lib/utils";

export default function Navbar({ className }) {
  const [active, setActive] = useState(null);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact us", href: "/contact" },
  ];

  return (
    <nav className={cn("top-5 inset-x-0 mx-auto  z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-2xl  p-5", className)}>
      <ul className="flex justify-center space-x-8">
        {menuItems.map((item) => (
          <li key={item.href}>
            <Link 
              href={item.href} 
              className={cn(
                "px-5 py-3 text-lg font-semibold rounded-lg transition-all duration-300", 
                active === item.label 
                  ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg scale-105" 
                  : "text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-105"
              )}
              onMouseEnter={() => setActive(item.label)}
              onMouseLeave={() => setActive(null)}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
