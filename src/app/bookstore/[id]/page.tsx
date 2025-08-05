import { client } from "@/lib/sanity";
import imageUrlBuilder from "@sanity/image-url";

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
    "imageUrl": image.asset->url
  }`;

  const book = await client.fetch(query, { id: params.id });

  if (!book) {
    return <div className="p-10 text-center">Book not found.</div>;
  }

  return (
    <div className="px-6 py-12 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow p-6">
        <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
        {book.imageUrl && (
          <img
            src={book.imageUrl}
            alt={book.title}
            className="w-full h-80 object-cover rounded mb-4"
          />
        )}
        <p className="text-xl text-indigo-600 font-semibold mb-2">${book.price}</p>
        <p className="text-gray-700 mb-4">{book.description}</p>
        {book.publishedAt && (
          <p className="text-gray-500 text-sm">
            Published on:{" "}
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
