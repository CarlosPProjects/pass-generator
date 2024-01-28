import { cn } from "@/libs/utils";

export default function Home() {
  return (
    <div className="container mx-auto min-h-screen">
      <section className="text-center mx-auto w-full border py-8">

      </section>
      <h1 className="text-2xl md:text-3xl font-extrabold text-center max-w-xl">
        Genere una contraseña aleatoria y segura al instante con la herramienta
        online de LastPass
      </h1>
      <p className="font-base text-xl">
        Vaya más allá de los generadores de contraseñas con LastPass Premium.
        Con independencia del dispositivo o la aplicación que utilice, todas sus
        contraseñas se crearán, guardarán y sincronizarán de manera automática.
        Esté donde esté.
      </p>
      <form>
        <label htmlFor="password">Label</label>
        <input type="text" name="password" id="password" className="" />
      </form>
    </div>
  );
}
