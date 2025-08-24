# US Disease Centers Map

An interactive web application that displays healthcare centers across the United States, organized by disease specialty. Built with Next.js 15, React 19, TypeScript, and Leaflet for mapping.

## Features

- **Interactive Map**: View healthcare centers on an interactive map using OpenStreetMap
- **Disease Filtering**: Filter centers by disease specialty (Diabetes, Asthma, Cancer, Hypertension, Alzheimer's)
- **Real-time Updates**: Centers update instantly when selecting/deselecting diseases
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean, professional interface with smooth animations

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

The application includes 25 major healthcare centers across the US, covering 5 disease specialties:

- **Diabetes**: 5 centers including Mayo Clinic, UCSF Medical Center
- **Asthma**: 5 centers including National Jewish Health, Johns Hopkins
- **Cancer**: 5 centers including MD Anderson, Memorial Sloan Kettering
- **Hypertension**: 5 centers including Cleveland Clinic Heart Institute
- **Alzheimer's**: 5 centers including Mass General, UCSF Memory Center

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
