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
    <header className="bg-gray-100 border-b border-gray-200 py-4 px-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
        {data?.logo && (
          <img
            src={urlFor(data.logo).width(40).height(40).url()}
            alt="Logo"
            className="w-10 h-10 rounded-full object-cover"
          />
        )}
        <span className="text-lg font-semibold text-gray-900">Bookstore</span>
      </div>

      {/* Navigation */}
      <nav>
        <ul className="flex gap-6">
          {data?.navLinks?.map((link: any) => (
            <li key={link.label}>
              <Link
                href={link.url}
                className="text-gray-700 cursor-pointer font-medium"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
