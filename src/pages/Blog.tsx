import SEO from "../components/SEO";
import { useEffect, useState } from "react";

export default function Blog() {
  const [posts, setPosts] = useState<string[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setPosts(["react-seo-basics", "google-indexing", "csr-limitations"]);
    }, 1200);
  }, []);

  return (
    <>
      <SEO
        title="Blog"
        description="Blog posts loaded dynamically using client-side rendering"
      />

      <section>
        <h1 className="text-3xl font-bold mb-6">Blog</h1>

        {posts.length === 0 ? (
          <p className="text-gray-500">Loading posts...</p>
        ) : (
          <ul className="space-y-4">
            {posts.map((post) => (
              <li key={post} className="p-4 bg-white rounded-lg shadow">
                <h2 className="font-semibold">{post}</h2>
                <p className="text-sm text-gray-600">
                  This content is loaded via JavaScript.
                </p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
