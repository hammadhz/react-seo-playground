import SEO from "../components/SEO";

export default function About() {
  return (
    <>
      <SEO title="About" description="About the React SEO Playground project" />

      <div className="max-w-3xl space-y-4">
        <h1 className="text-3xl font-bold">About This Project</h1>

        <p className="text-gray-600">
          React SEO Playground is built to demonstrate how search engines handle
          client-side rendered React applications.
        </p>
      </div>
    </>
  );
}
