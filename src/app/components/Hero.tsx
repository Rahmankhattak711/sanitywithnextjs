"use client";

export default function Hero() {
  return (
    <section className=" py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-text mb-6 leading-tight">
          Discover Your Next <br className="hidden sm:block" /> Favorite Book 📚
        </h1>

        <p className="text-muted text-lg mb-8">
          Explore a curated collection of captivating stories, timeless
          classics, and inspiring reads for every kind of reader.
        </p>

        <a
          href="#books"
          className="bg-gray-300 px-8 py-3 rounded-xl font-medium "
        >
          Browse Books
        </a>
      </div>
    </section>
  );
}
