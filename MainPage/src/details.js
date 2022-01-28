const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
// console.log(id);

const mtg_API_URL = "https://api.magicthegathering.io/v1/cards/" + id;
const opinion_service_URL = "http://opinions-rt-labproj19.apps.ocp.lab.cloudpak.site/" + id;
// console.log(mtg_API_URL);
fetch(mtg_API_URL)
    .then(response => {
        if (response.ok) {
            console.log(response)
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

        this.postData();
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

axios.get(opinion_service_URL, {
    headers: { 
        'x-apikey': '59a7ad19f5a9fa0808f11931',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      }})
  .then(function (response) {
    // handle success
    console.log("axios")
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log("axios err: ", error);
  });

async function postData (){
    
    fetch(opinion_service_URL, {mode: 'no-cors'})
        // .then((response) => {
        //     if (response.ok) {
                // return response.json();
        //     } else {
        //         throw new Error('Something went wrong');
        //     }
        // })
        .then((responseJson) => {
            const opinionList = document.getElementById('opinions');
            console.log(responseJson);
            if(responseJson = {}){
                console.log("pusto")
                const listElement = document.createElement("li");
                listElement.className = "list-group-item";
                listElement.textContent = "Not added yet";

                opinionList.appendChild(listElement);
            } else {
                console.log("dalej")
                const obj = JSON.parse(responseJson);
                for(const opinion of obj.opinions){
                    const listElement = document.createElement("li");
                    listElement.className = "list-group-item";
                    listElement.textContent = opinion.Opinion;

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
}
