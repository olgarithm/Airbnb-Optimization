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
		console.log(seeCharts.innerHTML);
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

	function createCharts(propertyMap) {
		var ctx = document.getElementById("firstChart");
		var myChart = new Chart(ctx, {
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
		            borderColor: [
		                'rgba(255,99,132,1)',
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
		            borderColor: [
		                "rgba(255,99,132,1)",
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

		var third = document.getElementById("thirdChart");
		var thirdChart = new Chart(third, {
		    type: 'bar',
		    data: {
		        labels: ["Other", "House", "Condominum", "Bed & Breakfast", "Boat", "Treehouse"],
		        datasets: [{
		            label: '# of Listings',
		            data: [5002, 2489, 547, 92, 6, 3],
		            backgroundColor: [
		                'rgba(255, 99, 132, 0.2)',
		                'rgba(54, 162, 235, 0.2)',
		                'rgba(255, 206, 86, 0.2)',
		                'rgba(75, 192, 192, 0.2)',
		                'rgba(153, 102, 255, 0.2)',
		                'rgba(255, 159, 64, 0.2)'
		            ],
		            borderColor: [
		                'rgba(255,99,132,1)',
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
	}
}());
