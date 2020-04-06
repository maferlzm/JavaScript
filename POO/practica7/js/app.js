const listatweets = document.getElementById('lista-tweets');
let tweetTodelete;
eventlistener();

function eventlistener() {
    document.querySelector('#formulario').addEventListener('submit', addtweet);
    listatweets.addEventListener('click', removeTweet);
    document.addEventListener('DOMContentLoaded', localStorageReady);
}

Tweet = new tweet();

function addtweet() {
    let contenttweet = document.getElementById('tweet').value.trim();
    // console.log(contenttweet);

    Tweet.addtweet(contenttweet);
    document.getElementById('tweet').value = "";

}

function removeTweet(event) {
    event.preventDefault();
    if (event.target.tagName === 'SPAN') {
        // console.log('x');
        tweetTodelete = event.target.parentElement.parentElement.textContent.slice(0, -1);
        console.log(tweetTodelete);
        Swal.fire({
            title: 'Advertencia',
            text: `Se eliminara el tweet "${tweetTodelete}"`,
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar'
        }).then((result) => {
            if (result.value) {
                event.target.parentElement.parentElement.remove();
                Tweet.removeTweetLS(tweetTodelete)
                Swal.fire({
                    // position: 'top-end',
                    type: 'success',
                    title: 'Ya chingo a tu madre tu tweet',
                    showConfirmButton: false,
                    timer: 1000
                })
            }
        })
    }
}

function localStorageReady() {
    let tweets = Tweet.getLocalStorage();
    tweets.forEach(function(tweets) {
        Tweet.createtweet(tweets);
    });

}const contenidoTweet = document.querySelector('#txTweet');
const listaTweets = document.querySelector('#lista-tweets');
eventListener();
CargarTweetsLocalStorage();

function eventListener() {
    document.querySelector('#formulario').addEventListener('submit', ObtenerFormulario);
    listaTweets.addEventListener('click', EliminarTweet);
}

function ObtenerFormulario(event) {
    event.preventDefault();

    if (contenidoTweet.value.trim() == '') return;

    const InstanciaTweets = new Tweets(contenidoTweet.value);
    InstanciaTweets.AgregarTweetDOM(listaTweets, true);
    contenidoTweet.value = '';

}

function EliminarTweet() {
    Tweets.EliminarTweetDOM(event);
}

function CargarTweetsLocalStorage() {
    const tweetsLS = ManipularLocalStorage.ObtenerLocalStorage();
    console.log(tweetsLS);
    for (let i = 0; i < tweetsLS.length; i++) {
        const InstanciaTweets = new Tweets(tweetsLS[i]);
        InstanciaTweets.AgregarTweetDOM(listaTweets, false);
    }
}