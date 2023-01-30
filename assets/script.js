<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./assets/style.css" />
    <title>Weather Dashboard</title>
</head>

<body>
    <header>
        <h1>Weather Dashboard</h1>
    </header>

    <main class="main1">
        <div class="search_section">
            <label>Search for a City:</label>
            <input type="text" id="city_searched" placeholder=" San Diego" />
            <button id="search">Search</button>
        </div>
        <div class="current_forecast">
            <div class="city_breakdown">
                <h2 id="city">City</h2>
                <h3 id="temp">Temp:</h3>
                <h3 id="wind">Wind:</h3>
                <h3 id="humidity">Humidity:</h3>
            </div>
        </div>
    </main>

    <main class="main2">
        <div class="buttons">
        </div>
        <div class="five_day_forecast">
            <div class="title">
                <h3>5-Day Forecast</h3>
            </div>
            <div class="five_day_breakdown">
                <div class="day_breakdown">
                    <h2 id="date1" class="date">Date</h2>
                    <h3 id="icon1"></h3>
                    <h3 id="temp1">Temp:</h3>
                    <h3 id="wind1">Wind:</h3>
                    <h3 id="humidity1">Humidity:</h3>
                </div>
                <div class="day_breakdown">
                    <h2 id="date2" class="date">Date</h2>
                    <h3 id="icon2"></h3>
                    <h3 id="temp2">Temp:</h3>
                    <h3 id="wind2">Wind:</h3>
                    <h3 id="humidity2">Humidity:</h3>
                </div>
                <div class="day_breakdown">
                    <h2 id="date3" class="date">Date</h2>
                    <h3 id="icon3"></h3>
                    <h3 id="temp3">Temp:</h3>
                    <h3 id="wind3">Wind:</h3>
                    <h3 id="humidity3">Humidity:</h3>
                </div>
                <div class="day_breakdown">
                    <h2 id="date4" class="date">Date</h2>
                    <h3 id="icon4"></h3>
                    <h3 id="temp4">Temp:</h3>
                    <h3 id="wind4">Wind:</h3>
                    <h3 id="humidity4">Humidity:</h3>
                </div>
                <div class="day_breakdown">
                    <h2 id="date5" class="date">Date</h2>
                    <h3 id="icon5"></h3>
                    <h3 id="temp5">Temp:</h3>
                    <h3 id="wind5">Wind:</h3>
                    <h3 id="humidity5">Humidity:</h3>
                </div>
            </div>
        </div>
    </main>

    <script src="./assets/script.js"></script>

</body>

</html>
