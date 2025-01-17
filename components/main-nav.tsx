"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ListTodo, Gift, Store, Settings, Home } from "lucide-react";

const navItems = [
  {
    href: "/",
    label: "ホーム",
    icon: Home,
  },
  {
    href: "/tasks",
    label: "タスク",
    icon: ListTodo,
  },
  {
    href: "/gacha",
    label: "ガチャ",
    icon: Gift,
  },
  {
    href: "/exchange",
    label: "交換所",
    icon: Store,
  },
  {
    href: "/admin/settings",
    label: "設定",
    icon: Settings,
  },
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm border-b border-purple-500/20">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center space-x-4">
          {navItems.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "relative px-4 py-2 text-sm font-medium transition-colors hover:text-purple-200",
                pathname === href ? "text-purple-300" : "text-purple-400/60"
              )}
            >
              <div className="flex items-center space-x-2">
                <Icon size={16} />
                <span>{label}</span>
              </div>
              {pathname === href && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-500"
                  layoutId="navbar-indicator"
                />
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
