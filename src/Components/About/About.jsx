// src/Components/About/About.jsx
import React from 'react';

export default function About() {
  return (
    <div className="max-w-3xl mx-auto text-center" aria-label="About Me">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-zinc-900 dark:text-zinc-50">About Me</h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
        I am a passionate developer creating modern web experiences.
        My focus is on performance, accessibility, and clean code.
      </p>
    </div>
  );
}