"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

interface NavCardProps {
  href: string;
  title: string;
  description: string;
  iconSrc?: string;
}

export function NavCard({ href, title, description, iconSrc }: NavCardProps) {
  return (
    <Link href={href}>
      <div className="group relative bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-yellow-500/50 transition-all">
        <div className="flex items-center gap-4">
          {iconSrc ? (
            <div className="w-12 h-12 flex items-center justify-center">
              <Image
                src={iconSrc}
                alt={title}
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
          ) : null}
          <div>
            <h2 className="text-xl font-semibold text-yellow-500 group-hover:text-yellow-400">
              {title}
            </h2>
            <p className="text-gray-400 group-hover:text-gray-300">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
