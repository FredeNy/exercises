// Hent html id og gem det i variablen
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const itemCounter = document.getElementById("item-counter");


// funktionen addtask kaldes når brugeren trykker på tilføj knappen
function addTask(){

   // den tjekker om inputfeltet er tomt. Hvis det er tomt, så sendes en feedback besked om at man skal skrive noget i feltet
if (inputBox.value === ''){
alert("du skal skrive noget først!")
}
 // Hvis inputfeltet ikke er tomt, så opretter den et nyt li element (task)
else{
    let li = document.createElement("li");
    //teksten som skriver i inputfeltet
    li.innerHTML = inputBox.value;
    //vis task som skrives i inputfeltet under list-containeren
    listContainer.appendChild(li);
     // tilføjelse af span element (slet knap/kryds) og det tilføjes som et barn til det nye li element
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
}
inputBox.value = "";
saveData();
updateItemCounter();
}

// eventlistener på listContainer som reagere på et klik
// hvis det klikkede element er et li element, skifter det klassen "ckecked" for at fjerne markeringen af opgaven
// begge events gemmer den opdaterede data ved at kalde saveData();
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
        updateItemCounter();
    }
    //fjerner elementet så task bliver slettet
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
        updateItemCounter();
    }
}, false);

function updateItemCounter(){
    const itemCount = listContainer.children.length;
    itemCounter.textContent = `Antal opgaver: ${itemCount}`;
}

//tilføj saveData function så den gemmer i locale storage, når en ny task er completed og fjernet
function saveData(){
    //gem dataen fra listcontaineren i locales storage i browseren, så listn er opdateret når siden loades på ny
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
    updateItemCounter();
}
showTask();

