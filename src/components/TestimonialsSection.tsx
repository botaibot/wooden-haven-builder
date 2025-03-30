
import React from "react";
import { Star } from "lucide-react";

interface TestimonialProps {
  name: string;
  text: string;
  rating: number;
  location: string;
}

const Testimonial = ({ name, text, rating, location }: TestimonialProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={18} 
            className={i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"} 
          />
        ))}
      </div>
      <p className="mb-4 text-gray-700 italic">"{text}"</p>
      <div>
        <p className="font-semibold text-wood-darkest">{name}</p>
        <p className="text-sm text-gray-500">{location}</p>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Алексей Петров",
      text: "Очень доволен своим деревянным домом на Тенерифе. Качество материалов и строительства на высшем уровне. Спасибо команде WoodTenerife!",
      rating: 5,
      location: "Адехе, Тенерифе"
    },
    {
      name: "Мария Иванова",
      text: "Регулярно закупаем строительные материалы в их магазине. Отличное качество и приемлемые цены. Всегда есть все необходимое.",
      rating: 5,
      location: "Лос Кристианос, Тенерифе"
    },
    {
      name: "Сергей Смирнов",
      text: "Построили дом нашей мечты за разумные деньги. Теперь наслаждаемся прекрасным видом на океан из нашего экологичного жилища.",
      rating: 4,
      location: "Санта-Крус, Тенерифе"
    }
  ];

  return (
    <section className="py-16 bg-wood-light/20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mx-auto">Отзывы наших клиентов</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index}
              name={testimonial.name}
              text={testimonial.text}
              rating={testimonial.rating}
              location={testimonial.location}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
