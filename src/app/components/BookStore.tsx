"use client";

import { client } from "@/lib/sanity";
import imageUrlBuilder from "@sanity/image-url";
import React, { useState, useEffect } from "react";
import Link from "next/link";
// import { FaTrash } from "react-icons/fa";

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

export default function BookStore() {
  const [books, setBooks] = useState<any[]>([]);

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

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="px-6 py-12 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Welcome to our BookStore
      </h1>

      <div className="grid relative gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {books.map((book) => (
          <Link href={`/bookstore`} key={book._id}>
            <div className="cursor-pointer bg-white rounded-2xl shadow-sm overflow-hidden transition hover:shadow-xl">
              {/* Optional: Delete icon
              <FaTrash
                onClick={() => deleteBook(book._id)}
                className="size-6 text-red-500 absolute cursor-pointer"
              /> */}
              {book.imageUrl && (
                <img
                  src={book.imageUrl}
                  alt={book.title}
                  className="w-full h-56 object-cover"
                />
              )}
              <div className="p-5">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {book.title}
                  </h2>
                  <span className="text-sm font-bold text-indigo-600">
                    ${book.price}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                  {book.description}
                </p>

                {book.publishedAt && (
                  <p className="text-gray-400 text-xs">
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
