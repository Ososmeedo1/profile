// src/Components/Contact/Contact.jsx
import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="max-w-xl mx-auto text-center" aria-label="Contact">
      <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
        Feel free to reach out for collaborations or just a friendly hello.
      </p>
      <div className="flex justify-center space-x-6">
        <a href="mailto:example@example.com" className="flex items-center space-x-2 text-zinc-900 dark:text-zinc-50 hover:text-blue-500 transition-colors">
          <Mail size={24} />
          <span>Email</span>
        </a>
        <a href="#" className="text-zinc-900 dark:text-zinc-50 hover:text-blue-500 transition-colors">
          <Github size={24} />
        </a>
        <a href="#" className="text-zinc-900 dark:text-zinc-50 hover:text-blue-500 transition-colors">
          <Linkedin size={24} />
        </a>
      </div>
    </div>
  );
}