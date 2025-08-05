"use client";

import { client } from "@/lib/sanity";
import imageUrlBuilder from "@sanity/image-url";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

export default function BookStore() {
  const [books, setBooks] = useState<any[]>([]);

  useEffect(() => {
    async function getBooks() {
      const query = `*[_type == "book"]{
        _id,
        title,
        price,
        description,
        publishedAt,
        "imageUrl": image.asset->url
      }`;
      const result = await client.fetch(query);
      setBooks(result);
    }

    getBooks();
  }, []);

  return (
    <div className="px-6 py-16 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
        Explore Our
        <span className="text-blue-600"> Book Collection</span>
      </h1>

      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {books.map((book) => (
          <Link href={`/bookstore/${book._id}`} key={book._id}>
            <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
              {book.imageUrl && (
                <img
                  src={book.imageUrl}
                  alt={book.title}
                  className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              )}

              <div className="p-5">
                <h2 className="text-lg font-semibold text-gray-800 mb-1">
                  {book.title}
                </h2>

                {book.publishedAt && (
                  <p className="text-xs text-gray-400">
                    Published:{" "}
                    {new Date(book.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
