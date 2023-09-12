// API Keys
const apiKeyWeather = 'b7d1023a1dead77fc19baa224a9257ca';
const apiKeyMapbox = 'pk.eyJ1IjoibWFubzAwMDEiLCJhIjoiY2xtZHVucGxtMHJsZDNwbGtkNDBhOHd0bCJ9.mvt5YDdTbFhUlj516B95_Q';
const apiKeyTicketMaster = '9DrMYgc4sGksWhyNACfG4pQrwYTcbV0t';

// DOM elements
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-city");

// Event listener for form submission
searchForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    // Get the city value from the input field
    const cityVal = searchInput.value;

    // Fetch weather data from OpenWeather API
    const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=${apiKeyWeather}&units=metric`);

    // Fetch geolocation data from Mapbox API
    const geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${cityVal}.json?access_token=${apiKeyMapbox}`;

    fetch(geocodeUrl)
        .then(response => response.json())
        .then(data => {
            // Extract coordinates from the geolocation data
            const coordinates = data.features[0].center;
            const latitude = coordinates[1].toFixed(4);
            const longitude = coordinates[0].toFixed(4);

            // Generate the map image URL using Mapbox API
            const mapUrl = `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/${longitude},${latitude},10.85,0/600x200?access_token=${apiKeyMapbox}`;

            // Display the map image
            document.getElementById("mapData").innerHTML = `<img id="map-image" src="${mapUrl}" alt="Map Image">`;
        })
        .catch(error => {
            console.error("Error fetching map data:", error);
        });

    // Convert weather data to JSON
    const weatherDataJson = await weatherResponse.json();
    const temperature = weatherDataJson.main.temp;
    const feels_like = weatherDataJson.main.feels_like;
    const wind_speed = weatherDataJson.wind.speed;
    const humidity = weatherDataJson.main.humidity;

    // Display weather data in the HTML
    document.getElementById("weatherData").innerHTML = `<h3>${cityVal}</h3> 
                                                        ${temperature}°C (feels like ${feels_like}°C)</br>
                                                        Humidity: ${humidity}%</br>
                                                        Wind speed: ${wind_speed} m/s`;

    // Fetch weather data from OpenWeather API
    const eventsResponse = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKeyTicketMaster}&city=${cityVal}`
      );
      const eventData = await eventsResponse.json();
      const events = eventData._embedded ? eventData._embedded.events : [];
    
      // Display event information
      document.getElementById("events").innerHTML = "";
      if (events.length === 0) {
        document.getElementById("events").innerHTML = "<li>No upcoming events found.</li>";
      } else {
        events.forEach((event) => {
          const eventName = event.name;
          const eventDate = event.dates.start.localDate;
          const eventVenue = event._embedded.venues[0].name;
          const listItem = document.createElement("li");
          listItem.textContent = `(${eventDate}) ${eventName} - ${eventVenue}`;
          document.getElementById("events").appendChild(listItem);
        });
      }
});
