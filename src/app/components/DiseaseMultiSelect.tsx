"use client";
import { useMemo, useState } from "react";
import UsMap from "./UsMap";
import { CENTERS, type Center } from "@/data/centers";

const ALL = ["diabetes", "asthma", "cancer", "hypertension", "alzheimer"] as const;

export default function DiseaseMultiSelect() {
    const [selected, setSelected] = useState<string[]>(["diabetes", "asthma"]);

    function toggle(d: string) {
        setSelected(prev => prev.includes(d) ? prev.filter(x => x !== d) : [...prev, d]);
    }

    const filteredCenters: Center[] = useMemo(() => {
        if (selected.length === 0) return CENTERS;
        const set = new Set(selected.map(s => s.toLowerCase()));
        return CENTERS.filter(c => set.has(c.disease));
    }, [selected]);

    return (
        <section className="space-y-4">
            <div className="flex flex-wrap gap-2">
                {ALL.map(d => (
                    <button
                        key={d}
                        onClick={() => toggle(d)}
                        className={`px-4 py-2 border rounded-lg transition-all duration-200 font-medium ${selected.includes(d)
                                ? "bg-blue-600 text-white border-blue-600 shadow-md"
                                : "bg-white text-gray-700 border-gray-300 hover:border-blue-400 hover:bg-blue-50"
                            }`}
                    >
                        {d.charAt(0).toUpperCase() + d.slice(1)}
                    </button>
                ))}
            </div>

            <div className="text-sm text-gray-600">
                Showing {filteredCenters.length} center{filteredCenters.length !== 1 ? 's' : ''} for selected diseases
            </div>

            <UsMap centers={filteredCenters} />
        </section>
    );
}
