"use client";

import { useEffect, useState } from "react";
import { client } from "@/lib/sanity";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

export default function Header() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function getData() {
      const query = `*[_type == "header"][0]{
        logo,
        navLinks
      }`;
      const result = await client.fetch(query);
      setData(result);
    }

    getData();
  }, []);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        {/* Logo and Title */}
        <div className="flex items-center gap-3">
          {data?.logo && (
            <img
              src={urlFor(data.logo).width(48).height(48).url()}
              alt="Logo"
              className="w-12 h-12 rounded-full object-cover hover:scale-105 transition-transform duration-300"
            />
          )}
          <span className="text-2xl font-bold text-gray-800 tracking-tight">
            Bookstore
          </span>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex gap-6 text-base font-medium">
            {data?.navLinks?.map((link: any) => (
              <li key={link.label}>
                <Link
                  href={link.url}
                  className="text-gray-600 hover:text-blue-600 hover:underline transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
