var jsonfile = {
   "jsonarray": [
 {
   "Time": 1.50,
   "Temperature": 0.00
 },
 {
   "Time": 7.32,
   "Temperature": 71.06
 },
 {
   "Time": 9.98,
   "Temperature": 71.06
 },
 {
   "Time": 12.63,
   "Temperature": 71.06
 },
 {
   "Time": 15.27,
   "Temperature": 71.06
 },
 {
   "Time": 17.93,
   "Temperature": 71.06
 },
 {
   "Time": 20.58,
   "Temperature": 71.06
 },
 {
   "Time": 23.23,
   "Temperature": 71.06
 },
 {
   "Time": 25.88,
   "Temperature": 71.06
 },
 {
   "Time": 28.57,
   "Temperature": 71.06
 },
 {
   "Time": 31.29,
   "Temperature": 71.06
 },
 {
   "Time": 33.94,
   "Temperature": 71.06
 },
 {
   "Time": 36.59,
   "Temperature": 71.06
 },
 {
   "Time": 39.24,
   "Temperature": 71.06
 },
 {
   "Time": 41.89,
   "Temperature": 71.06
 },
 {
   "Time": 44.54,
   "Temperature": 71.06
 },
 {
   "Time": 47.19,
   "Temperature": 71.06
 },
 {
   "Time": 49.84,
   "Temperature": 71.06
 },
 {
   "Time": 55.49,
   "Temperature": 71.06
 },
 {
   "Time": 58.18,
   "Temperature": 71.06
 },
 {
   "Time": 60.87,
   "Temperature": 71.06
 },
 {
   "Time": 63.56,
   "Temperature": 71.06
 },
 {
   "Time": 66.20,
   "Temperature": 71.06
 },
 {
   "Time": 71.86,
   "Temperature": 71.06
 },
 {
   "Time": 74.51,
   "Temperature": 71.06
 },
 {
   "Time": 77.16,
   "Temperature": 71.06
 },
 {
   "Time": 79.81,
   "Temperature": 71.06
 },
 {
   "Time": 82.46,
   "Temperature": 71.06
 },
 {
   "Time": 85.11,
   "Temperature": 71.06
 },
 {
   "Time": 87.79,
   "Temperature": 71.06
 },
 {
   "Time": 90.44,
   "Temperature": 71.06
 },
 {
   "Time": 93.13,
   "Temperature": 71.06
 },
 {
   "Time": 98.82,
   "Temperature": 71.06
 },
 {
   "Time": 101.47,
   "Temperature": 71.06
 },
 {
   "Time": 104.12,
   "Temperature": 71.06
 },
 {
   "Time": 106.77,
   "Temperature": 71.06
 },
 {
   "Time": 109.42,
   "Temperature": 71.06
 },
 {
   "Time": 112.07,
   "Temperature": 71.06
 },
 {
   "Time": 114.76,
   "Temperature": 71.06
 },
 {
   "Time": 117.41,
   "Temperature": 71.06
 },
 {
   "Time": 120.06,
   "Temperature": 71.06
 },
 {
   "Time": 122.75,
   "Temperature": 71.06
 },
 {
   "Time": 125.43,
   "Temperature": 71.06
 },
 {
   "Time": 128.09,
   "Temperature": 71.06
 },
 {
   "Time": 130.74,
   "Temperature": 71.24
 },
 {
   "Time": 133.39,
   "Temperature": 71.06
 },
 {
   "Time": 136.04,
   "Temperature": 71.24
 }
]
};

var labels = jsonfile.jsonarray.map(function(e) {
   return e.Time;
});

var data = jsonfile.jsonarray.map(function(e) {
   return e.Temperature;
});

var ctx = canvas2.getContext('2d');

var config = {
   type: 'line',
   data: {
      labels: labels,
      datasets: [{
         label: 'Temperature',
         data: data,
         backgroundColor: 'rgba(0, 119, 204, 0.3)'
      }]
   }
};

var chart = new Chart(ctx, config);
