var jsonfile = {
   "jsonarray": [
 {
   "Time": 1.10,
   "Moisture": 0
 },
 {
   "Time": 7.11,
   "Moisture": 0
 },
 {
   "Time": 9.76,
   "Moisture": 0
 },
 {
   "Time": 12.41,
   "Moisture": 0
 },
 {
   "Time": 15.06,
   "Moisture": 0
 },
 {
   "Time": 17.71,
   "Moisture": 0
 },
 {
   "Time": 20.36,
   "Moisture": 0
 },
 {
   "Time": 23.01,
   "Moisture": 0
 },
 {
   "Time": 25.66,
   "Moisture": 0
 },
 {
   "Time": 28.31,
   "Moisture": 0
 },
 {
   "Time": 31.04,
   "Moisture": 0
 },
 {
   "Time": 33.72,
   "Moisture": 0
 },
 {
   "Time": 36.38,
   "Moisture": 0
 },
 {
   "Time": 39.02,
   "Moisture": 0
 },
 {
   "Time": 41.67,
   "Moisture": 269
 },
 {
   "Time": 44.33,
   "Moisture": 325
 },
 {
   "Time": 46.98,
   "Moisture": 413
 },
 {
   "Time": 49.63,
   "Moisture": 392
 },
 {
   "Time": 55.28,
   "Moisture": 419
 },
 {
   "Time": 57.97,
   "Moisture": 420
 },
 {
   "Time": 60.65,
   "Moisture": 418
 },
 {
   "Time": 63.34,
   "Moisture": 421
 },
 {
   "Time": 65.99,
   "Moisture": 358
 },
 {
   "Time": 71.64,
   "Moisture": 6
 },
 {
   "Time": 74.29,
   "Moisture": 4
 },
 {
   "Time": 76.94,
   "Moisture": 4
 },
 {
   "Time": 79.59,
   "Moisture": 123
 },
 {
   "Time": 82.24,
   "Moisture": 77
 },
 {
   "Time": 84.89,
   "Moisture": 141
 },
 {
   "Time": 87.58,
   "Moisture": 450
 },
 {
   "Time": 90.23,
   "Moisture": 491
 },
 {
   "Time": 92.92,
   "Moisture": 301
 },
 {
   "Time": 98.61,
   "Moisture": 302
 },
 {
   "Time": 101.25,
   "Moisture": 278
 },
 {
   "Time": 103.91,
   "Moisture": 284
 },
 {
   "Time": 106.56,
   "Moisture": 248
 },
 {
   "Time": 109.21,
   "Moisture": 207
 },
 {
   "Time": 111.86,
   "Moisture": 57
 },
 {
   "Time": 114.55,
   "Moisture": 6
 },
 {
   "Time": 117.19,
   "Moisture": 3
 },
 {
   "Time": 119.84,
   "Moisture": 7
 },
 {
   "Time": 122.53,
   "Moisture": 7
 },
 {
   "Time": 125.18,
   "Moisture": 7
 },
 {
   "Time": 127.87,
   "Moisture": 7
 },
 {
   "Time": 130.52,
   "Moisture": 7
 },
 {
   "Time": 133.17,
   "Moisture": 7
 },
 {
   "Time": 135.82,
   "Moisture": 7
 }
]
};

var labels = jsonfile.jsonarray.map(function(e) {
   return e.Time;
});

var data = jsonfile.jsonarray.map(function(e) {
   return e.Moisture;
});

var ctx = canvas.getContext('2d');

var config = {
   type: 'line',
   data: {
      labels: labels,
      datasets: [{
         label: 'Moisture Level',
         data: data,
         backgroundColor: 'rgba(0, 119, 204, 0.3)'
      }]
   }
};

var chart = new Chart(ctx, config);
