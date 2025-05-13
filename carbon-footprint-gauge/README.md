# Carbon Footprint Gauge for Cloud Services

## Project Overview
The Carbon Footprint Gauge is a web application designed to visualize the environmental impact of cloud resource usage. It fetches usage metrics from various cloud service providers and calculates the associated carbon footprint, providing users with insights into their cloud consumption and its environmental implications.

## Technologies Used
- **Frontend**: Next.js, React, TypeScript
- **Charts**: React chart libraries
- **Hosting**: AWS Amplify
- **Data Source**: OpenAI Usage API (or equivalent)

## Features
- Live display of cloud service usage metrics.
- Graphical representation of data using charts.
- Calculation of carbon emissions based on usage metrics.
- Responsive design for an optimal user experience.

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/carbon-footprint-gauge.git
   ```
2. Navigate to the project directory:
   ```
   cd carbon-footprint-gauge
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application
To start the development server, run:
```
npm run dev
```
The application will be available at `http://localhost:3000`.

## API Integration
The application connects to the OpenAI Usage API (or equivalent) to fetch live usage statistics. Ensure you have the necessary API keys and permissions set up.

## Future Enhancements
- Expand the application to include metrics from additional cloud services (e.g., AWS EC2, Google Cloud).
- Implement user authentication for personalized dashboards.
- Add historical data storage for trend analysis.
