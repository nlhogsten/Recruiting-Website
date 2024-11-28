import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google"
import MobileNav from "./components/nav/MobileNav";

export const metadata: Metadata = {
  title: {
    default: "Pacific ScoutLink",
    template: "%s - Pacific ScoutLink"
  }
};
const inter = Inter({ subsets: ["latin"] })
type NavigationItem = {
  name: string;
  href: string;
};
const navigation: NavigationItem[] = [
  { name: "Home", href: "/" },
  { name: "Staffing Expertise", href: "/staffing-expertise" },
  { name: "About", href: "/about" },
  { name: "Job Seekers", href: "/job-seekers" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-gray-900">
          <header className="absolute inset-x-0 top-0 z-50">
            <nav
              aria-label="Global"
              className="flex items-center justify-between p-6 lg:px-8"
            >
              <div className="flex lg:flex-1">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt=""
                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                    className="h-8 w-auto"
                  />
                </a>
              </div>
              <div className="flex lg:hidden">
                <MobileNav/>
              </div>
              <div className="hidden lg:flex lg:gap-x-12">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-md font-semibold text-white bg-blue-400 ring-2 ring-white/45 hover:ring-blue-400/100 rounded-full px-3 py-1"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <a href="/contact" className="text-md font-semibold text-blue-400 bg-white rounded-full px-3 py-1 ring-2 ring-blue-400/45 hover:ring-white/100">
                  Contact <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </nav>
          </header>
        </div>

        <main>{children}</main>
      </body>
    </html>
  );
}
