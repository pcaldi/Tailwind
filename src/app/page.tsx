export default function Home() {
  return (
    <div className="p-8 bg-slate-900 text-slate-100 h-screen">
      <h1 className="font-extrabold flex items-center text-3xl sm:text-5xl lg:text-6xl mb-4 before:m-1 before:h-8 before:w-0.5 gap-2 before:bg-sky-500 before:flex">Hello Tailwind</h1>
      <h2>Hello Tailwind</h2>
      <p>Hello Tailwind</p>
      <button disabled className="bg-sky-400 font-medium text-lg rounded-md px-4 py-2 mt-4 enabled:hover:bg-sky-500 disabled:opacity-60 disabled:cursor-not-allowed" >
        Sign in
      </button>
    </div>
  )
}
