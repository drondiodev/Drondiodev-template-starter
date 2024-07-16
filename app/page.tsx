import Link from 'next/link'

export default function Home() {
  return (
    <section className="py-14">
      <div className="flex flex-col justify-center items-center mx-auto px-4 md:px-8">
        <h1 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
          Next.js Starter template
        </h1>
        <p className="mt-3 text-gray-600">
          Template de configuration d&apos;un projet Next.Js avec Typescript,
          ESLint, Airbnb, Prettier, Husky, scopes de commit personnalisés et
          Lint Staged.
        </p>
        <Link
          className="mt-5 inline-flex gap-2 cursor-pointer items-center justify-center font-medium px-3 rounded-md bg-slate-200/15 hover:bg-slate-300"
          data-rac=""
          href="https://github.com/drondiodev/Drondiodev-template-starter"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-sparkles "
          >
            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
            <path d="M5 3v4" />
            <path d="M19 17v4" />
            <path d="M3 5h4" />
            <path d="M17 19h4" />
          </svg>
          <span className="truncate">Donner une étoile au répo </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-right "
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  )
}
