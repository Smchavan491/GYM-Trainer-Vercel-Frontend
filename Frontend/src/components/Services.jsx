import React from "react";

const Services = () => {
  const services = [
    { title: "Fitness Training", icon: "💪" },
    { title: "Physical Therapy", icon: "🩺" },
    { title: "Karate", icon: "🥋" },
    { title: "Yoga", icon: "🧘‍♀️" },
    { title: "Weight Loss", icon: "⚖️" },
  ];

  return (
    <section id="services" className="py-20 text-center bg-gray-900">
      <h2 className="text-4xl font-bold text-red-500 mb-10">Services</h2>
      <div className="grid md:grid-cols-3 gap-8 px-10">
        {services.map((s) => (
          <div
            key={s.title}
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <div className="text-5xl mb-4">{s.icon}</div>
            <h3 className="text-2xl font-semibold">{s.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
