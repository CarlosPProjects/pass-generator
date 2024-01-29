export default function Home() {
  return (
    <section className="max-w-4xl mx-auto flex-1 flex flex-col md:flex-row items-center justify-center gap-4 relative flex-wrap md:flex-nowrap overflow-hidden">
      <div className="space-y-8">
        <h1 className="text-5xl md:text-6xl font-bold text-center">Discover a new way to generate a password</h1>
        <p className="text-lg md:text-xl text-center">
          Generate a password and copy it to your clipboard using the button below
        </p>
        <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
          <input type="text" id="password" name="password" placeholder="Password" readOnly className="flex-1 rounded-xl text-xl py-4 px-6 border shadow-md" />
          <button className="rounded-xl border-1 bg-primary py-4 px-6 text-xl text-secondary font-semibold">
            Generate
          </button>
        </form>
      </div>
    </section>
  );
}
