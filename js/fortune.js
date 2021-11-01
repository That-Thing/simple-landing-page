fetch('https://api.neko.airforce/api/fortune').then(response => response.json())
	.then((data) => {
	    fortune = data["fortune"];
        document.getElementById("message").innerHTML = fortune;
    })