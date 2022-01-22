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

        document.getElementById('name').innerText = card.name;
        var image = new Image();
        image.src = card.imageUrl;
        image.alt = "No Graphic";
        document.getElementById('cardImage').appendChild(image);
        document.getElementById('cardType').innerText = card.type == undefined ? "NotSet" : card.type;
        document.getElementById('cardSubtype').innerText = card.subtypes == undefined ? "NotSet" : card.subtypes;
        document.getElementById('cardColor').innerText = card.colors == undefined ? "NotSet" : card.colors;
        document.getElementById('cardSupertypes').innerText = card.supertypes == undefined ? "NotSet" : card.supertypes;
        document.getElementById('cardRarity').innerText = card.rarity == undefined ? "NotSet" : card.rarity;
        document.getElementById('cardSet').innerText = card.set == undefined ? "NotSet" : card.set;
        document.getElementById('cardPower').innerText = card.power == undefined ? "NotSet" : card.power;
        document.getElementById('cardThughness').innerText = card.toughness == undefined ? "NotSet" : card.toughness;
        document.getElementById('cardManaCost').innerText = card.manaCost == undefined ? "NotSet" : card.manaCost;
        document.getElementById('cardText').innerText = card.text == undefined ? "NotSet" : card.text;

        // name
        // cardImage
        // cardType
        // cardSubtype
        // cardColor
        // cardSupertypes
        // cardRarity
        // cardSet
        // cardPower
        // cardThughness
        // cardManaCost
        // cardText
        
    })
