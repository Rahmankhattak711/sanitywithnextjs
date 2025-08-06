"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { client } from "@/lib/sanity";
import NotFound from "@/app/not-found";
import Loading from "@/app/loading";

export default function Contact() {
  const { slug } = useParams();
  const [contactBlock, setContactBlock] = useState<any | null>(null);
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
                name,
                email,
                message,
                button
              }
            }
          }`,
          { slug }
        );

        const contact = data?.body?.body?.find((b: any) => b._type === "contact");
        setContactBlock(contact);
      } catch (err) {
        console.error("Error fetching contact data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) return <Loading />;
  if (!contactBlock) return <NotFound />;

  return (
    <div className="p-8 bg-gray-100 border border-gray-200 rounded-md mx-auto mt-8">
      <h3 className="text-2xl font-semibold text-gray-700 mb-4">Contact</h3>
      <div className="space-y-2 text-gray-800">
        <p>
          <strong>Name:</strong> {contactBlock.name}
        </p>
        <p>
          <strong>Email:</strong> {contactBlock.email}
        </p>
        <p>
          <strong>Message:</strong> {contactBlock.message}
        </p>
      </div>
      <button className="mt-6 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition">
        {contactBlock.button || "Submit"}
      </button>
    </div>
  );
}
