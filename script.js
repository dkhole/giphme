const apiKey = '6flguaZ4XstDNrv8tZpNurgUyFWCh3x6';
const weirdness = 10;


async function getGif(apiKey, search, weird) {
    const img = document.querySelector('img');

    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${search}&weirdness=${weird}`, { mode: 'cors'})
    const gif = await response.json()
    img.src = gif.data.images.original.url;
}

getGif().catch(function(e) {
    console.log(e);
})

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