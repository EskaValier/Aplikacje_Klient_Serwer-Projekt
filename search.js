async function loadHeareds(table){
    const tableHead = table.querySelector("thead");
    const tableBody = table.querySelector("tbody");
    tableHead.innerHTML = "<tr></tr>";
    tableBody.innerHTML = "";
    let headers = [
        "Graphic",
        "Name",
        "Rarity",
        "Type",
        "Subtype",
        "Colour",
        "ManaCost",
        "Power",
        "Toughness",
        "Text on card"
    ]
    for (const headerText of headers) {
        const headerElement = document.createElement("th");
        headerElement.textContent = headerText;
        tableHead.querySelector("tr").appendChild(headerElement);
    }
}

async function dataFromApi(url, table){
    const tableBody = table.querySelector("tbody");
    fetch(url)
    .then(response => response.json())
    .then(response => {
        //console.log("5. fetch");
        for(const card of response.cards){
            const rowElement = document.createElement("tr");

            var image = new Image();
            image.src = card.imageUrl;
            image.alt = "No Graphic";
            rowElement.appendChild(image);

            const nameElement = document.createElement("td");
            nameElement.textContent = card.name;
            rowElement.appendChild(nameElement);

            const rarityElement = document.createElement("td");
            rarityElement.textContent = card.rarity;
            rowElement.appendChild(rarityElement);
            
            const typeElement = document.createElement("td");
            typeElement.textContent = card.type;
            rowElement.appendChild(typeElement);
            
            const subtypesElement = document.createElement("td");
            subtypesElement.textContent = card.subtypes;
            rowElement.appendChild(subtypesElement);
            
            const colorsElement = document.createElement("td");
            colorsElement.textContent = card.colors;
            rowElement.appendChild(colorsElement);
            
            const manaCostElement = document.createElement("td");
            manaCostElement.textContent = card.manaCost;
            rowElement.appendChild(manaCostElement);
            
            const powerElement = document.createElement("td");
            powerElement.textContent = card.power;
            rowElement.appendChild(powerElement);
            
            const toughnessElement = document.createElement("td");
            toughnessElement.textContent = card.toughness;
            rowElement.appendChild(toughnessElement);
            
            const originalTextElement = document.createElement("td");
            originalTextElement.textContent = card.originalText;
            rowElement.appendChild(originalTextElement);

            rowElement.onclick = () => window.location.href = "details.html?id="+ card.id;
            tableBody.appendChild(rowElement);
        }
    })
}
function filterSubmit(event) {
    // console.log("filters");
    const nameLabel = document.getElementById('nameLabel');
    const RaritySelect1 = document.getElementById('RaritySelect1');
    const typeLabel = document.getElementById('typeLabel');
    const subtypeLabel = document.getElementById('subtypeLabel');
    const colourSelect1 = document.getElementById('colourSelect1');
    let url = "https://api.magicthegathering.io/v1/cards?page="+ page +"&pageSize=" + pageSize;
    if(nameLabel.value != ""){
        // console.log(nameLabel.value);
        url += "&name=" + nameLabel.value;
    }
    if(RaritySelect1.value != "None"){
        // console.log(RaritySelect1.value);
        url += "&rarity=" + RaritySelect1.value;
        
    }
    if(typeLabel.value != ""){
        // console.log(typeLabel.value);
        url += "&types=" + typeLabel.value;
        
    }
    if(subtypeLabel.value != ""){
        // console.log(subtypeLabel.value);
        url += "&subtypes=" + subtypeLabel.value;
        
    }
    if(colourSelect1.value != "None"){
        // console.log(colourSelect1.value);
        url += "&colors=" + colourSelect1.value;
        
    }
    // console.log(nameLabel.value);
    // console.log(RaritySelect1.value);
    // console.log(typeLabel.value);
    // console.log(subtypeLabel.value);
    // console.log(colourSelect1.value);
    // console.log(url)
    loadHeareds(document.querySelector("table"));
    dataFromApi(url, document.querySelector("table"));
    event.preventDefault();
  }

const form = document.getElementById('filters');
form.addEventListener('submit', filterSubmit);

let page = 3;
let pageSize = 10;

loadHeareds(document.querySelector("table"));
dataFromApi("https://api.magicthegathering.io/v1/cards?page="+ page +"&pageSize=" + pageSize, document.querySelector("table"));