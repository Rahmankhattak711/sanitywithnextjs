"use client";

import { useEffect, useState } from "react";
import { client } from "@/lib/sanity";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

export default function Footer() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function getData() {
      const query = `*[_type == "footer"][0]{
        text,
        socialLinks
      }`;
      const result = await client.fetch(query);
      setData(result);
    }

    getData();
  }, []);

  return (
    <footer className="bg-gray-100 border-t border-gray-200  py-8 px-4 text-center md:text-left">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Footer Text */}
        <p className="text-muted text-sm">{data?.text }</p>

        {/* Social Links */}
        <ul className="flex gap-4">
          {data?.socialLinks?.map((link: any) => (
            <li key={link.platform}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 cursor-pointer font-medium"
              >
                {link.platform}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
