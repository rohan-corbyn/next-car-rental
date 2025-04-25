"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRightCircleIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import CarsRUsLogo from "../cars-for-hire-logo";

import NavLinks from "./NavLinks";
import { UserGroupIcon } from "@heroicons/react/20/solid";
import AdminNavLinks from "../admin-dashboard/admin-navbar/AdminNavLinks";
import loginStatuses from "../admin-dashboard/login-status-cosnstants";

export default function Navbar() {
  const [currentLoginStatus, setCurrentLoginStatus] = useState(
    loginStatuses.OUT
  );

  return (
    <>
      <nav className="sticky top-0 left-0 flex w-full items-center justify-between bg-yellow-300 px-6 py-3 shadow-md">
        <CarsRUsLogo
          currentLoginStatus={currentLoginStatus}
          displayIcon={true}
          hideIfMobile={true}
        />

        <div className="flex items-center gap-6">
          <div className="flex gap-4 text-sm text-gray-700">
            {currentLoginStatus === loginStatuses.ADMIN ? (
              <AdminNavLinks />
            ) : (
              <NavLinks />
            )}
          </div>

          {currentLoginStatus === loginStatuses.OUT ? (
            <div className="relative group inline-block cursor-pointer p-2">
              <div className="flex items-center gap-2 rounded-full bg-orange-600 px-4 py-2 text-sm text-yellow-100 transition hover:bg-orange-700">
                <ArrowRightCircleIcon className="h-5 w-5" />
                Login
              </div>
              <div className="absolute right-0 z-40 mt-2 hidden w-40 rounded-md border bg-white shadow-lg group-hover:block">
                <Link
                  className="block flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100"
                  href="./"
                  onClick={() => setCurrentLoginStatus(loginStatuses.USER)}
                >
                  <UserCircleIcon className="h-5 w-5 text-gray-500" />
                  User
                </Link>

                <Link
                  className="block flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100"
                  onClick={() => setCurrentLoginStatus(loginStatuses.ADMIN)}
                  href="/admin-dashboard"
                >
                  <UserCircleIcon className="h-5 w-5 text-gray-500" />
                  Admin
                </Link>
              </div>
            </div>
          ) : (
            <div className="relative group inline-block cursor-pointer p-2">
              {currentLoginStatus === loginStatuses.ADMIN && (
                <UserGroupIcon className="h-10 w-10 rotate-6 text-orange-300" />
              )}
              {currentLoginStatus === loginStatuses.USER && (
                <Image
                  src="/customers/balazs-orban.png"
                  alt="The logged in user's profile picture."
                  width={32}
                  height={32}
                  className="rounded-full border"
                />
              )}
              <div className="absolute right-0 z-40 mt-2 hidden w-40 rounded-md border bg-white shadow-lg group-hover:block">
                <Link
                  href=""
                  className="block flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100"
                >
                  <UserCircleIcon className="h-5 w-5 text-gray-500" />
                  Profile
                </Link>

                <a
                  onClick={() => setCurrentLoginStatus(loginStatuses.OUT)}
                  href="/"
                  className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm hover:bg-gray-100"
                >
                  <ArrowRightCircleIcon className="h-5 w-5 text-gray-500" />
                  Logout
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
