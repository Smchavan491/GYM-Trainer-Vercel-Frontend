import React, { useState, useEffect } from "react";

const Testimonials = () => {
  const testimonials = [
    { name: "Sarah Johnson", text: "Alex transformed my fitness journey. Highly recommend!" },
    { name: "David Lee", text: "The best trainer I’ve ever worked with. Karate sessions are top-notch!" },
    { name: "Emily Davis", text: "Yoga sessions are relaxing and effective. I feel great every day." },
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-20 text-center bg-gray-900">
      <h2 className="text-4xl font-bold text-red-500 mb-10">Testimonials</h2>
      <div className="max-w-xl mx-auto bg-gray-800 p-8 rounded-xl shadow-lg">
        <p className="italic mb-4">"{testimonials[active].text}"</p>
        <h4 className="font-semibold text-red-400">{testimonials[active].name}</h4>
        <div className="flex justify-center mt-4 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`h-3 w-3 rounded-full ${
                index === active ? "bg-red-500" : "bg-gray-500"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
