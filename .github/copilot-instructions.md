# Weather With Cindy - Project Instructions

## Project Overview
A simple, responsive weather website that displays current weather conditions for any city worldwide using the WeatherAPI.com free API.

## Technology Stack
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **API**: WeatherAPI.com (Free tier)
- **Deployment**: Static HTML/CSS/JS files

## How to Run
1. Open `index.html` directly in a web browser, or
2. Use a local server:
   - Python 3: `python -m http.server 8000`
   - Python 2: `python -m SimpleHTTPServer 8000`
3. Visit `http://localhost:8000` in your browser

## Project Features
- Real-time weather search by city name
- Displays temperature, humidity, wind speed, and pressure
- Responsive design for mobile and desktop
- Beautiful gradient UI with smooth animations
- No build process or dependencies required

## File Structure
```
WeatherWithCindy/
├── index.html       # Main HTML file
├── styles.css       # CSS styling
├── script.js        # JavaScript functionality
├── README.md        # Project documentation
└── .github/
    └── copilot-instructions.md
```

## API Configuration
- API: WeatherAPI.com
- Endpoint: https://api.weatherapi.com/v1/current.json
- API Key: e7b60a94c4af433a12151501242606 (included)
- Free tier allows up to 1 million API calls per month

## Development Notes
- No npm packages or build tools required
- Vanilla JavaScript (no frameworks)
- CSS Grid and Flexbox for responsive layout
- Async/await for API calls

## Customization Ideas
- Change the API key in `script.js` if using your own
- Modify the color scheme in `styles.css`
- Add features like forecast, favorites, or geolocation
- Change the default city on page load in `script.js`

## Browser Support
- Chrome, Firefox, Safari, Edge (latest versions)
