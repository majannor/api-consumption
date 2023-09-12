<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>API consumption</title>
    <link rel="stylesheet" href="styles.css">
    <script src="js/script.js" defer></script>
</head>
<body>
    <header>
        <nav>
            <h1>API consumption</h1>
        </nav>
    </header>
    <main>
        <form id="search-form">
            <div>    
                <label for="search-city">Town</label>
                <input type="text" id="search-city" name="city" required>
                <button type="submit">Town information</button>
            </div> 
            <!-- Weather -->
            <div id="weatherInfo">
                <p id="weatherData"></p>
            </div>
        </form>

        <!-- Map -->
        <div id="mapData">          
        </div>

        <!-- Events -->
        <div id="events"></div>
    </main>
</body>
</html>