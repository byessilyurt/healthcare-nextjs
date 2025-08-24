"use client";
import dynamic from "next/dynamic";

const DiseaseMultiSelect = dynamic(() => import("./components/DiseaseMultiSelect"), { ssr: false });

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            US Disease Centers Map
          </h1>
          <p className="text-lg text-gray-600">
            Explore healthcare centers across the United States by disease specialty.
            Select diseases below to see centers on the interactive map.
          </p>
        </div>

        <DiseaseMultiSelect />

        <footer className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500">
          <p>Data represents major healthcare centers across the United States</p>
        </footer>
      </div>
    </main>
  );
}
