export type Center = {
    id: string;
    disease: "diabetes" | "asthma" | "cancer" | "hypertension" | "alzheimer";
    name: string;
    city: string;
    state?: string;
    lat: number;
    lon: number;
};

const BASE_CENTERS: Center[] = [
    // Diabetes Centers (45 total)
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
    { id: "c16", disease: "diabetes", name: "Stanford Diabetes Center", city: "Stanford", state: "CA", lat: 37.4419, lon: -122.1430 },
    { id: "c17", disease: "diabetes", name: "Yale Diabetes Center", city: "New Haven", state: "CT", lat: 41.3083, lon: -72.9279 },
    { id: "c18", disease: "diabetes", name: "University of Pennsylvania Diabetes Center", city: "Philadelphia", state: "PA", lat: 39.9526, lon: -75.1652 },
    { id: "c19", disease: "diabetes", name: "Northwestern Diabetes Center", city: "Chicago", state: "IL", lat: 41.8781, lon: -87.6298 },
    { id: "c20", disease: "diabetes", name: "University of Wisconsin Diabetes Institute", city: "Madison", state: "WI", lat: 43.0731, lon: -89.4012 },
    { id: "c21", disease: "diabetes", name: "University of Iowa Diabetes Center", city: "Iowa City", state: "IA", lat: 41.6611, lon: -91.5302 },
    { id: "c22", disease: "diabetes", name: "University of Minnesota Diabetes Institute", city: "Minneapolis", state: "MN", lat: 44.9778, lon: -93.2650 },
    { id: "c23", disease: "diabetes", name: "Indiana University Diabetes Center", city: "Indianapolis", state: "IN", lat: 39.7684, lon: -86.1581 },
    { id: "c24", disease: "diabetes", name: "Ohio State Diabetes Center", city: "Columbus", state: "OH", lat: 39.9612, lon: -82.9988 },
    { id: "c25", disease: "diabetes", name: "University of Pittsburgh Diabetes Institute", city: "Pittsburgh", state: "PA", lat: 40.4406, lon: -79.9959 },
    { id: "c26", disease: "diabetes", name: "University of Virginia Diabetes Center", city: "Charlottesville", state: "VA", lat: 38.0293, lon: -78.4767 },
    { id: "c27", disease: "diabetes", name: "University of North Carolina Diabetes Center", city: "Chapel Hill", state: "NC", lat: 35.9132, lon: -79.0558 },
    { id: "c28", disease: "diabetes", name: "University of South Carolina Diabetes Center", city: "Columbia", state: "SC", lat: 34.0007, lon: -81.0348 },
    { id: "c29", disease: "diabetes", name: "University of Alabama Diabetes Center", city: "Birmingham", state: "AL", lat: 33.5207, lon: -86.8025 },
    { id: "c30", disease: "diabetes", name: "University of Mississippi Diabetes Center", city: "Jackson", state: "MS", lat: 32.2988, lon: -90.1848 },
    { id: "c31", disease: "diabetes", name: "University of Arkansas Diabetes Center", city: "Little Rock", state: "AR", lat: 34.7465, lon: -92.2896 },
    { id: "c32", disease: "diabetes", name: "University of Oklahoma Diabetes Center", city: "Oklahoma City", state: "OK", lat: 35.4676, lon: -97.5164 },
    { id: "c33", disease: "diabetes", name: "University of Kansas Diabetes Center", city: "Kansas City", state: "KS", lat: 39.1147, lon: -94.6275 },
    { id: "c34", disease: "diabetes", name: "University of Missouri Diabetes Center", city: "Columbia", state: "MO", lat: 38.9517, lon: -92.3341 },
    { id: "c35", disease: "diabetes", name: "University of Nebraska Diabetes Center", city: "Omaha", state: "NE", lat: 41.2565, lon: -95.9345 },
    { id: "c36", disease: "diabetes", name: "University of South Dakota Diabetes Center", city: "Sioux Falls", state: "SD", lat: 43.5446, lon: -96.7311 },
    { id: "c37", disease: "diabetes", name: "University of North Dakota Diabetes Center", city: "Grand Forks", state: "ND", lat: 47.9253, lon: -97.0329 },
    { id: "c38", disease: "diabetes", name: "University of Montana Diabetes Center", city: "Missoula", state: "MT", lat: 46.8721, lon: -113.9940 },
    { id: "c39", disease: "diabetes", name: "University of Wyoming Diabetes Center", city: "Laramie", state: "WY", lat: 41.3114, lon: -105.5910 },
    { id: "c40", disease: "diabetes", name: "University of Idaho Diabetes Center", city: "Moscow", state: "ID", lat: 46.7324, lon: -117.0002 },
    { id: "c41", disease: "diabetes", name: "University of Oregon Diabetes Center", city: "Eugene", state: "OR", lat: 44.0521, lon: -123.0868 },
    { id: "c42", disease: "diabetes", name: "University of Nevada Diabetes Center", city: "Reno", state: "NV", lat: 39.5296, lon: -119.8138 },
    { id: "c43", disease: "diabetes", name: "University of Utah Diabetes Center", city: "Salt Lake City", state: "UT", lat: 40.7608, lon: -111.8910 },
    { id: "c44", disease: "diabetes", name: "University of New Mexico Diabetes Center", city: "Albuquerque", state: "NM", lat: 35.0844, lon: -106.6504 },
    { id: "c45", disease: "diabetes", name: "University of Hawaii Diabetes Center", city: "Honolulu", state: "HI", lat: 21.3099, lon: -157.8581 },

    // Asthma Centers (45 total)
    { id: "c46", disease: "asthma", name: "National Jewish Health", city: "Denver", state: "CO", lat: 39.7393, lon: -104.9903 },
    { id: "c47", disease: "asthma", name: "Johns Hopkins Hospital", city: "Baltimore", state: "MD", lat: 39.2992, lon: -76.5898 },
    { id: "c48", disease: "asthma", name: "Mount Sinai Hospital", city: "New York", state: "NY", lat: 40.7903, lon: -73.9597 },
    { id: "c49", disease: "asthma", name: "UCLA Medical Center", city: "Los Angeles", state: "CA", lat: 34.0668, lon: -118.4451 },
    { id: "c50", disease: "asthma", name: "University of Michigan Health", city: "Ann Arbor", state: "MI", lat: 42.2808, lon: -83.7430 },
    { id: "c51", disease: "asthma", name: "Cleveland Clinic Respiratory Institute", city: "Cleveland", state: "OH", lat: 41.5036, lon: -81.6206 },
    { id: "c52", disease: "asthma", name: "Mayo Clinic Pulmonary Medicine", city: "Rochester", state: "MN", lat: 44.0121, lon: -92.4802 },
    { id: "c53", disease: "asthma", name: "Duke Pulmonary Medicine", city: "Durham", state: "NC", lat: 36.0014, lon: -78.9382 },
    { id: "c54", disease: "asthma", name: "University of Washington Pulmonary Center", city: "Seattle", state: "WA", lat: 47.6062, lon: -122.3321 },
    { id: "c55", disease: "asthma", name: "Emory Asthma Center", city: "Atlanta", state: "GA", lat: 33.7490, lon: -84.3880 },
    { id: "c56", disease: "asthma", name: "University of Texas Pulmonary Institute", city: "Austin", state: "TX", lat: 30.2672, lon: -97.7431 },
    { id: "c57", disease: "asthma", name: "University of Florida Pulmonary Center", city: "Gainesville", state: "FL", lat: 29.6516, lon: -82.3248 },
    { id: "c58", disease: "asthma", name: "Vanderbilt Pulmonary Medicine", city: "Nashville", state: "TN", lat: 36.1627, lon: -86.7816 },
    { id: "c59", disease: "asthma", name: "University of Colorado Pulmonary Center", city: "Denver", state: "CO", lat: 39.7393, lon: -104.9903 },
    { id: "c60", disease: "asthma", name: "University of Arizona Asthma Center", city: "Tucson", state: "AZ", lat: 32.2226, lon: -110.9747 },
    { id: "c61", disease: "asthma", name: "Stanford Pulmonary Medicine", city: "Stanford", state: "CA", lat: 37.4419, lon: -122.1430 },
    { id: "c62", disease: "asthma", name: "Yale Pulmonary Medicine", city: "New Haven", state: "CT", lat: 41.3083, lon: -72.9279 },
    { id: "c63", disease: "asthma", name: "University of Pennsylvania Pulmonary Center", city: "Philadelphia", state: "PA", lat: 39.9526, lon: -75.1652 },
    { id: "c64", disease: "asthma", name: "Northwestern Pulmonary Medicine", city: "Chicago", state: "IL", lat: 41.8781, lon: -87.6298 },
    { id: "c65", disease: "asthma", name: "University of Wisconsin Pulmonary Center", city: "Madison", state: "WI", lat: 43.0731, lon: -89.4012 },
    { id: "c66", disease: "asthma", name: "University of Iowa Pulmonary Medicine", city: "Iowa City", state: "IA", lat: 41.6611, lon: -91.5302 },
    { id: "c67", disease: "asthma", name: "University of Minnesota Pulmonary Center", city: "Minneapolis", state: "MN", lat: 44.9778, lon: -93.2650 },
    { id: "c68", disease: "asthma", name: "Indiana University Pulmonary Medicine", city: "Indianapolis", state: "IN", lat: 39.7684, lon: -86.1581 },
    { id: "c69", disease: "asthma", name: "Ohio State Pulmonary Medicine", city: "Columbus", state: "OH", lat: 39.9612, lon: -82.9988 },
    { id: "c70", disease: "asthma", name: "University of Pittsburgh Pulmonary Medicine", city: "Pittsburgh", state: "PA", lat: 40.4406, lon: -79.9959 },
    { id: "c71", disease: "asthma", name: "University of Virginia Pulmonary Center", city: "Charlottesville", state: "VA", lat: 38.0293, lon: -78.4767 },
    { id: "c72", disease: "asthma", name: "University of North Carolina Pulmonary Medicine", city: "Chapel Hill", state: "NC", lat: 35.9132, lon: -79.0558 },
    { id: "c73", disease: "asthma", name: "University of South Carolina Pulmonary Center", city: "Columbia", state: "SC", lat: 34.0007, lon: -81.0348 },
    { id: "c74", disease: "asthma", name: "University of Alabama Pulmonary Medicine", city: "Birmingham", state: "AL", lat: 33.5207, lon: -86.8025 },
    { id: "c75", disease: "asthma", name: "University of Mississippi Pulmonary Center", city: "Jackson", state: "MS", lat: 32.2988, lon: -90.1848 },
    { id: "c76", disease: "asthma", name: "University of Arkansas Pulmonary Medicine", city: "Little Rock", state: "AR", lat: 34.7465, lon: -92.2896 },
    { id: "c77", disease: "asthma", name: "University of Oklahoma Pulmonary Center", city: "Oklahoma City", state: "OK", lat: 35.4676, lon: -97.5164 },
    { id: "c78", disease: "asthma", name: "University of Kansas Pulmonary Medicine", city: "Kansas City", state: "KS", lat: 39.1147, lon: -94.6275 },
    { id: "c79", disease: "asthma", name: "University of Missouri Pulmonary Center", city: "Columbia", state: "MO", lat: 38.9517, lon: -92.3341 },
    { id: "c80", disease: "asthma", name: "University of Nebraska Pulmonary Medicine", city: "Omaha", state: "NE", lat: 41.2565, lon: -95.9345 },
    { id: "c81", disease: "asthma", name: "University of South Dakota Pulmonary Center", city: "Sioux Falls", state: "SD", lat: 43.5446, lon: -96.7311 },
    { id: "c82", disease: "asthma", name: "University of North Dakota Pulmonary Medicine", city: "Grand Forks", state: "ND", lat: 47.9253, lon: -97.0329 },
    { id: "c83", disease: "asthma", name: "University of Montana Pulmonary Center", city: "Missoula", state: "MT", lat: 46.8721, lon: -113.9940 },
    { id: "c84", disease: "asthma", name: "University of Wyoming Pulmonary Medicine", city: "Laramie", state: "WY", lat: 41.3114, lon: -105.5910 },
    { id: "c85", disease: "asthma", name: "University of Idaho Pulmonary Center", city: "Moscow", state: "ID", lat: 46.7324, lon: -117.0002 },
    { id: "c86", disease: "asthma", name: "University of Oregon Pulmonary Medicine", city: "Eugene", state: "OR", lat: 44.0521, lon: -123.0868 },
    { id: "c87", disease: "asthma", name: "University of Nevada Pulmonary Center", city: "Reno", state: "NV", lat: 39.5296, lon: -119.8138 },
    { id: "c88", disease: "asthma", name: "University of Utah Pulmonary Medicine", city: "Salt Lake City", state: "UT", lat: 40.7608, lon: -111.8910 },
    { id: "c89", disease: "asthma", name: "University of New Mexico Pulmonary Center", city: "Albuquerque", state: "NM", lat: 35.0844, lon: -106.6504 },
    { id: "c90", disease: "asthma", name: "University of Hawaii Pulmonary Medicine", city: "Honolulu", state: "HI", lat: 21.3099, lon: -157.8581 },

    // Cancer Centers (45 total)
    { id: "c91", disease: "cancer", name: "MD Anderson Cancer Center", city: "Houston", state: "TX", lat: 29.7050, lon: -95.4010 },
    { id: "c92", disease: "cancer", name: "Memorial Sloan Kettering", city: "New York", state: "NY", lat: 40.7646, lon: -73.9547 },
    { id: "c93", disease: "cancer", name: "Dana-Farber Cancer Institute", city: "Boston", state: "MA", lat: 42.3370, lon: -71.1070 },
    { id: "c94", disease: "cancer", name: "UCSF Helen Diller Family Comprehensive Cancer Center", city: "San Francisco", state: "CA", lat: 37.7631, lon: -122.4586 },
    { id: "c95", disease: "cancer", name: "UCLA Jonsson Comprehensive Cancer Center", city: "Los Angeles", state: "CA", lat: 34.0668, lon: -118.4451 },
    { id: "c96", disease: "cancer", name: "Mayo Clinic Cancer Center", city: "Rochester", state: "MN", lat: 44.0121, lon: -92.4802 },
    { id: "c97", disease: "cancer", name: "Cleveland Clinic Taussig Cancer Institute", city: "Cleveland", state: "OH", lat: 41.5036, lon: -81.6206 },
    { id: "c98", disease: "cancer", name: "Johns Hopkins Sidney Kimmel Cancer Center", city: "Baltimore", state: "MD", lat: 39.2992, lon: -76.5898 },
    { id: "c99", disease: "cancer", name: "Duke Cancer Institute", city: "Durham", state: "NC", lat: 36.0014, lon: -78.9382 },
    { id: "c100", disease: "cancer", name: "University of Michigan Rogel Cancer Center", city: "Ann Arbor", state: "MI", lat: 42.2808, lon: -83.7430 },
    { id: "c101", disease: "cancer", name: "Vanderbilt-Ingram Cancer Center", city: "Nashville", state: "TN", lat: 36.1627, lon: -86.7816 },
    { id: "c102", disease: "cancer", name: "University of Washington Fred Hutchinson Cancer Center", city: "Seattle", state: "WA", lat: 47.6062, lon: -122.3321 },
    { id: "c103", disease: "cancer", name: "Emory Winship Cancer Institute", city: "Atlanta", state: "GA", lat: 33.7490, lon: -84.3880 },
    { id: "c104", disease: "cancer", name: "University of Colorado Cancer Center", city: "Denver", state: "CO", lat: 39.7393, lon: -104.9903 },
    { id: "c105", disease: "cancer", name: "University of Florida Health Cancer Center", city: "Gainesville", state: "FL", lat: 29.6516, lon: -82.3248 },
    { id: "c106", disease: "cancer", name: "Stanford Cancer Institute", city: "Stanford", state: "CA", lat: 37.4419, lon: -122.1430 },
    { id: "c107", disease: "cancer", name: "Yale Cancer Center", city: "New Haven", state: "CT", lat: 41.3083, lon: -72.9279 },
    { id: "c108", disease: "cancer", name: "University of Pennsylvania Abramson Cancer Center", city: "Philadelphia", state: "PA", lat: 39.9526, lon: -75.1652 },
    { id: "c109", disease: "cancer", name: "Northwestern Lurie Cancer Center", city: "Chicago", state: "IL", lat: 41.8781, lon: -87.6298 },
    { id: "c110", disease: "cancer", name: "University of Wisconsin Carbone Cancer Center", city: "Madison", state: "WI", lat: 43.0731, lon: -89.4012 },
    { id: "c111", disease: "cancer", name: "University of Iowa Holden Comprehensive Cancer Center", city: "Iowa City", state: "IA", lat: 41.6611, lon: -91.5302 },
    { id: "c112", disease: "cancer", name: "University of Minnesota Masonic Cancer Center", city: "Minneapolis", state: "MN", lat: 44.9778, lon: -93.2650 },
    { id: "c113", disease: "cancer", name: "Indiana University Melvin and Bren Simon Cancer Center", city: "Indianapolis", state: "IN", lat: 39.7684, lon: -86.1581 },
    { id: "c114", disease: "cancer", name: "Ohio State Comprehensive Cancer Center", city: "Columbus", state: "OH", lat: 39.9612, lon: -82.9988 },
    { id: "c115", disease: "cancer", name: "University of Pittsburgh Hillman Cancer Center", city: "Pittsburgh", state: "PA", lat: 40.4406, lon: -79.9959 },
    { id: "c116", disease: "cancer", name: "University of Virginia Cancer Center", city: "Charlottesville", state: "VA", lat: 38.0293, lon: -78.4767 },
    { id: "c117", disease: "cancer", name: "University of North Carolina Lineberger Comprehensive Cancer Center", city: "Chapel Hill", state: "NC", lat: 35.9132, lon: -79.0558 },
    { id: "c118", disease: "cancer", name: "University of South Carolina Hollings Cancer Center", city: "Columbia", state: "SC", lat: 34.0007, lon: -81.0348 },
    { id: "c119", disease: "cancer", name: "University of Alabama O'Neal Comprehensive Cancer Center", city: "Birmingham", state: "AL", lat: 33.5207, lon: -86.8025 },
    { id: "c120", disease: "cancer", name: "University of Mississippi Cancer Institute", city: "Jackson", state: "MS", lat: 32.2988, lon: -90.1848 },
    { id: "c121", disease: "cancer", name: "University of Arkansas Winthrop P. Rockefeller Cancer Institute", city: "Little Rock", state: "AR", lat: 34.7465, lon: -92.2896 },
    { id: "c122", disease: "cancer", name: "University of Oklahoma Stephenson Cancer Center", city: "Oklahoma City", state: "OK", lat: 35.4676, lon: -97.5164 },
    { id: "c123", disease: "cancer", name: "University of Kansas Cancer Center", city: "Kansas City", state: "KS", lat: 39.1147, lon: -94.6275 },
    { id: "c124", disease: "cancer", name: "University of Missouri Ellis Fischel Cancer Center", city: "Columbia", state: "MO", lat: 38.9517, lon: -92.3341 },
    { id: "c125", disease: "cancer", name: "University of Nebraska Fred & Pamela Buffett Cancer Center", city: "Omaha", state: "NE", lat: 41.2565, lon: -95.9345 },
    { id: "c126", disease: "cancer", name: "University of South Dakota Sanford Cancer Center", city: "Sioux Falls", state: "SD", lat: 43.5446, lon: -96.7311 },
    { id: "c127", disease: "cancer", name: "University of North Dakota Cancer Center", city: "Grand Forks", state: "ND", lat: 47.9253, lon: -97.0329 },
    { id: "c128", disease: "cancer", name: "University of Montana Cancer Center", city: "Missoula", state: "MT", lat: 46.8721, lon: -113.9940 },
    { id: "c129", disease: "cancer", name: "University of Wyoming Cancer Center", city: "Laramie", state: "WY", lat: 41.3114, lon: -105.5910 },
    { id: "c130", disease: "cancer", name: "University of Idaho Cancer Center", city: "Moscow", state: "ID", lat: 46.7324, lon: -117.0002 },
    { id: "c131", disease: "cancer", name: "University of Oregon Knight Cancer Institute", city: "Eugene", state: "OR", lat: 44.0521, lon: -123.0868 },
    { id: "c132", disease: "cancer", name: "University of Nevada Cancer Institute", city: "Reno", state: "NV", lat: 39.5296, lon: -119.8138 },
    { id: "c133", disease: "cancer", name: "University of Utah Huntsman Cancer Institute", city: "Salt Lake City", state: "UT", lat: 40.7608, lon: -111.8910 },
    { id: "c134", disease: "cancer", name: "University of New Mexico Comprehensive Cancer Center", city: "Albuquerque", state: "NM", lat: 35.0844, lon: -106.6504 },
    { id: "c135", disease: "cancer", name: "University of Hawaii Cancer Center", city: "Honolulu", state: "HI", lat: 21.3099, lon: -157.8581 },

    // Hypertension Centers (45 total)
    { id: "c136", disease: "hypertension", name: "Cleveland Clinic Heart & Vascular Institute", city: "Cleveland", state: "OH", lat: 41.5036, lon: -81.6206 },
    { id: "c137", disease: "hypertension", name: "Mayo Clinic Cardiovascular Medicine", city: "Rochester", state: "MN", lat: 44.0121, lon: -92.4802 },
    { id: "c138", disease: "hypertension", name: "Johns Hopkins Heart & Vascular Institute", city: "Baltimore", state: "MD", lat: 39.2992, lon: -76.5898 },
    { id: "c139", disease: "hypertension", name: "Mount Sinai Heart", city: "New York", state: "NY", lat: 40.7903, lon: -73.9597 },
    { id: "c140", disease: "hypertension", name: "UCLA Cardiovascular Center", city: "Los Angeles", state: "CA", lat: 34.0668, lon: -118.4451 },
    { id: "c141", disease: "hypertension", name: "Duke Heart Center", city: "Durham", state: "NC", lat: 36.0014, lon: -78.9382 },
    { id: "c142", disease: "hypertension", name: "University of Michigan Cardiovascular Center", city: "Ann Arbor", state: "MI", lat: 42.2808, lon: -83.7430 },
    { id: "c143", disease: "hypertension", name: "Vanderbilt Heart & Vascular Institute", city: "Nashville", state: "TN", lat: 36.1627, lon: -86.7816 },
    { id: "c144", disease: "hypertension", name: "University of Washington Heart Institute", city: "Seattle", state: "WA", lat: 47.6062, lon: -122.3321 },
    { id: "c145", disease: "hypertension", name: "Emory Heart & Vascular Center", city: "Atlanta", state: "GA", lat: 33.7490, lon: -84.3880 },
    { id: "c146", disease: "hypertension", name: "University of Texas Heart Institute", city: "Austin", state: "TX", lat: 30.2672, lon: -97.7431 },
    { id: "c147", disease: "hypertension", name: "University of Florida Heart & Vascular Institute", city: "Gainesville", state: "FL", lat: 29.6516, lon: -82.3248 },
    { id: "c148", disease: "hypertension", name: "University of Colorado Heart Institute", city: "Denver", state: "CO", lat: 39.7393, lon: -104.9903 },
    { id: "c149", disease: "hypertension", name: "University of Arizona Heart Center", city: "Tucson", state: "AZ", lat: 32.2226, lon: -110.9747 },
    { id: "c150", disease: "hypertension", name: "UCSF Heart & Vascular Center", city: "San Francisco", state: "CA", lat: 37.7631, lon: -122.4586 },
    { id: "c151", disease: "hypertension", name: "Stanford Cardiovascular Institute", city: "Stanford", state: "CA", lat: 37.4419, lon: -122.1430 },
    { id: "c152", disease: "hypertension", name: "Yale Heart & Vascular Center", city: "New Haven", state: "CT", lat: 41.3083, lon: -72.9279 },
    { id: "c153", disease: "hypertension", name: "University of Pennsylvania Heart & Vascular Center", city: "Philadelphia", state: "PA", lat: 39.9526, lon: -75.1652 },
    { id: "c154", disease: "hypertension", name: "Northwestern Bluhm Cardiovascular Institute", city: "Chicago", state: "IL", lat: 41.8781, lon: -87.6298 },
    { id: "c155", disease: "hypertension", name: "University of Wisconsin Heart & Vascular Center", city: "Madison", state: "WI", lat: 43.0731, lon: -89.4012 },
    { id: "c156", disease: "hypertension", name: "University of Iowa Heart & Vascular Center", city: "Iowa City", state: "IA", lat: 41.6611, lon: -91.5302 },
    { id: "c157", disease: "hypertension", name: "University of Minnesota Heart & Vascular Center", city: "Minneapolis", state: "MN", lat: 44.9778, lon: -93.2650 },
    { id: "c158", disease: "hypertension", name: "Indiana University Heart & Vascular Center", city: "Indianapolis", state: "IN", lat: 39.7684, lon: -86.1581 },
    { id: "c159", disease: "hypertension", name: "Ohio State Heart & Vascular Center", city: "Columbus", state: "OH", lat: 39.9612, lon: -82.9988 },
    { id: "c160", disease: "hypertension", name: "University of Pittsburgh Heart & Vascular Institute", city: "Pittsburgh", state: "PA", lat: 40.4406, lon: -79.9959 },
    { id: "c161", disease: "hypertension", name: "University of Virginia Heart & Vascular Center", city: "Charlottesville", state: "VA", lat: 38.0293, lon: -78.4767 },
    { id: "c162", disease: "hypertension", name: "University of North Carolina Heart & Vascular Center", city: "Chapel Hill", state: "NC", lat: 35.9132, lon: -79.0558 },
    { id: "c163", disease: "hypertension", name: "University of South Carolina Heart & Vascular Center", city: "Columbia", state: "SC", lat: 34.0007, lon: -81.0348 },
    { id: "c164", disease: "hypertension", name: "University of Alabama Heart & Vascular Center", city: "Birmingham", state: "AL", lat: 33.5207, lon: -86.8025 },
    { id: "c165", disease: "hypertension", name: "University of Mississippi Heart & Vascular Center", city: "Jackson", state: "MS", lat: 32.2988, lon: -90.1848 },
    { id: "c166", disease: "hypertension", name: "University of Arkansas Heart & Vascular Center", city: "Little Rock", state: "AR", lat: 34.7465, lon: -92.2896 },
    { id: "c167", disease: "hypertension", name: "University of Oklahoma Heart & Vascular Center", city: "Oklahoma City", state: "OK", lat: 35.4676, lon: -97.5164 },
    { id: "c168", disease: "hypertension", name: "University of Kansas Heart & Vascular Center", city: "Kansas City", state: "KS", lat: 39.1147, lon: -94.6275 },
    { id: "c169", disease: "hypertension", name: "University of Missouri Heart & Vascular Center", city: "Columbia", state: "MO", lat: 38.9517, lon: -92.3341 },
    { id: "c170", disease: "hypertension", name: "University of Nebraska Heart & Vascular Center", city: "Omaha", state: "NE", lat: 41.2565, lon: -95.9345 },
    { id: "c171", disease: "hypertension", name: "University of South Dakota Heart & Vascular Center", city: "Sioux Falls", state: "SD", lat: 43.5446, lon: -96.7311 },
    { id: "c172", disease: "hypertension", name: "University of North Dakota Heart & Vascular Center", city: "Grand Forks", state: "ND", lat: 47.9253, lon: -97.0329 },
    { id: "c173", disease: "hypertension", name: "University of Montana Heart & Vascular Center", city: "Missoula", state: "MT", lat: 46.8721, lon: -113.9940 },
    { id: "c174", disease: "hypertension", name: "University of Wyoming Heart & Vascular Center", city: "Laramie", state: "WY", lat: 41.3114, lon: -105.5910 },
    { id: "c175", disease: "hypertension", name: "University of Idaho Heart & Vascular Center", city: "Moscow", state: "ID", lat: 46.7324, lon: -117.0002 },
    { id: "c176", disease: "hypertension", name: "University of Oregon Heart & Vascular Center", city: "Eugene", state: "OR", lat: 44.0521, lon: -123.0868 },
    { id: "c177", disease: "hypertension", name: "University of Nevada Heart & Vascular Center", city: "Reno", state: "NV", lat: 39.5296, lon: -119.8138 },
    { id: "c178", disease: "hypertension", name: "University of Utah Heart & Vascular Center", city: "Salt Lake City", state: "UT", lat: 40.7608, lon: -111.8910 },
    { id: "c179", disease: "hypertension", name: "University of New Mexico Heart & Vascular Center", city: "Albuquerque", state: "NM", lat: 35.0844, lon: -106.6504 },
    { id: "c180", disease: "hypertension", name: "University of Hawaii Heart & Vascular Center", city: "Honolulu", state: "HI", lat: 21.3099, lon: -157.8581 },

    // Alzheimer's Centers (45 total)
    { id: "c181", disease: "alzheimer", name: "Mass General Hospital", city: "Boston", state: "MA", lat: 42.3626, lon: -71.0695 },
    { id: "c182", disease: "alzheimer", name: "UCSF Memory and Aging Center", city: "San Francisco", state: "CA", lat: 37.7631, lon: -122.4586 },
    { id: "c183", disease: "alzheimer", name: "Mayo Clinic Alzheimer's Disease Research Center", city: "Rochester", state: "MN", lat: 44.0121, lon: -92.4802 },
    { id: "c184", disease: "alzheimer", name: "Johns Hopkins Alzheimer's Disease Research Center", city: "Baltimore", state: "MD", lat: 39.2992, lon: -76.5898 },
    { id: "c185", disease: "alzheimer", name: "UCLA Alzheimer's and Dementia Care Program", city: "Los Angeles", state: "CA", lat: 34.0668, lon: -118.4451 },
    { id: "c186", disease: "alzheimer", name: "Duke Memory Disorders Clinic", city: "Durham", state: "NC", lat: 36.0014, lon: -78.9382 },
    { id: "c187", disease: "alzheimer", name: "University of Michigan Memory Disorders Clinic", city: "Ann Arbor", state: "MI", lat: 42.2808, lon: -83.7430 },
    { id: "c188", disease: "alzheimer", name: "Vanderbilt Memory & Alzheimer's Center", city: "Nashville", state: "TN", lat: 36.1627, lon: -86.7816 },
    { id: "c189", disease: "alzheimer", name: "University of Washington Memory & Brain Wellness Center", city: "Seattle", state: "WA", lat: 47.6062, lon: -122.3321 },
    { id: "c190", disease: "alzheimer", name: "Emory Alzheimer's Disease Research Center", city: "Atlanta", state: "GA", lat: 33.7490, lon: -84.3880 },
    { id: "c191", disease: "alzheimer", name: "University of Texas Memory Disorders Center", city: "Austin", state: "TX", lat: 30.2672, lon: -97.7431 },
    { id: "c192", disease: "alzheimer", name: "University of Florida Memory Disorders Clinic", city: "Gainesville", state: "FL", lat: 29.6516, lon: -82.3248 },
    { id: "c193", disease: "alzheimer", name: "University of Colorado Memory Disorders Clinic", city: "Denver", state: "CO", lat: 39.7393, lon: -104.9903 },
    { id: "c194", disease: "alzheimer", name: "University of Arizona Memory Disorders Program", city: "Tucson", state: "AZ", lat: 32.2226, lon: -110.9747 },
    { id: "c195", disease: "alzheimer", name: "Cleveland Clinic Lou Ruvo Center for Brain Health", city: "Cleveland", state: "OH", lat: 41.5036, lon: -81.6206 },
    { id: "c196", disease: "alzheimer", name: "Stanford Memory Disorders Center", city: "Stanford", state: "CA", lat: 37.4419, lon: -122.1430 },
    { id: "c197", disease: "alzheimer", name: "Yale Memory Disorders Center", city: "New Haven", state: "CT", lat: 41.3083, lon: -72.9279 },
    { id: "c198", disease: "alzheimer", name: "University of Pennsylvania Memory Disorders Center", city: "Philadelphia", state: "PA", lat: 39.9526, lon: -75.1652 },
    { id: "c199", disease: "alzheimer", name: "Northwestern Memory Disorders Center", city: "Chicago", state: "IL", lat: 41.8781, lon: -87.6298 },
    { id: "c200", disease: "alzheimer", name: "University of Wisconsin Memory Disorders Center", city: "Madison", state: "WI", lat: 43.0731, lon: -89.4012 },
    { id: "c201", disease: "alzheimer", name: "University of Iowa Memory Disorders Center", city: "Iowa City", state: "IA", lat: 41.6611, lon: -91.5302 },
    { id: "c202", disease: "alzheimer", name: "University of Minnesota Memory Disorders Center", city: "Minneapolis", state: "MN", lat: 44.9778, lon: -93.2650 },
    { id: "c203", disease: "alzheimer", name: "Indiana University Memory Disorders Center", city: "Indianapolis", state: "IN", lat: 39.7684, lon: -86.1581 },
    { id: "c204", disease: "alzheimer", name: "Ohio State Memory Disorders Center", city: "Columbus", state: "OH", lat: 39.9612, lon: -82.9988 },
    { id: "c205", disease: "alzheimer", name: "University of Pittsburgh Memory Disorders Center", city: "Pittsburgh", state: "PA", lat: 40.4406, lon: -79.9959 },
    { id: "c206", disease: "alzheimer", name: "University of Virginia Memory Disorders Center", city: "Charlottesville", state: "VA", lat: 38.0293, lon: -78.4767 },
    { id: "c207", disease: "alzheimer", name: "University of North Carolina Memory Disorders Center", city: "Chapel Hill", state: "NC", lat: 35.9132, lon: -79.0558 },
    { id: "c208", disease: "alzheimer", name: "University of South Carolina Memory Disorders Center", city: "Columbia", state: "SC", lat: 34.0007, lon: -81.0348 },
    { id: "c209", disease: "alzheimer", name: "University of Alabama Memory Disorders Center", city: "Birmingham", state: "AL", lat: 33.5207, lon: -86.8025 },
    { id: "c210", disease: "alzheimer", name: "University of Mississippi Memory Disorders Center", city: "Jackson", state: "MS", lat: 32.2988, lon: -90.1848 },
    { id: "c211", disease: "alzheimer", name: "University of Arkansas Memory Disorders Center", city: "Little Rock", state: "AR", lat: 34.7465, lon: -92.2896 },
    { id: "c212", disease: "alzheimer", name: "University of Oklahoma Memory Disorders Center", city: "Oklahoma City", state: "OK", lat: 35.4676, lon: -97.5164 },
    { id: "c213", disease: "alzheimer", name: "University of Kansas Memory Disorders Center", city: "Kansas City", state: "KS", lat: 39.1147, lon: -94.6275 },
    { id: "c214", disease: "alzheimer", name: "University of Missouri Memory Disorders Center", city: "Columbia", state: "MO", lat: 38.9517, lon: -92.3341 },
    { id: "c215", disease: "alzheimer", name: "University of Nebraska Memory Disorders Center", city: "Omaha", state: "NE", lat: 41.2565, lon: -95.9345 },
    { id: "c216", disease: "alzheimer", name: "University of South Dakota Memory Disorders Center", city: "Sioux Falls", state: "SD", lat: 43.5446, lon: -96.7311 },
    { id: "c217", disease: "alzheimer", name: "University of North Dakota Memory Disorders Center", city: "Grand Forks", state: "ND", lat: 47.9253, lon: -97.0329 },
    { id: "c218", disease: "alzheimer", name: "University of Montana Memory Disorders Center", city: "Missoula", state: "MT", lat: 46.8721, lon: -113.9940 },
    { id: "c219", disease: "alzheimer", name: "University of Wyoming Memory Disorders Center", city: "Laramie", state: "WY", lat: 41.3114, lon: -105.5910 },
    { id: "c220", disease: "alzheimer", name: "University of Idaho Memory Disorders Center", city: "Moscow", state: "ID", lat: 46.7324, lon: -117.0002 },
    { id: "c221", disease: "alzheimer", name: "University of Oregon Memory Disorders Center", city: "Eugene", state: "OR", lat: 44.0521, lon: -123.0868 },
    { id: "c222", disease: "alzheimer", name: "University of Nevada Memory Disorders Center", city: "Reno", state: "NV", lat: 39.5296, lon: -119.8138 },
    { id: "c223", disease: "alzheimer", name: "University of Utah Memory Disorders Center", city: "Salt Lake City", state: "UT", lat: 40.7608, lon: -111.8910 },
    { id: "c224", disease: "alzheimer", name: "University of New Mexico Memory Disorders Center", city: "Albuquerque", state: "NM", lat: 35.0844, lon: -106.6504 },
    { id: "c225", disease: "alzheimer", name: "University of Hawaii Memory Disorders Center", city: "Honolulu", state: "HI", lat: 21.3099, lon: -157.8581 },
];

function adjustCenters(list: Center[]): Center[] {
    const byKey = new Map<string, Center[]>();
    for (const c of list) {
        const key = `${c.lat.toFixed(6)},${c.lon.toFixed(6)}`;
        const arr = byKey.get(key) || [];
        arr.push(c);
        byKey.set(key, arr);
    }

    const result: Center[] = [];

    for (const group of byKey.values()) {
        const size = group.length;
        if (size === 1) {
            result.push(group[0]);
            continue;
        }

        // Sort to keep deterministic ordering across builds
        const sorted = [...group].sort((a, b) => a.id.localeCompare(b.id));

        const base = 0.12; // degrees ~ 13km in latitude; shrinks with group size
        const radius = base / Math.sqrt(size);

        sorted.forEach((c, idx) => {
            const angle = (2 * Math.PI * idx) / size;
            const latOffset = radius * Math.sin(angle);
            const lonMetersScale = Math.cos((c.lat * Math.PI) / 180) || 1;
            const lonOffset = (radius * Math.cos(angle)) * (1 / Math.max(lonMetersScale, 0.2));

            result.push({
                ...c,
                lat: c.lat + latOffset,
                lon: c.lon + lonOffset,
            });
        });
    }

    return result;
}

export const CENTERS: Center[] = adjustCenters(BASE_CENTERS);
