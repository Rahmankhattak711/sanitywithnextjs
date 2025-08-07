"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { client } from "@/lib/sanity";
import NotFound from "@/app/not-found";
import Loading from "@/app/loading";
import { fetchData } from "@/lib/servics";

export default function Hero() {
  const { slug } = useParams();
  const [productBlock, setProductBlock] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData({ slug, setProductBlock, setLoading, client, value: "hero" })
  }, [slug]);

  if (loading) return <Loading />;
  if (!productBlock) return <NotFound />;

  return (
    <div className="p-8 bg-gray-100 rounded-md flex gap-8">
      <div >
        {productBlock.image?.asset?.url && (
          <img
            src={productBlock.image.asset.url}
            alt={productBlock.title}
          className="w-full sm:w-96 h-auto object-cover rounded"
          />
        )}
      </div>
      <div className="w-full ">
        <h2 className="text-2xl font-bold text-gray-700 mb-2">
          {productBlock.title}
        </h2>
        <p className=" text-gray-600 mb-4">{productBlock.description}</p>
        <button className="bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700 transition">
          {productBlock.buttonText || "Buy Now"}
        </button>
      </div>
    </div>
  );
}
