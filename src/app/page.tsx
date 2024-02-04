import Generator from "@/components/Generator";

export default function Home() {
  return (
    <section className="max-w-4xl mx-auto flex-1 flex flex-col md:flex-row items-center justify-center gap-4 relative flex-wrap md:flex-nowrap overflow-hidden">
      <div className="space-y-8">
        <h1 className="text-5xl md:text-6xl font-bold text-center">
          Password Generator
        </h1>
        <p className="text-lg md:text-xl text-center max-w-lg mx-auto">
          Generate a password and copy it to your clipboard using the button
          below.
        </p>
        <Generator />
      </div>
    </section>
  );
}
