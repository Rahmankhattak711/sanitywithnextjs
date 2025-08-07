"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { client } from "@/lib/sanity";
import NotFound from "@/app/not-found";
import Loading from "@/app/loading";
import { fetchData } from "@/lib/servics";

export default function Product() {
  const { slug } = useParams();
  const [productBlock, setProductBlock] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData({ slug, setProductBlock, setLoading, client, value: "product" })
  }, [slug]);

  if (loading) return <Loading />;
  if (!productBlock) return <NotFound />;

  return (
    <div className="p-8 mt-8 bg-gray-100 border border-gray-200 rounded-md flex gap-8  ">
      {productBlock.image?.asset?.url && (
        <img
          src={productBlock.image.asset.url}
          alt={productBlock.title}
          className="w-full sm:w-60 h-auto object-cover rounded"
        />
      )}
      <div>
        <h3 className="text-2xl font-bold text-gray-700 mb-2">{productBlock.title}</h3>
        <p className="text-gray-700 mb-2">{productBlock.description}</p>
        <p className="text-lg font-semibold text-gray-800">${productBlock.price}</p>
      </div>
    </div>
  );
}
