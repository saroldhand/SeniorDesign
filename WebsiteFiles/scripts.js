// get the canvas element and create a new Chart object
var ctx = document.getElementById("myChart").getContext("2d");
var chart = new Chart(ctx, {
	type: "line",
	data: {
		labels: [],
		datasets: [{
			label: "Plant Data",
			data: []
		}]
	},
	options: {}
});

// define a function to add new data points to the chart
function addData(x, y) {
	chart.data.labels.push(x);
	chart.data.datasets[0].data.push(y);
	chart.update();
}

// periodically add new data to the chart (example data)
setInterval(function() {
	var x = new Date().toLocaleTimeString();
	var y = Math.random() * 100;
	addData(x, y);
}, 1000);
