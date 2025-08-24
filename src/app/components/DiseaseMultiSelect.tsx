"use client";
import { useEffect, useState } from "react";
import UsMap from "./UsMap";
import { Center } from "@/data/centers";

const ALL = ["diabetes", "asthma", "cancer", "hypertension", "alzheimer"] as const;

export default function DiseaseMultiSelect() {
    const [selected, setSelected] = useState<string[]>(["diabetes", "asthma"]);
    const [centers, setCenters] = useState<Center[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    function toggle(d: string) {
        setSelected(prev => prev.includes(d) ? prev.filter(x => x !== d) : [...prev, d]);
    }

    useEffect(() => {
        const run = async () => {
            setLoading(true);
            setError(null);
            try {
                const params = new URLSearchParams();
                if (selected.length) params.set("diseases", selected.join(","));
                const res = await fetch(`/api/centers?${params}`, { cache: "no-store" });
                if (!res.ok) throw new Error('Failed to fetch centers');
                const data = await res.json();
                setCenters(data.centers);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
                setCenters([]);
            } finally {
                setLoading(false);
            }
        };
        run();
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
                Showing {centers.length} center{centers.length !== 1 ? 's' : ''} for selected diseases
            </div>

            {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                    Error: {error}
                </div>
            )}

            {loading ? (
                <div className="flex items-center justify-center h-[70vh] bg-gray-50 rounded-lg border">
                    <div className="text-gray-600">Loading map...</div>
                </div>
            ) : (
                <UsMap centers={centers} />
            )}
        </section>
    );
}
