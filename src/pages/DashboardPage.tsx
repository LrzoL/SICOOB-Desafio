import Hero from "../components/Dashboard/Hero.tsx";
import Slider from "../components/Dashboard/Slider.tsx";

export default function DashboardPage() {
  return (
    <div>
      <main className="container px-4 py-8 mx-auto space-y-8">
        <Hero />

        <h1 className="text-2xl font-bold">
          Cursos em destaque
        </h1>
        <div className="flex-row space-y-4 overflow-auto lg:space-y-0 lg:flex lg:space-x-4">
          <Slider />
          <Slider />
          <Slider />
          <Slider />
          <Slider />
          <Slider />
          <Slider />
        </div>
      </main>
    </div>
  );
}
