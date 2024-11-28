"use client";
import Link from "next/link";

export function AboutButton() {
    return (
        <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
            href="/contact"
            className="rounded-md bg-blue-400/80 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
                Hire With Us
            </Link>
            <Link href="/staffing-expertise" className="text-sm/6 rounded-full px-3 py-1 font-semibold text-white ring-2 ring-white/45 hover:ring-white/100">
                About <span aria-hidden="true">→</span>
            </Link>
        </div>
    );
}

export function LocationsButton() {
    return (
        <div className="relative rounded-full px-3 py-1 text-sm/6 text-white ring-2 ring-white/45 hover:ring-white/100">
            See where we hire{' '}
            <Link href="/about" className="font-semibold text-white">
                <span aria-hidden="true" className="absolute inset-0" />
                <span aria-hidden="true">&rarr;</span>
            </Link>
        </div>
    );
}