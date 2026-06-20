// API Configuration
const API_KEY = '84a8b9cbf5e242c383e143700261706'; // Using WeatherAPI.com free tier
const API_BASE_URL = 'https://api.weatherapi.com/v1/current.json';

// DOM Elements
const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const weatherInfo = document.getElementById('weatherInfo');
const errorMsg = document.getElementById('errorMsg');

// Event Listeners
searchBtn.addEventListener('click', handleSearch);
cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleSearch();
    }
});

// Handle Search
async function handleSearch() {
    const city = cityInput.value.trim();
    
    if (!city) {
        showError('Please enter a city name');
        return;
    }

    try {
        hideError();
        await fetchWeather(city);
    } catch (error) {
        showError(error.message);
    }
}

// Fetch Weather Data
async function fetchWeather(city) {
    const response = await fetch(
        `${API_BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(city)}&aqi=no`
    );

    if (!response.ok) {
        if (response.status === 400) {
            throw new Error('City not found. Please check the spelling.');
        }
        throw new Error('Failed to fetch weather data');
    }

    const data = await response.json();
    displayWeather(data);
}

// Display Weather Information
function displayWeather(data) {
    const current = data.current;
    const location = data.location;

    // Update DOM with weather data
    document.getElementById('cityName').textContent = 
        `${location.name}, ${location.country}`;
    
    document.getElementById('temp').textContent = 
        `${Math.round(current.temp_c)}°C`;
    
    document.getElementById('condition').textContent = 
        current.condition.text;
    
    document.getElementById('feelsLike').textContent = 
        `${Math.round(current.feelslike_c)}°C`;
    
    document.getElementById('humidity').textContent = 
        `${current.humidity}%`;
    
    document.getElementById('windSpeed').textContent = 
        `${current.wind_kph} km/h`;
    
    document.getElementById('pressure').textContent = 
        `${current.pressure_mb} mb`;

    // Show weather info
    weatherInfo.classList.remove('hidden');
    cityInput.value = '';
}

// Error Handling
function showError(message) {
    errorMsg.textContent = message;
    errorMsg.classList.remove('hidden');
    weatherInfo.classList.add('hidden');
}

function hideError() {
    errorMsg.classList.add('hidden');
}

// Load weather for default city on page load
window.addEventListener('load', () => {
    cityInput.value = 'London';
    handleSearch();
});
