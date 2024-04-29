"use client";
import { User } from "@prisma/client";
import Image from "next/image";
import React from "react";
import placeholder from "@/public/Images/placeholder.jpeg";
import useActiveList from "../hooks/useActiveList";
interface AvatarProps {
  User: User;
}

export default function Avatar({ User }: AvatarProps) {
  const { members } = useActiveList();
  const isActive = members.indexOf(User?.email!) !== -1;
  return (
    <div className="relative">
      <div className="relative inline-block rounded-r-full overflow-hidden h-9 w-9 md:h-11 md:w-11">
        <Image
          alt="Avatar"
          src={User?.image || placeholder}
          fill
          className="rounded-full"
        />
      </div>

      {isActive && (
        <span className="absolute block rounded-full bg-green-500 ring-2 ring-white top-0 right-0 h-2 w-2 md:h-3 md:w-3" />
      )}
    </div>
  );
}
