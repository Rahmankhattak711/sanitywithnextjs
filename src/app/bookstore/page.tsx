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
      {/* Beautiful Header */}
      <h1 className="text-4xl font-extrabold text-center mb-14 text-gray-900 ">
         Welcome to our <span className="text-blue-600">BookStore</span>
      </h1>

      {/* Books Grid */}
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {books.map((book) => (
          <Link href={`/bookstore/${book._id}`} key={book._id}>
            <div className="group cursor-pointer bg-white rounded-2xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg">
              {/* Book Image */}
              {book.imageUrl && (
                <img
                  src={book.imageUrl}
                  alt={book.title}
                  className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              )}

              {/* Book Info */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
                    {book.title}
                  </h2>
                  <span className="text-sm font-semibold text-blue-600">
                    ${book.price}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {book.description}
                </p>

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
