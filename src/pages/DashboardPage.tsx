import Hero from "../components/Dashboard/Hero.tsx";
import Slider from "../components/Dashboard/Slider.tsx";

export default function DashboardPage() {
  return (
    <div>
      <main className="container flex flex-col px-4 py-8 mx-auto space-y-8">
        <Hero />

        <h2 className="mx-auto text-3xl font-bold">
          Cursos em destaque
        </h2>
        <div className="flex-row space-y-4 overflow-auto lg:space-y-0 lg:flex lg:space-x-4">
          <Slider />
        </div>
        <h2 className="mx-auto text-3xl font-bold">
          Oficinas em destaque
        </h2>
        <div className="flex-row space-y-4 overflow-auto lg:space-y-0 lg:flex lg:space-x-4">
          <Slider />
        </div>
      </main>
    </div>
  );
}
