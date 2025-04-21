"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRightCircleIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import CarsRUsLogo from "./cars-for-hire-logo";
import NavLinks from "./nav-links";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Replace with actual auth

  return (
    <nav className="fixed top-0 left-0 flex w-full items-center justify-between bg-yellow-300 px-6 py-3 shadow-md">
      <CarsRUsLogo displayIcon={true} hideIfMobile={true} />

      <div className="flex items-center gap-6">
        <div className="flex gap-4 text-sm text-gray-700">
          <NavLinks />
        </div>

        {!isLoggedIn ? (
          <Link
            href="account-dashboard"
            className="flex items-center gap-2 rounded-full bg-orange-600 px-4 py-2 text-sm text-yellow-100 transition hover:bg-orange-700"
          >
            <ArrowRightCircleIcon className="h-5 w-5" />
            Login
          </Link>
        ) : (
          <div className="group relative cursor-pointer">
            <Image
              src="/user-avatar.png"
              alt="User"
              width={32}
              height={32}
              className="rounded-full border"
            />
            <div className="absolute right-0 z-10 mt-2 hidden w-40 rounded-md border bg-white shadow-lg group-hover:block">
              <Link
                href="/profile"
                className="block flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100"
              >
                <UserCircleIcon className="h-5 w-5 text-gray-500" />
                Profile
              </Link>
              <button
                onClick={() => setIsLoggedIn(false)}
                className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm hover:bg-gray-100"
              >
                <ArrowRightCircleIcon className="h-5 w-5 text-gray-500" />
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
