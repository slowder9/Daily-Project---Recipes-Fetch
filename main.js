//First, find our Search Bar container

let container = document.querySelector(".searchBar")

//Create our fetch request to API

fetch ("http://recipepuppyproxy.herokuapp.com/api/?q=omelet")
//Data is fetched & we get a promise
	.then(
//The promise returns a response from the server

	function convertFromJson(data){
		return data.json();
		})
	.then(function(data){
		console.log(data);
		let titles = "";

	for (i = 0; i < data.results.length; i++){
		console.log(data.results[i].title);
		titles += `
		<div class="result1"> 
			<h2>${data.results[i].title}</h2>
			<h3>${data.results[i].ingredients}</h3>
			<img class="pic" src="${data.results[i].thumbnail}">
		</div>`;
		// ingredients += `<div> ${data.results[i].ingredients} </div>`;
	}

	document.querySelector(".container").innerHTML = titles;
	// document.querySelector(".container").innerHTML = ingredients;
	})
