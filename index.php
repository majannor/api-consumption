<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>API consumption</title>
    <link rel="stylesheet" href="styles.css"/>
    <script src="js/script.js" defer></script>
</head>
<body>
    <header>
        <h1>API Consumption</h1>
    </header>
    <main>
        <form id="search-form">
            <div>    
                <label for="search-city">Town</label>
                <input type="text" id="search-city" name="city" required>
                <button type="submit">Town information</button>
            </div> 
        </form>
        
        <div>
            <!-- Weather -->
            <p id="weatherData"></p>
            
            <!-- Map -->
            <p id="mapData"></p>
        </div>

        <!-- Events -->
        <div id="events"></div>
    </main>
</body>
</html>