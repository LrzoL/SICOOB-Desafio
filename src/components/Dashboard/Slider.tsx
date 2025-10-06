import { useEffect, useState } from "react";
import { getFeaturedCourses } from "../../services/courseService";
import type { Course } from "../../types/couser";
import Card from "../General/Card";

export default function Slider() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getFeaturedCourses()
      .then(setCourses)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p>Carregando cursos...</p>;
  }

  if (courses.length === 0) {
    return <p>Nenhum curso encontrado.</p>;
  }

  return (
    <div className="relative flex items-center justify-center w-full text-gray-50 dark:text-gray-900">
      <div className="flex items-center justify-start w-full h-full gap-6 py-4 mx-auto overflow-x-auto lg:gap-8 scroll-smooth">
        {courses.map((course) => (
          <div key={course.id} className="relative flex flex-shrink-0 w-full sm:w-auto">
            <Card
              title={course.title}
              description={course.description}
              imageUrl={course.image_url}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
