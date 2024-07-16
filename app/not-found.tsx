import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="grid place-content-center h-screen">
      <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
        404 - Page non trouvée
      </h1>
      <p className="my-4 text-gray-500">Cette page semble ne pas exister !</p>
      <Link
        href="/"
        className="text-primary underline-offset-4 hover:underline"
      >
        Vers l&apos;accueil
      </Link>
    </section>
  )
}
