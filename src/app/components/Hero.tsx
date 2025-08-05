"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
          Discover Your Next{" "}
          <br className="hidden sm:block" />
          <span className="text-blue-600">Favorite Book</span>
        </h1>

        {/* Subheading */}
        <p className="text-gray-600 text-lg sm:text-xl mb-10">
          Explore a curated collection of captivating stories, timeless
          classics, and inspiring reads for every kind of reader.
        </p>

        {/* Call-to-action button */}
        <Link
          href="/bookstore"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md transition-all duration-300"
        >
          Browse Books
        </Link>
      </div>
    </section>
  );
}
