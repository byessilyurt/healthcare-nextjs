"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Center } from "@/data/centers";

// Fix for Leaflet default icon issue
// @ts-expect-error - Leaflet icon fix
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export default function UsMap({ centers }: { centers: Center[] }) {
    const center: [number, number] = [39.5, -98.35]; // US centroid

    return (
        <div className="h-[70vh] w-full rounded border overflow-hidden">
            <MapContainer
                center={center}
                zoom={4}
                style={{ height: "100%", width: "100%" }}
                scrollWheelZoom={true}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {centers.map(c => (
                    <Marker key={c.id} position={[c.lat, c.lon]}>
                        <Popup>
                            <div className="text-sm">
                                <b className="text-lg">{c.name}</b><br />
                                <span className="text-gray-600">{c.city}{c.state ? `, ${c.state}` : ""}</span><br />
                                <span className="text-blue-600 font-medium">{c.disease}</span>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}
