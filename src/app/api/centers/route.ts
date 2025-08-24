import { CENTERS } from "@/data/centers";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const raw = searchParams.get("diseases") || "";
    const diseases = raw.split(",").map(s => s.trim().toLowerCase()).filter(Boolean);

    const filtered = diseases.length
        ? CENTERS.filter(c => diseases.includes(c.disease))
        : CENTERS;

    // (Optional) de-dupe or sort here
    return Response.json({ centers: filtered });
}
