const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')
console.log(id);

const url = "https://api.magicthegathering.io/v1/cards/" + id;
console.log(url);
fetch(url)
    .then(response => response.json())
    .then(response => {
        // console.log(response)
        let card = response.card;
        console.log(card)

        
    })
