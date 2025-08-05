export async function getBooks(setBooks: any, client: any) {
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
