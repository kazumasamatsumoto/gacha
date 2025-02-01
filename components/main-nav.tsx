"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function MainNav() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const menuItems = [
    { label: "タスク管理", href: "/tasks" },
    { label: "ガチャ", href: "/gacha" },
    { label: "アイテム交換所", href: "/exchange" },
    { label: "管理設定", href: "/admin/settings" },
  ];

  return (
    <nav className="bg-gray-900 border-b border-yellow-500/20">
      <div className="container mx-auto p-4 flex items-center justify-between">
        <Link href="/" className="text-yellow-500 font-bold text-xl">
          農業タスク管理
        </Link>
        <div>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-gray-300 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="bg-gray-900 border-t border-yellow-500/20">
          <ul className="flex flex-col space-y-4 p-4">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-300 hover:text-yellow-500"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
