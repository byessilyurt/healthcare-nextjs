# US Disease Centers Map

An interactive web application that displays healthcare centers across the United States, organized by disease specialty. Built with Next.js 15, React 19, TypeScript, and Leaflet for mapping.

## Features

- **Interactive Map**: View healthcare centers on an interactive map using OpenStreetMap
- **Disease Filtering**: Filter centers by disease specialty (Diabetes, Asthma, Cancer, Hypertension, Alzheimer's)
- **Real-time Updates**: Centers update instantly when selecting/deselecting diseases
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean, professional interface with smooth animations
- **Comprehensive Coverage**: 75 major healthcare centers across 15+ states

## Technologies Used

- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Leaflet** - Interactive maps
- **React Leaflet** - React components for Leaflet

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd healthcare-nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── centers/
│   │       └── route.ts          # API endpoint for centers data
│   ├── components/
│   │   ├── DiseaseMultiSelect.tsx # Disease selection component
│   │   └── UsMap.tsx             # Interactive map component
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
└── data/
    └── centers.ts                # Healthcare centers data
```

## Data Structure

The application includes **75 major healthcare centers** across the United States, covering 5 disease specialties with 15 centers each:

### **Diabetes Centers (15)**
- Mayo Clinic (Rochester, MN)
- UCSF Medical Center (San Francisco, CA)
- Joslin Diabetes Center (Boston, MA)
- Cleveland Clinic (Cleveland, OH)
- Duke Health (Durham, NC)
- Johns Hopkins Diabetes Center (Baltimore, MD)
- Mount Sinai Diabetes Center (New York, NY)
- UCLA Diabetes Center (Los Angeles, CA)
- University of Michigan Diabetes Center (Ann Arbor, MI)
- Vanderbilt Diabetes Center (Nashville, TN)
- University of Washington Diabetes Institute (Seattle, WA)
- Emory Diabetes Center (Atlanta, GA)
- University of Texas Diabetes Center (Austin, TX)
- University of Colorado Diabetes Center (Denver, CO)
- University of Florida Diabetes Institute (Gainesville, FL)

### **Asthma Centers (15)**
- National Jewish Health (Denver, CO)
- Johns Hopkins Hospital (Baltimore, MD)
- Mount Sinai Hospital (New York, NY)
- UCLA Medical Center (Los Angeles, CA)
- University of Michigan Health (Ann Arbor, MI)
- Cleveland Clinic Respiratory Institute (Cleveland, OH)
- Mayo Clinic Pulmonary Medicine (Rochester, MN)
- Duke Pulmonary Medicine (Durham, NC)
- University of Washington Pulmonary Center (Seattle, WA)
- Emory Asthma Center (Atlanta, GA)
- University of Texas Pulmonary Institute (Austin, TX)
- University of Florida Pulmonary Center (Gainesville, FL)
- Vanderbilt Pulmonary Medicine (Nashville, TN)
- University of Colorado Pulmonary Center (Denver, CO)
- University of Arizona Asthma Center (Tucson, AZ)

### **Cancer Centers (15)**
- MD Anderson Cancer Center (Houston, TX)
- Memorial Sloan Kettering (New York, NY)
- Dana-Farber Cancer Institute (Boston, MA)
- UCSF Helen Diller Family Comprehensive Cancer Center (San Francisco, CA)
- UCLA Jonsson Comprehensive Cancer Center (Los Angeles, CA)
- Mayo Clinic Cancer Center (Rochester, MN)
- Cleveland Clinic Taussig Cancer Institute (Cleveland, OH)
- Johns Hopkins Sidney Kimmel Cancer Center (Baltimore, MD)
- Duke Cancer Institute (Durham, NC)
- University of Michigan Rogel Cancer Center (Ann Arbor, MI)
- Vanderbilt-Ingram Cancer Center (Nashville, TN)
- University of Washington Fred Hutchinson Cancer Center (Seattle, WA)
- Emory Winship Cancer Institute (Atlanta, GA)
- University of Colorado Cancer Center (Denver, CO)
- University of Florida Health Cancer Center (Gainesville, FL)

### **Hypertension Centers (15)**
- Cleveland Clinic Heart & Vascular Institute (Cleveland, OH)
- Mayo Clinic Cardiovascular Medicine (Rochester, MN)
- Johns Hopkins Heart & Vascular Institute (Baltimore, MD)
- Mount Sinai Heart (New York, NY)
- UCLA Cardiovascular Center (Los Angeles, CA)
- Duke Heart Center (Durham, NC)
- University of Michigan Cardiovascular Center (Ann Arbor, MI)
- Vanderbilt Heart & Vascular Institute (Nashville, TN)
- University of Washington Heart Institute (Seattle, WA)
- Emory Heart & Vascular Center (Atlanta, GA)
- University of Texas Heart Institute (Austin, TX)
- University of Florida Heart & Vascular Institute (Gainesville, FL)
- University of Colorado Heart Institute (Denver, CO)
- University of Arizona Heart Center (Tucson, AZ)
- UCSF Heart & Vascular Center (San Francisco, CA)

### **Alzheimer's Centers (15)**
- Mass General Hospital (Boston, MA)
- UCSF Memory and Aging Center (San Francisco, CA)
- Mayo Clinic Alzheimer's Disease Research Center (Rochester, MN)
- Johns Hopkins Alzheimer's Disease Research Center (Baltimore, MD)
- UCLA Alzheimer's and Dementia Care Program (Los Angeles, CA)
- Duke Memory Disorders Clinic (Durham, NC)
- University of Michigan Memory Disorders Clinic (Ann Arbor, MI)
- Vanderbilt Memory & Alzheimer's Center (Nashville, TN)
- University of Washington Memory & Brain Wellness Center (Seattle, WA)
- Emory Alzheimer's Disease Research Center (Atlanta, GA)
- University of Texas Memory Disorders Center (Austin, TX)
- University of Florida Memory Disorders Clinic (Gainesville, FL)
- University of Colorado Memory Disorders Clinic (Denver, CO)
- University of Arizona Memory Disorders Program (Tucson, AZ)
- Cleveland Clinic Lou Ruvo Center for Brain Health (Cleveland, OH)

Each center includes:
- Unique ID
- Disease specialty
- Center name
- City and state
- Geographic coordinates (latitude/longitude)

## API Endpoints

### GET /api/centers

Returns filtered healthcare centers based on disease selection.

**Query Parameters:**
- `diseases` (optional): Comma-separated list of diseases to filter by

**Example:**
```
GET /api/centers?diseases=diabetes,asthma
```

**Response:**
```json
{
  "centers": [
    {
      "id": "c1",
      "disease": "diabetes",
      "name": "Mayo Clinic",
      "city": "Rochester",
      "state": "MN",
      "lat": 44.0121,
      "lon": -92.4802
    }
  ]
}
```

## Deployment

The application can be deployed to any platform that supports Next.js:

- **Vercel** (recommended)
- **Netlify**
- **AWS Amplify**
- **Self-hosted**

### Vercel Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- OpenStreetMap for map tiles
- Leaflet for the mapping library
- All healthcare centers for their important work
