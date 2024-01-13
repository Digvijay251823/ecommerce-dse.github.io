import { signOut } from "@/auth";
import Image from "next/image";
import React, { useState } from "react";

function Avatar({ data, SignOut }: any) {
  return (
    <div className="flex items-center gap-1">
      <Image
        src={data.image}
        alt={"user"}
        height={30}
        width={30}
        className="rounded-full w-auto "
      />
      <div className="md:flex flex-col gap-1 hidden">
        <p className="font-semibold text-sm">{data.name}</p>
        <p className="text-[7px] line-clamp-1">{data.email}</p>
      </div>
    </div>
  );
}

export default Avatar;
