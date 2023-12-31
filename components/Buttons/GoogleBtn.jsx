"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";
import google from "@/public/icons/google-logo.png";

export default function GoogleBtn() {
  return (
    <button
      onClick={() => signIn("google", { callbackUrl: 'http://localhost:3000/member' })}
      className="flex items-center gap-2 shadow-md rounded-md pl-3 hover:scale-105 active:scale-95"
    >
      <Image src={google} height={25} width={25} />
      <span className="bg-blue-500 text-white px-4 py-2">
        Sign In
      </span>
    </button>
  );
}