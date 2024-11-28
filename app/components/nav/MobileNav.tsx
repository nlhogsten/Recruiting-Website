"use client";
import { useState } from "react";
import Link from "next/link";

type NavigationItem = {
    name: string;
    href: string;
};
const navigation: NavigationItem[] = [
    { name: "Home", href: "/" },
    { name: "Staffing Expertise", href: "/staffing-expertise" },
    { name: "Job List", href: "/about" },
    { name: "Job Seekers", href: "/job-seekers" },
];

export default function MobileNav() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-1 text-white bg-blue-400/80 hover:bg-blue-400"
            >
                <span className="sr-only">Open main menu</span>
                <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6h16.5M3.75 12h16.5M3.75 18h16.5"
                />
                </svg>
            </button>

            {mobileMenuOpen && (
              <div className="fixed inset-0 z-50 bg-gray-900 bg-opacity-75">
                <div className="fixed inset-y-0 right-0 w-64 bg-blue-400 px-6 py-6">
                  <div className="flex items-center justify-between">
                    <Link href="#" className="-m-1.5 p-1.5">
                      <span className="sr-only">Your Company</span>
                      <img
                        alt=""
                        src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                        className="h-8 w-auto"
                      />
                    </Link>
                    <button
                      type="button"
                      onClick={() => setMobileMenuOpen(false)}
                      className="-m-2.5 rounded-md p-2.5 text-white"
                    >
                      <span className="sr-only">Close menu</span>
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/25">
                      <div className="space-y-2 py-6">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-gray-800"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                      <div className="py-6">
                        <Link
                          href="/contact"
                          className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-white hover:bg-gray-800"
                        >
                          Contact
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
        </>
    );

}