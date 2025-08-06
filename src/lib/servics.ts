export const fetchData = async ({
  slug,
  setProductBlock,
  setLoading,
  client,
  value,
}: {
  slug: any;
  setProductBlock: any;
  setLoading: any;
  client: any;
  value: string;
}) => {
  try {
    if (!slug) return;

    const data = await client.fetch(
      `*[_type == "dynamicGenPage" && slug.current == $slug][0]{
            body {
              body[] {
                _type,
                _key,
                title,
                description,
                price,
                image {
                  asset->{
                    url
                  }
                }
              }
            }
          }`,
      { slug }
    );

    const product = data?.body?.body?.find((b: any) => b._type === value);
    setProductBlock(product);
  } catch (err) {
    console.error("Error fetching product:", err);
  } finally {
    setLoading(false);
  }
};
