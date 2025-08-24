export type Center = {
    id: string;
    disease: "diabetes" | "asthma" | "cancer" | "hypertension" | "alzheimer";
    name: string;
    city: string;
    state?: string;
    lat: number;
    lon: number;
};

export const CENTERS: Center[] = [
    // Diabetes Centers
    { id: "c1", disease: "diabetes", name: "Mayo Clinic", city: "Rochester", state: "MN", lat: 44.0121, lon: -92.4802 },
    { id: "c2", disease: "diabetes", name: "UCSF Medical Center", city: "San Francisco", state: "CA", lat: 37.7631, lon: -122.4586 },
    { id: "c3", disease: "diabetes", name: "Joslin Diabetes Center", city: "Boston", state: "MA", lat: 42.3370, lon: -71.1070 },
    { id: "c4", disease: "diabetes", name: "Cleveland Clinic", city: "Cleveland", state: "OH", lat: 41.5036, lon: -81.6206 },
    { id: "c5", disease: "diabetes", name: "Duke Health", city: "Durham", state: "NC", lat: 36.0014, lon: -78.9382 },

    // Asthma Centers
    { id: "c6", disease: "asthma", name: "National Jewish Health", city: "Denver", state: "CO", lat: 39.7393, lon: -104.9903 },
    { id: "c7", disease: "asthma", name: "Johns Hopkins Hospital", city: "Baltimore", state: "MD", lat: 39.2992, lon: -76.5898 },
    { id: "c8", disease: "asthma", name: "Mount Sinai Hospital", city: "New York", state: "NY", lat: 40.7903, lon: -73.9597 },
    { id: "c9", disease: "asthma", name: "UCLA Medical Center", city: "Los Angeles", state: "CA", lat: 34.0668, lon: -118.4451 },
    { id: "c10", disease: "asthma", name: "University of Michigan Health", city: "Ann Arbor", state: "MI", lat: 42.2808, lon: -83.7430 },

    // Cancer Centers
    { id: "c11", disease: "cancer", name: "MD Anderson Cancer Center", city: "Houston", state: "TX", lat: 29.7050, lon: -95.4010 },
    { id: "c12", disease: "cancer", name: "Memorial Sloan Kettering", city: "New York", state: "NY", lat: 40.7646, lon: -73.9547 },
    { id: "c13", disease: "cancer", name: "Dana-Farber Cancer Institute", city: "Boston", state: "MA", lat: 42.3370, lon: -71.1070 },
    { id: "c14", disease: "cancer", name: "UCSF Helen Diller Family Comprehensive Cancer Center", city: "San Francisco", state: "CA", lat: 37.7631, lon: -122.4586 },
    { id: "c15", disease: "cancer", name: "UCLA Jonsson Comprehensive Cancer Center", city: "Los Angeles", state: "CA", lat: 34.0668, lon: -118.4451 },

    // Hypertension Centers
    { id: "c16", disease: "hypertension", name: "Cleveland Clinic Heart & Vascular Institute", city: "Cleveland", state: "OH", lat: 41.5036, lon: -81.6206 },
    { id: "c17", disease: "hypertension", name: "Mayo Clinic Cardiovascular Medicine", city: "Rochester", state: "MN", lat: 44.0121, lon: -92.4802 },
    { id: "c18", disease: "hypertension", name: "Johns Hopkins Heart & Vascular Institute", city: "Baltimore", state: "MD", lat: 39.2992, lon: -76.5898 },
    { id: "c19", disease: "hypertension", name: "Mount Sinai Heart", city: "New York", state: "NY", lat: 40.7903, lon: -73.9597 },
    { id: "c20", disease: "hypertension", name: "UCLA Cardiovascular Center", city: "Los Angeles", state: "CA", lat: 34.0668, lon: -118.4451 },

    // Alzheimer's Centers
    { id: "c21", disease: "alzheimer", name: "Mass General Hospital", city: "Boston", state: "MA", lat: 42.3626, lon: -71.0695 },
    { id: "c22", disease: "alzheimer", name: "UCSF Memory and Aging Center", city: "San Francisco", state: "CA", lat: 37.7631, lon: -122.4586 },
    { id: "c23", disease: "alzheimer", name: "Mayo Clinic Alzheimer's Disease Research Center", city: "Rochester", state: "MN", lat: 44.0121, lon: -92.4802 },
    { id: "c24", disease: "alzheimer", name: "Johns Hopkins Alzheimer's Disease Research Center", city: "Baltimore", state: "MD", lat: 39.2992, lon: -76.5898 },
    { id: "c25", disease: "alzheimer", name: "UCLA Alzheimer's and Dementia Care Program", city: "Los Angeles", state: "CA", lat: 34.0668, lon: -118.4451 },
];
