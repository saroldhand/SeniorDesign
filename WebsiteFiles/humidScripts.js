var jsonfile = {
   "jsonarray": [
 {
   "Time": 1.89,
   "Humidity": 0.00
 },
 {
   "Time": 7.54,
   "Humidity": 54.10
 },
 {
   "Time": 10.19,
   "Humidity": 54.10
 },
 {
   "Time": 12.84,
   "Humidity": 54.00
 },
 {
   "Time": 15.49,
   "Humidity": 54.10
 },
 {
   "Time": 18.14,
   "Humidity": 54.10
 },
 {
   "Time": 20.79,
   "Humidity": 54.10
 },
 {
   "Time": 23.44,
   "Humidity": 54.10
 },
 {
   "Time": 26.09,
   "Humidity": 54.20
 },
 {
   "Time": 28.78,
   "Humidity": 54.10
 },
 {
   "Time": 31.50,
   "Humidity": 54.20
 },
 {
   "Time": 34.16,
   "Humidity": 54.10
 },
 {
   "Time": 36.81,
   "Humidity": 54.10
 },
 {
   "Time": 39.46,
   "Humidity": 54.20
 },
 {
   "Time": 42.11,
   "Humidity": 54.30
 },
 {
   "Time": 44.76,
   "Humidity": 54.30
 },
 {
   "Time": 47.41,
   "Humidity": 54.30
 },
 {
   "Time": 50.06,
   "Humidity": 54.30
 },
 {
   "Time": 55.75,
   "Humidity": 54.20
 },
 {
   "Time": 58.40,
   "Humidity": 54.20
 },
 {
   "Time": 61.08,
   "Humidity": 54.20
 },
 {
   "Time": 63.77,
   "Humidity": 54.20
 },
 {
   "Time": 66.42,
   "Humidity": 54.20
 },
 {
   "Time": 72.07,
   "Humidity": 54.20
 },
 {
   "Time": 74.72,
   "Humidity": 54.20
 },
 {
   "Time": 77.37,
   "Humidity": 54.20
 },
 {
   "Time": 80.02,
   "Humidity": 54.20
 },
 {
   "Time": 82.68,
   "Humidity": 54.20
 },
 {
   "Time": 85.36,
   "Humidity": 54.10
 },
 {
   "Time": 88.01,
   "Humidity": 54.10
 },
 {
   "Time": 90.70,
   "Humidity": 54.20
 },
 {
   "Time": 93.35,
   "Humidity": 54.10
 },
 {
   "Time": 99.04,
   "Humidity": 54.10
 },
 {
   "Time": 101.69,
   "Humidity": 54.10
 },
 {
   "Time": 104.34,
   "Humidity": 54.10
 },
 {
   "Time": 106.99,
   "Humidity": 54.10
 },
 {
   "Time": 109.64,
   "Humidity": 54.10
 },
 {
   "Time": 112.33,
   "Humidity": 54.10
 },
 {
   "Time": 114.98,
   "Humidity": 54.10
 },
 {
   "Time": 117.63,
   "Humidity": 54.10
 },
 {
   "Time": 120.31,
   "Humidity": 54.10
 },
 {
   "Time": 122.96,
   "Humidity": 54.10
 },
 {
   "Time": 125.65,
   "Humidity": 54.10
 },
 {
   "Time": 128.30,
   "Humidity": 54.10
 },
 {
   "Time": 130.95,
   "Humidity": 54.10
 },
 {
   "Time": 133.60,
   "Humidity": 54.00
 },
 {
   "Time": 136.26,
   "Humidity": 54.10
 }
]
};

var labels = jsonfile.jsonarray.map(function(e) {
   return e.Time;
});

var data = jsonfile.jsonarray.map(function(e) {
   return e.Humidity;
});

var ctx = canvas3.getContext('2d');

var config = {
   type: 'line',
   data: {
      labels: labels,
      datasets: [{
         label: 'Humidity',
         data: data,
         backgroundColor: 'rgba(0, 119, 204, 0.3)'
      }]
   }
};

var chart = new Chart(ctx, config);
