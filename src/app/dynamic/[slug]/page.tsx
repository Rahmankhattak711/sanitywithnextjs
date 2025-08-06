"use client";

import React, { useEffect, useState } from "react";
import { PortableText } from "@portabletext/react";
import { useParams } from "next/navigation";
import { client } from "@/lib/sanity";
import NotFound from "@/app/not-found";
import Loading from "@/app/loading";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import Product from "../components/Product";

export default function DynamicPage() {
  const { slug } = useParams();
  const [pageData, setPageData] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!slug) return;

        const data = await client.fetch(
          `*[_type == "dynamicGenPage" && slug.current == $slug][0]{
            title,
            slug,
            body {
              body[] {
                _type,
                _key,
                ...,
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

        setPageData(data);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) return <Loading />;
  if (!pageData) return <NotFound />;

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 py-10 px-4">
      <div className="p-8 bg-white w-full max-w-5xl rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 border-b pb-4">
          {pageData.title}
        </h1>

       <div className="space-y-8">
         {pageData.body?.body?.map((block: any) => (
          <PortableText value={block} key={block._key} />
        ))}
       </div>

        <Hero />
        <Contact />
        <Product />
      </div>
    </div>
  );
}
