(function () {
	window.onload = function() {
		createCharts();
		var seeCharts = document.getElementById("seeCharts");
		seeCharts.onclick = showCharts;
	}

	function showCharts() {
		var seeCharts = document.getElementById("seeCharts");
		var chart = document.getElementById("charts");
		var childDivs = document.getElementById('charts').getElementsByTagName('div');
		if (seeCharts.innerHTML.indexOf("See") > -1) {
			for (i = 0; i < childDivs.length; i++ ) {
				 childDivs[i].classList.remove("hidden");
			}
			seeCharts.innerHTML = "Hide my cool charts!"
		} else {
			for (i = 0; i < childDivs.length; i++ ) {
				 childDivs[i].classList.add("hidden");
			}
			seeCharts.innerHTML = "See my cool charts!"
		}
		
	}

	// Creates the three charts that are displayed using charts.js
	function createCharts() {
		// Type of Listing bar chart
		var first = document.getElementById("firstChart");
		var myChart = new Chart(first, {
		    type: 'bar',
		    data: {
		        labels: ["Apartment", "House", "Condominum", "Bed & Breakfast", "Boat", "Treehouse"],
		        datasets: [{
		            label: '# of Listings',
		            data: [5002, 2489, 547, 92, 6, 3],
		            backgroundColor: [
		                'rgba(255, 99, 132, 1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255, 206, 86, 1)',
		                'rgba(75, 192, 192, 1)',
		                'rgba(153, 102, 255, 1)',
		                'rgba(255, 159, 64, 1)'
		            ],
		            borderWidth: 1
		        }]
		    },
		    options: {
		    	responsive: false,
		        scales: {
		            yAxes: [{
		                ticks: {
		                    beginAtZero:true
		                }
		            }]
		        }
		    }
		});

		// Cancellation Policy doughnut chart
		var second = document.getElementById("secondChart");
		var myDoughnutChart = new Chart(second, {
    		type: "doughnut",
   			data: {
   				labels: ["Flexible", "Moderate", "Strict", "Super Strict"],
		        datasets: [{
		            data: [671, 786, 1025, 7],
		            backgroundColor: [
		                "rgba(255, 99, 132, 1)",
		                "rgba(54, 162, 235, 1)",
		                "rgba(255, 206, 86, 1)",
		                "rgba(75, 192, 192, 1)",
		            ],
		            borderWidth: 1
		        }]
   			},
    		options: {
		    	responsive: false,
		    }
		});

		// Room Type bar chart
		var third = document.getElementById("thirdChart");
		var thirdChart = new Chart(third, {
		    type: 'bar',
		    data: {
		        labels: ["Entire Home", "Private Room", "Shared Room"],
		        datasets: [{
		            label: '# of Listings',
		            data: [5083, 3437, 186],
		            backgroundColor: [
		                'rgba(255, 99, 132, 1',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255, 206, 86, 1)',
		            ],
		            borderWidth: 1
		        }]
		    },
		    options: {
		    	responsive: false,
		        scales: {
		            yAxes: [{
		                ticks: {
		                    beginAtZero:true
		                }
		            }]
		        }
		    }
		});
	}
}());
