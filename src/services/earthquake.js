app.factory("EarthquakeService", [
    "$http",
    function ($http) {
        return {
            getEarthquakesLastHours: function (hours, getAllQuakes) {
                return $http.get("http://localhost:3000/url-to-json?value=https://en.vedur.is/earthquakes-and-volcanism/earthquakes&o=VI.quakeInfo").then(
                    function (response) {
                        var earthquakes = [];

                        if (response.status === 200) {
                            for (var i = 0; i < response.data.length; ++i) {
                                var currentEarthquakeData = response.data[i];
                                var earthquake = new Earthquake(currentEarthquakeData);
                                if (earthquake.isFromBardarbunga() || getAllQuakes) {
                                    earthquakes.push(earthquake);
                                }
                            }
                        }

                        return earthquakes;
                    }
                );
            }
        }
    }
]);
