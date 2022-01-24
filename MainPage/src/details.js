const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
// console.log(id);

const mtg_API_URL = "https://api.magicthegathering.io/v1/cards/" + id;
// console.log(mtg_API_URL);
fetch(mtg_API_URL)
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Something went wrong');
        }
    })
    .then(response => {
        // console.log(response)
        let card = response.card;
        // console.log(card)

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
    .catch((error) => {
        document.getElementById('name').innerText = "Failed to load data, ID not found";

        console.log("Fetch card data failed")
        console.log(error)
    });;

const opinion_service_URL = "http://opinions-svc.labproj19.svc.cluster.local:8080/" + id;

fetch(opinion_service_URL)
    .then((response) => {
        console.log(opinion_service_URL);
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Something went wrong');
        }
    })
    .then((responseJson) => {
        const opinionList = document.getElementById('opinions');
        if(responseJson = {}){
            const listElement = document.createElement("li");
            listElement.className = "list-group-item";
            listElement.textContent = "Not added yet";

            opinionList.appendChild(listElement);
        } else {
            for(const opinion of responseJson){
            const listElement = document.createElement("li");
            listElement.className = "list-group-item";
            listElement.textContent = opinion;

            opinionList.appendChild(listElement);
        }
        }
        
    })
    .catch((error) => {
        const opinionList = document.getElementById('opinions');
        const listElement = document.createElement("li");
        listElement.className = "list-group-item";
        listElement.textContent = "Not added yet";
        opinionList.appendChild(listElement);

        console.log("Fetch opinions failed")
        console.log(error)
    });