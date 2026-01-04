import SEO from "../components/SEO";

export default function ClientSEO() {
  return (
    <>
      <SEO
        title="Client Side SEO"
        description="SEO behavior and limitations in client-rendered React apps"
      />

      <article className="prose max-w-3xl">
        <h1>Client Side SEO in React</h1>

        <p>
          In a client-side rendered React application, content and meta tags are
          injected using JavaScript after the initial HTML load.
        </p>

        <h2>What Google Sees</h2>
        <ul>
          <li>Empty HTML on first load</li>
          <li>JavaScript-rendered content later</li>
          <li>Delayed indexing</li>
        </ul>

        <blockquote>
          Client-side SEO works, but it is not optimal for content-heavy
          websites.
        </blockquote>
      </article>
    </>
  );
}
