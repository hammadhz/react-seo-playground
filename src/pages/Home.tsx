import SEO from "../components/SEO";

export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="Learn how SEO works in a pure React client-side application"
      />

      <section className="space-y-6">
        <h1 className="text-4xl font-bold leading-tight">
          Learn SEO in React (Client Side)
        </h1>

        <p className="text-lg text-gray-600 max-w-3xl">
          This project helps you understand how search engines index client-side
          rendered React applications and what SEO limitations exist.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="p-6 bg-white rounded-xl shadow">
            <h2 className="font-semibold text-lg">Client Rendering</h2>
            <p className="text-sm text-gray-600 mt-2">
              Understand how CSR affects indexing and crawl timing.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow">
            <h2 className="font-semibold text-lg">Meta Tags</h2>
            <p className="text-sm text-gray-600 mt-2">
              Learn how dynamic meta tags behave in React.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow">
            <h2 className="font-semibold text-lg">Google Search</h2>
            <p className="text-sm text-gray-600 mt-2">
              Validate indexing using Google Search Console.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
