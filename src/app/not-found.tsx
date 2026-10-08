import Link from "next/link";

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-6 py-20"
    >
      <h1 className="text-4xl font-bold">Page not found</h1>
      <p className="mt-4 text-slate-600">
        The page you requested could not be found.
      </p>
      <Link className="mt-6 w-fit underline underline-offset-4" href="/">
        Return home
      </Link>
    </main>
  );
}
