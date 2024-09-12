export default function Footer() {
  return (
    <footer className="mx-auto mt-48 w-full max-w-screen-xl px-4 sm:px-6">
      {/* Copyright */}
      <span className="text-sm">
        &copy; {new Date().getFullYear()} Drondiodev - All rights reserved.
      </span>
    </footer>
  )
}
