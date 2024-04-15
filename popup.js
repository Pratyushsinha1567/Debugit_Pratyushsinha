
async function fetchWord() {
    const word = document.getElementById('wordInput').value;



const options = {
  method: 'GET',
  url: 'https://wordsapiv1.p.rapidapi.com/$word/van/typeOf',
  headers: {
    'X-RapidAPI-Key': 'b65bad91b5msh7c70ca52bcc5652p1f62afjsn77864c76b07f',
    'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
  }
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
  
} catch (error) {
	console.error(error);
}
}































    // Construct the URL with any necessary parameters
    /*const url = 'https://www.googleapis.com/books/v1/volumes?q=Harry%20Potter';

    // Make a GET request to the API
    fetch(url)
      .then(response => {
        // Check if the request was successful
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Parse the JSON response
        return response.json();
      })
      .then(data => {
        // Handle the data returned by the API
        console.log(data);
        str=`<img src="${data["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>`
        document.getElementById("mycard").innerHTML=str;

        // Do something with the data, like updating your extension's UI
      })
      .catch(error => {
        // Handle any errors that occurred during the fetch
        console.error('There was a problem with the fetch operation:', error);
      });*/
