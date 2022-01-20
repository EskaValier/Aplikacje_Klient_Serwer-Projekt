async function loadIntoTable(url, table){
    const tableHead = table.querySelector("thead");
    const tableBody = table.querySelector("tbody");
    tableHead.innerHTML = "<tr></tr>";
    tableBody.innerHTML = "";
    fetch(url)
    .then(response => {
       return response.json();
    })
    .then(headers => {
        for (const headerText of headers.headers) {
            const headerElement = document.createElement("th");
            headerElement.textContent = headerText;
            tableHead.querySelector("tr").appendChild(headerElement);
        }
    });
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

            rowElement.onclick = () => window.location.href = "http://localhost/details.html?id="+ card.id;
            tableBody.appendChild(rowElement);


            // console.log("-----------------------------");
            // console.log("Card: " + card.imageUrl);
            // let cardName = card.name;
            // let cardType = card.type;
            // let cardRarity = card.rarity;
            // console.log(cardName);
            // console.log(cardType);
            // console.log(cardRarity);
        }
        
    })

}

let page = 3;
let pageSize = 10;

dataFromApi("https://api.magicthegathering.io/v1/cards?page="+ page +"&pageSize=" + pageSize, document.querySelector("table"));
loadIntoTable("./data.json", document.querySelector("table"));