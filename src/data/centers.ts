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
    // Diabetes Centers (15 total)
    { id: "c1", disease: "diabetes", name: "Mayo Clinic", city: "Rochester", state: "MN", lat: 44.0121, lon: -92.4802 },
    { id: "c2", disease: "diabetes", name: "UCSF Medical Center", city: "San Francisco", state: "CA", lat: 37.7631, lon: -122.4586 },
    { id: "c3", disease: "diabetes", name: "Joslin Diabetes Center", city: "Boston", state: "MA", lat: 42.3370, lon: -71.1070 },
    { id: "c4", disease: "diabetes", name: "Cleveland Clinic", city: "Cleveland", state: "OH", lat: 41.5036, lon: -81.6206 },
    { id: "c5", disease: "diabetes", name: "Duke Health", city: "Durham", state: "NC", lat: 36.0014, lon: -78.9382 },
    { id: "c6", disease: "diabetes", name: "Johns Hopkins Diabetes Center", city: "Baltimore", state: "MD", lat: 39.2992, lon: -76.5898 },
    { id: "c7", disease: "diabetes", name: "Mount Sinai Diabetes Center", city: "New York", state: "NY", lat: 40.7903, lon: -73.9597 },
    { id: "c8", disease: "diabetes", name: "UCLA Diabetes Center", city: "Los Angeles", state: "CA", lat: 34.0668, lon: -118.4451 },
    { id: "c9", disease: "diabetes", name: "University of Michigan Diabetes Center", city: "Ann Arbor", state: "MI", lat: 42.2808, lon: -83.7430 },
    { id: "c10", disease: "diabetes", name: "Vanderbilt Diabetes Center", city: "Nashville", state: "TN", lat: 36.1627, lon: -86.7816 },
    { id: "c11", disease: "diabetes", name: "University of Washington Diabetes Institute", city: "Seattle", state: "WA", lat: 47.6062, lon: -122.3321 },
    { id: "c12", disease: "diabetes", name: "Emory Diabetes Center", city: "Atlanta", state: "GA", lat: 33.7490, lon: -84.3880 },
    { id: "c13", disease: "diabetes", name: "University of Texas Diabetes Center", city: "Austin", state: "TX", lat: 30.2672, lon: -97.7431 },
    { id: "c14", disease: "diabetes", name: "University of Colorado Diabetes Center", city: "Denver", state: "CO", lat: 39.7393, lon: -104.9903 },
    { id: "c15", disease: "diabetes", name: "University of Florida Diabetes Institute", city: "Gainesville", state: "FL", lat: 29.6516, lon: -82.3248 },

    // Asthma Centers (15 total)
    { id: "c16", disease: "asthma", name: "National Jewish Health", city: "Denver", state: "CO", lat: 39.7393, lon: -104.9903 },
    { id: "c17", disease: "asthma", name: "Johns Hopkins Hospital", city: "Baltimore", state: "MD", lat: 39.2992, lon: -76.5898 },
    { id: "c18", disease: "asthma", name: "Mount Sinai Hospital", city: "New York", state: "NY", lat: 40.7903, lon: -73.9597 },
    { id: "c19", disease: "asthma", name: "UCLA Medical Center", city: "Los Angeles", state: "CA", lat: 34.0668, lon: -118.4451 },
    { id: "c20", disease: "asthma", name: "University of Michigan Health", city: "Ann Arbor", state: "MI", lat: 42.2808, lon: -83.7430 },
    { id: "c21", disease: "asthma", name: "Cleveland Clinic Respiratory Institute", city: "Cleveland", state: "OH", lat: 41.5036, lon: -81.6206 },
    { id: "c22", disease: "asthma", name: "Mayo Clinic Pulmonary Medicine", city: "Rochester", state: "MN", lat: 44.0121, lon: -92.4802 },
    { id: "c23", disease: "asthma", name: "Duke Pulmonary Medicine", city: "Durham", state: "NC", lat: 36.0014, lon: -78.9382 },
    { id: "c24", disease: "asthma", name: "University of Washington Pulmonary Center", city: "Seattle", state: "WA", lat: 47.6062, lon: -122.3321 },
    { id: "c25", disease: "asthma", name: "Emory Asthma Center", city: "Atlanta", state: "GA", lat: 33.7490, lon: -84.3880 },
    { id: "c26", disease: "asthma", name: "University of Texas Pulmonary Institute", city: "Austin", state: "TX", lat: 30.2672, lon: -97.7431 },
    { id: "c27", disease: "asthma", name: "University of Florida Pulmonary Center", city: "Gainesville", state: "FL", lat: 29.6516, lon: -82.3248 },
    { id: "c28", disease: "asthma", name: "Vanderbilt Pulmonary Medicine", city: "Nashville", state: "TN", lat: 36.1627, lon: -86.7816 },
    { id: "c29", disease: "asthma", name: "University of Colorado Pulmonary Center", city: "Denver", state: "CO", lat: 39.7393, lon: -104.9903 },
    { id: "c30", disease: "asthma", name: "University of Arizona Asthma Center", city: "Tucson", state: "AZ", lat: 32.2226, lon: -110.9747 },

    // Cancer Centers (15 total)
    { id: "c31", disease: "cancer", name: "MD Anderson Cancer Center", city: "Houston", state: "TX", lat: 29.7050, lon: -95.4010 },
    { id: "c32", disease: "cancer", name: "Memorial Sloan Kettering", city: "New York", state: "NY", lat: 40.7646, lon: -73.9547 },
    { id: "c33", disease: "cancer", name: "Dana-Farber Cancer Institute", city: "Boston", state: "MA", lat: 42.3370, lon: -71.1070 },
    { id: "c34", disease: "cancer", name: "UCSF Helen Diller Family Comprehensive Cancer Center", city: "San Francisco", state: "CA", lat: 37.7631, lon: -122.4586 },
    { id: "c35", disease: "cancer", name: "UCLA Jonsson Comprehensive Cancer Center", city: "Los Angeles", state: "CA", lat: 34.0668, lon: -118.4451 },
    { id: "c36", disease: "cancer", name: "Mayo Clinic Cancer Center", city: "Rochester", state: "MN", lat: 44.0121, lon: -92.4802 },
    { id: "c37", disease: "cancer", name: "Cleveland Clinic Taussig Cancer Institute", city: "Cleveland", state: "OH", lat: 41.5036, lon: -81.6206 },
    { id: "c38", disease: "cancer", name: "Johns Hopkins Sidney Kimmel Cancer Center", city: "Baltimore", state: "MD", lat: 39.2992, lon: -76.5898 },
    { id: "c39", disease: "cancer", name: "Duke Cancer Institute", city: "Durham", state: "NC", lat: 36.0014, lon: -78.9382 },
    { id: "c40", disease: "cancer", name: "University of Michigan Rogel Cancer Center", city: "Ann Arbor", state: "MI", lat: 42.2808, lon: -83.7430 },
    { id: "c41", disease: "cancer", name: "Vanderbilt-Ingram Cancer Center", city: "Nashville", state: "TN", lat: 36.1627, lon: -86.7816 },
    { id: "c42", disease: "cancer", name: "University of Washington Fred Hutchinson Cancer Center", city: "Seattle", state: "WA", lat: 47.6062, lon: -122.3321 },
    { id: "c43", disease: "cancer", name: "Emory Winship Cancer Institute", city: "Atlanta", state: "GA", lat: 33.7490, lon: -84.3880 },
    { id: "c44", disease: "cancer", name: "University of Colorado Cancer Center", city: "Denver", state: "CO", lat: 39.7393, lon: -104.9903 },
    { id: "c45", disease: "cancer", name: "University of Florida Health Cancer Center", city: "Gainesville", state: "FL", lat: 29.6516, lon: -82.3248 },

    // Hypertension Centers (15 total)
    { id: "c46", disease: "hypertension", name: "Cleveland Clinic Heart & Vascular Institute", city: "Cleveland", state: "OH", lat: 41.5036, lon: -81.6206 },
    { id: "c47", disease: "hypertension", name: "Mayo Clinic Cardiovascular Medicine", city: "Rochester", state: "MN", lat: 44.0121, lon: -92.4802 },
    { id: "c48", disease: "hypertension", name: "Johns Hopkins Heart & Vascular Institute", city: "Baltimore", state: "MD", lat: 39.2992, lon: -76.5898 },
    { id: "c49", disease: "hypertension", name: "Mount Sinai Heart", city: "New York", state: "NY", lat: 40.7903, lon: -73.9597 },
    { id: "c50", disease: "hypertension", name: "UCLA Cardiovascular Center", city: "Los Angeles", state: "CA", lat: 34.0668, lon: -118.4451 },
    { id: "c51", disease: "hypertension", name: "Duke Heart Center", city: "Durham", state: "NC", lat: 36.0014, lon: -78.9382 },
    { id: "c52", disease: "hypertension", name: "University of Michigan Cardiovascular Center", city: "Ann Arbor", state: "MI", lat: 42.2808, lon: -83.7430 },
    { id: "c53", disease: "hypertension", name: "Vanderbilt Heart & Vascular Institute", city: "Nashville", state: "TN", lat: 36.1627, lon: -86.7816 },
    { id: "c54", disease: "hypertension", name: "University of Washington Heart Institute", city: "Seattle", state: "WA", lat: 47.6062, lon: -122.3321 },
    { id: "c55", disease: "hypertension", name: "Emory Heart & Vascular Center", city: "Atlanta", state: "GA", lat: 33.7490, lon: -84.3880 },
    { id: "c56", disease: "hypertension", name: "University of Texas Heart Institute", city: "Austin", state: "TX", lat: 30.2672, lon: -97.7431 },
    { id: "c57", disease: "hypertension", name: "University of Florida Heart & Vascular Institute", city: "Gainesville", state: "FL", lat: 29.6516, lon: -82.3248 },
    { id: "c58", disease: "hypertension", name: "University of Colorado Heart Institute", city: "Denver", state: "CO", lat: 39.7393, lon: -104.9903 },
    { id: "c59", disease: "hypertension", name: "University of Arizona Heart Center", city: "Tucson", state: "AZ", lat: 32.2226, lon: -110.9747 },
    { id: "c60", disease: "hypertension", name: "UCSF Heart & Vascular Center", city: "San Francisco", state: "CA", lat: 37.7631, lon: -122.4586 },

    // Alzheimer's Centers (15 total)
    { id: "c61", disease: "alzheimer", name: "Mass General Hospital", city: "Boston", state: "MA", lat: 42.3626, lon: -71.0695 },
    { id: "c62", disease: "alzheimer", name: "UCSF Memory and Aging Center", city: "San Francisco", state: "CA", lat: 37.7631, lon: -122.4586 },
    { id: "c63", disease: "alzheimer", name: "Mayo Clinic Alzheimer's Disease Research Center", city: "Rochester", state: "MN", lat: 44.0121, lon: -92.4802 },
    { id: "c64", disease: "alzheimer", name: "Johns Hopkins Alzheimer's Disease Research Center", city: "Baltimore", state: "MD", lat: 39.2992, lon: -76.5898 },
    { id: "c65", disease: "alzheimer", name: "UCLA Alzheimer's and Dementia Care Program", city: "Los Angeles", state: "CA", lat: 34.0668, lon: -118.4451 },
    { id: "c66", disease: "alzheimer", name: "Duke Memory Disorders Clinic", city: "Durham", state: "NC", lat: 36.0014, lon: -78.9382 },
    { id: "c67", disease: "alzheimer", name: "University of Michigan Memory Disorders Clinic", city: "Ann Arbor", state: "MI", lat: 42.2808, lon: -83.7430 },
    { id: "c68", disease: "alzheimer", name: "Vanderbilt Memory & Alzheimer's Center", city: "Nashville", state: "TN", lat: 36.1627, lon: -86.7816 },
    { id: "c69", disease: "alzheimer", name: "University of Washington Memory & Brain Wellness Center", city: "Seattle", state: "WA", lat: 47.6062, lon: -122.3321 },
    { id: "c70", disease: "alzheimer", name: "Emory Alzheimer's Disease Research Center", city: "Atlanta", state: "GA", lat: 33.7490, lon: -84.3880 },
    { id: "c71", disease: "alzheimer", name: "University of Texas Memory Disorders Center", city: "Austin", state: "TX", lat: 30.2672, lon: -97.7431 },
    { id: "c72", disease: "alzheimer", name: "University of Florida Memory Disorders Clinic", city: "Gainesville", state: "FL", lat: 29.6516, lon: -82.3248 },
    { id: "c73", disease: "alzheimer", name: "University of Colorado Memory Disorders Clinic", city: "Denver", state: "CO", lat: 39.7393, lon: -104.9903 },
    { id: "c74", disease: "alzheimer", name: "University of Arizona Memory Disorders Program", city: "Tucson", state: "AZ", lat: 32.2226, lon: -110.9747 },
    { id: "c75", disease: "alzheimer", name: "Cleveland Clinic Lou Ruvo Center for Brain Health", city: "Cleveland", state: "OH", lat: 41.5036, lon: -81.6206 },
];
