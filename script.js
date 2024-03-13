const playerList = [];

function addPlayer(event){
    event.preventDefault()

    const display = document.getElementById("list");
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const country = document.getElementById("country").value;
    const score = document.getElementById("number").value;

    const players = {
        name: firstName + " " + lastName,
        country: country,
        score: Number(score)
    }
    playerList.push(players);
    playerList.sort((player1,player2)=>Number(player2.score) - Number(player1.score));

    display.innerHTML = "";

    playerList.forEach((player,index)=>{

        const eachList = document.createElement("li");
        const name = document.createElement("span");
        const countryName = document.createElement("span");
        const playerScore = document.createElement("span");
        const buttonSection = document.createElement("div");
        const plus = document.createElement("button");
        const minus = document.createElement("button");
        const delButton = document.createElement("button");
        
        plus.setAttribute('onclick', `increase(${index})`);
        minus.setAttribute('onclick', `decrease(${index})`);
        delButton.setAttribute('onclick', `deleteFun(${index})`);

        eachList.classList.add("eachList");
        name.classList.add("name");
        countryName.classList.add("country");
        playerScore.classList.add("score");
        buttonSection.classList.add("buttonSection");
        plus.classList.add("plus");
        minus.classList.add("minus");
        delButton.classList.add("del");

       name.innerHTML = player.name;
       countryName.innerHTML = player.country;
       playerScore.innerHTML = player.score;
       plus.innerHTML = "+";
       minus.innerHTML = "-";
       delButton.innerHTML = "remove";
       
       eachList.append(name,countryName,playerScore,buttonSection);
       display.append(eachList);
       buttonSection.append(plus,minus,delButton);

    });
    document.getElementById("first-name").value = "";
    document.getElementById("last-name").value = "";
    document.getElementById("country").value = "";
    document.getElementById("number").value = "";
    
}
function refresh(){
    const display = document.getElementById("list");
    
    playerList.sort((player1,player2)=>Number(player2.score) - Number(player1.score));

    display.innerHTML = "";

    playerList.forEach((player,index)=>{

        const eachList = document.createElement("li");
        const name = document.createElement("span");
        const countryName = document.createElement("span");
        const playerScore = document.createElement("span");
        const buttonSection = document.createElement("div");
        const plus = document.createElement("button");
        const minus = document.createElement("button");
        const delButton = document.createElement("button");

        plus.setAttribute('onclick', `increase(${index})`);
        minus.setAttribute('onclick', `decrease(${index})`);
        delButton.setAttribute('onclick', `deleteFun(${index})`);


        eachList.classList.add("eachList");
        name.classList.add("name");
        countryName.classList.add("country");
        playerScore.classList.add("score");
        buttonSection.classList.add("buttonSection");
        plus.classList.add("plus");
        minus.classList.add("minus");
        delButton.classList.add("del");

       name.innerHTML = player.name;
       countryName.innerHTML = player.country;
       playerScore.innerHTML = player.score;
       plus.innerHTML = "+";
       minus.innerHTML = "-";
       delButton.innerHTML = "remove";
       
       eachList.append(name,countryName,playerScore,buttonSection);
       display.append(eachList);
       buttonSection.append(plus,minus,delButton);
    });
}
function increase (index) {

    playerList[index].score += 5
    refresh();

}
function decrease (index) {
    if(playerList[index].score > 0){
        playerList[index].score -= 5
        refresh();
    }
    
    
}
function deleteFun (index) {
    playerList.splice(index, 1);
    refresh();
    
}
