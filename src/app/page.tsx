export default function Home() {
  return (
    <div className="h-screen bg-slate-900 p-8 text-slate-100">
      <h1 className="mb-4 flex items-center gap-2 text-3xl font-extrabold before:m-1 before:flex before:h-8 before:w-0.5 before:bg-sky-500 sm:text-5xl lg:text-6xl">
        Hello Tailwind
      </h1>
      <h2>Hello Tailwind</h2>
      <p>Hello Tailwind</p>
      <button
        disabled
        className="mt-4 rounded-md bg-sky-400 px-4 py-2 text-lg font-medium enabled:hover:bg-sky-500 disabled:cursor-not-allowed disabled:opacity-60"
      >
        Sign in
      </button>
    </div>
  )
}
