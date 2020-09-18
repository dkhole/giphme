const apiKey = '6flguaZ4XstDNrv8tZpNurgUyFWCh3x6';
const weirdness = 10;


function getGif(apiKey, search, weird) {
    const img = document.querySelector('img');

    fetch(`http://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${search}&weirdness=${weird}`, { mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        img.src = response.data.images.original.url;
    })
    .catch(function(e) {
        console.log(e);
    });
}

const searchDom = document.querySelector('#search');

searchDom.addEventListener('focusin', function() {
    searchDom.placeholder = "";
});

searchDom.addEventListener('focusout', function() {
    searchDom.placeholder = "search gif";
});

searchDom.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        getGif(apiKey, searchDom.value, weirdness);
    }
})

searchDom.click();

getGif(apiKey, 'cats', 10);