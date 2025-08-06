"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { client } from "@/lib/sanity";
import NotFound from "@/app/not-found";
import Loading from "@/app/loading";

export default function Hero() {
  const { slug } = useParams();
  const [heroBlock, setHeroBlock] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
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
                buttonText,
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

        const hero = data?.body?.body?.find((b: any) => b._type === "hero");
        setHeroBlock(hero);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) return <Loading />;
  if (!heroBlock) return <NotFound />;

  return (
    <div className="p-8 bg-gray-100 rounded-md flex gap-8">
      <div className=" ">
        {heroBlock.image?.asset?.url && (
          <img
            src={heroBlock.image.asset.url}
            alt={heroBlock.title}
            className="w-full sm:w-60 h-auto object-cover rounded"
          />
        )}
      </div>
      <div className="w-full ">
        <h2 className="text-2xl font-bold text-gray-700 mb-2">
          {heroBlock.title}
        </h2>
        <p className=" text-gray-600 mb-4">{heroBlock.description}</p>
        <button className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700 transition">
          {heroBlock.buttonText}
        </button>
      </div>
    </div>
  );
}
