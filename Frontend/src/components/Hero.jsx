import React from "react";
import profilePic from "../assets/profile.png"; // Make sure this path points to your image
import './Hero.css';

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-start min-h-screen text-center bg-[url('https://images.unsplash.com/photo-1594737625785-cdefb6e3f92a?auto=format&fit=crop&w=1740&q=80')] bg-cover bg-center relative pt-36"
    >
      {/* Profile Picture */}
      <div className="mb-6 z-10">
        <img
          src={profilePic}
          alt="Profile"
          className="w-60 h-60 sm:w-48 sm:h-48 rounded-full object-contain border-4 border-white shadow-lg"
        />
      </div>

      {/* Content Overlay */}
      <div className="bg-gray-900 bg-opacity-60 p-8 rounded-xl z-10">
        {/* Simple Name without animation */}
        <h2 className="text-4xl font-bold text-white mb-4">Prafull Chavan</h2>

        <p className="text-xl mb-6">
          Certified Fitness Trainer | Physical Therapist | Karate Coach | Yoga Expert
        </p>

        <a
          href="#contact"
          className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full transition duration-300"
        >
          Book a Session
        </a>
      </div>

      {/* Optional overlay effect to darken background fully */}
      <div className="absolute inset-0 bg-gray-900 opacity-30"></div>
    </section>
  );
};

export default Hero;
