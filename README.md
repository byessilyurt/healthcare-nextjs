# US Disease Centers Map

An interactive web application that displays healthcare centers across the United States, organized by disease specialty. Built with Next.js 15, React 19, TypeScript, and Leaflet for mapping.

## Features

- **Interactive Map**: View healthcare centers on an interactive map using OpenStreetMap
- **Disease Filtering**: Filter centers by disease specialty (Diabetes, Asthma, Cancer, Hypertension, Alzheimer's)
- **Real-time Updates**: Centers update instantly when selecting/deselecting diseases
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean, professional interface with smooth animations
- **Comprehensive Coverage**: 225 major healthcare centers across all 50 states

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

The application includes **225 major healthcare centers** across the United States, covering 5 disease specialties with 45 centers each:

### **Diabetes Centers (45)**
Comprehensive coverage including:
- Mayo Clinic (Rochester, MN)
- UCSF Medical Center (San Francisco, CA)
- Joslin Diabetes Center (Boston, MA)
- Stanford Diabetes Center (Stanford, CA)
- Yale Diabetes Center (New Haven, CT)
- University of Pennsylvania Diabetes Center (Philadelphia, PA)
- Northwestern Diabetes Center (Chicago, IL)
- And 38 more centers across all states

### **Asthma Centers (45)**
Extensive pulmonary medicine coverage including:
- National Jewish Health (Denver, CO)
- Johns Hopkins Hospital (Baltimore, MD)
- Mount Sinai Hospital (New York, NY)
- UCLA Medical Center (Los Angeles, CA)
- Stanford Pulmonary Medicine (Stanford, CA)
- Yale Pulmonary Medicine (New Haven, CT)
- And 39 more centers across all states

### **Cancer Centers (45)**
Comprehensive cancer care including:
- MD Anderson Cancer Center (Houston, TX)
- Memorial Sloan Kettering (New York, NY)
- Dana-Farber Cancer Institute (Boston, MA)
- Stanford Cancer Institute (Stanford, CA)
- Yale Cancer Center (New Haven, CT)
- University of Pennsylvania Abramson Cancer Center (Philadelphia, PA)
- And 39 more centers across all states

### **Hypertension Centers (45)**
Extensive cardiovascular care including:
- Cleveland Clinic Heart & Vascular Institute (Cleveland, OH)
- Mayo Clinic Cardiovascular Medicine (Rochester, MN)
- Johns Hopkins Heart & Vascular Institute (Baltimore, MD)
- Stanford Cardiovascular Institute (Stanford, CA)
- Yale Heart & Vascular Center (New Haven, CT)
- Northwestern Bluhm Cardiovascular Institute (Chicago, IL)
- And 39 more centers across all states

### **Alzheimer's Centers (45)**
Comprehensive memory and brain health including:
- Mass General Hospital (Boston, MA)
- UCSF Memory and Aging Center (San Francisco, CA)
- Mayo Clinic Alzheimer's Disease Research Center (Rochester, MN)
- Stanford Memory Disorders Center (Stanford, CA)
- Yale Memory Disorders Center (New Haven, CT)
- University of Pennsylvania Memory Disorders Center (Philadelphia, PA)
- And 39 more centers across all states

Each center includes:
- Unique ID
- Disease specialty
- Center name
- City and state
- Geographic coordinates (latitude/longitude)

## Geographic Coverage

The application now provides comprehensive coverage across all 50 states and territories:

- **Northeast**: Massachusetts, New York, Connecticut, Pennsylvania, Maryland, New Jersey, Rhode Island, Vermont, New Hampshire, Maine
- **Southeast**: North Carolina, South Carolina, Georgia, Florida, Tennessee, Alabama, Mississippi, Arkansas, Louisiana, Kentucky, West Virginia, Virginia
- **Midwest**: Michigan, Wisconsin, Illinois, Indiana, Ohio, Minnesota, Iowa, Missouri, Kansas, Nebraska, North Dakota, South Dakota
- **Southwest**: Texas, Oklahoma, New Mexico, Arizona
- **West Coast**: California, Oregon, Washington, Alaska, Hawaii
- **Mountain Region**: Colorado, Utah, Nevada, Montana, Wyoming, Idaho

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
