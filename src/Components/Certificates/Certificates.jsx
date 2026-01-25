// src/Components/Certificates/Certificates.jsx
import React from 'react';

export default function Certificates() {
  return (
    <div className="max-w-6xl mx-auto" aria-label="Certificates">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50 dark:bg-zinc-900/50">
          <h3 className="font-bold text-zinc-900 dark:text-zinc-50">Certificate Placeholder</h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">Issuer Name</p>
        </div>
        {/* Loop later */}
      </div>
    </div>
  );
}