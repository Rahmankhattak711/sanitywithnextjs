import { client } from "@/lib/sanity";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

export default async function BookDetailPage({ params }: { params: { id: string } }) {
  const query = `*[_type == "book" && _id == $id][0]{
    title,
    price,
    description,
    publishedAt,
    "imageUrl": image.asset->url,
    contant
  }`;

  const book = await client.fetch(query, { id: params.id });

  if (!book) {
    return (
      <div className="p-10 text-center text-gray-500 text-lg">
         Book not found.
      </div>
    );
  }

  return (
    <div className="px-6 py-16 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 sm:p-12">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">
          {book.title}
        </h1>

        {/* Image */}
        {book.imageUrl && (
          <img
            src={book.imageUrl}
            alt={book.title}
            className="w-full h-80 object-cover rounded-xl mb-6 shadow-md"
          />
        )}

        {/* Price and Description */}
        <div className="mb-6">
          <p className="text-2xl font-semibold text-blue-600 mb-2">
            ${book.price}
          </p>
          <p className="text-gray-700 text-base">{book.description}</p>
        </div>

        {/* Rich Content */}
        {book.contant?.body && (
          <div className="prose prose-lg prose-blue max-w-none mt-8">
            <PortableText value={book.contant.body} />
          </div>
        )}

        {/* Publish Date */}
        {book.publishedAt && (
          <p className="mt-10 text-sm text-gray-500 text-right">
            📅 Published on{" "}
            {new Date(book.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        )}
      </div>
    </div>
  );
}
