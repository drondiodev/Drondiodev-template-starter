import Link from 'next/link'

import { GitHubIcon } from '@/app/page'

export default function Header() {
  return (
    <header className="relative top-0 z-10px-6 py-5 lg:z-10 lg:flex lg:h-16 lg:items-center lg:px-8 lg:py-0">
      <div className="mx-auto flex w-full items-center justify-between md:max-w-7xl">
        <Link href="/" className="relative flex items-center">
          <div className="text-zinc-950">NextJs Starter</div>
          <span className="mb-4 ml-2 select-none rounded-full bg-zinc-800 px-2 py-0.5 text-xs text-zinc-50">
            beta
          </span>
        </Link>
        <nav className="flex items-center gap-2">
          <Link
            href="https://github.com/drondiodev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center"
          >
            <GitHubIcon className="h-4 w-4 fill-zinc-950" />
          </Link>
        </nav>
      </div>
    </header>
  )
}
