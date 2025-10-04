import Slider from "../components/Slider.tsx";

export default function DashboardPage() {
  return (
    <div>
      <main className="container px-4 py-8 mx-auto space-y-8">
        <h1 className="text-2xl font-bold">Cursos em destaque</h1>
        <Slider />
      </main>
    </div>
  );
}
