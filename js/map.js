// Initialize the map
const map = L.map('map').setView([51.2194, 4.4025], 13); // Coordinates for Antwerp, Belgium

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a marker to the map
const marker = L.marker([51.2194, 4.4025]).addTo(map);

// Add a popup to the marker
marker.bindPopup('<b>Antwerp</b><br>This is where I am located!').openPopup();

// Optional: Add a circle around the location
const circle = L.circle([51.2194, 4.4025], {
    color: 'blue',
    fillColor: '#30f',
    fillOpacity: 0.3,
    radius: 500
}).addTo(map);
