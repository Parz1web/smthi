/*jshint esversion: 6*/
/*jshint strict: false */

let counter = document.getElementById("chisla"),
    button = document.getElementById("buttoniz"),
    buttons = document.querySelector(".buttons");
function addElem(){
    let newButton = document.createElement("div");
    newButton.className = "button sec";
    newButton.innerHTML = `<a href="#" onclick="zero" id="buttoniza">Очистить</a>`;
    buttons.append(newButton);
}

let disk = true;

button.onclick = function(){
    counter.innerText = +counter.innerText + 1;
    if(+counter.innerText>0){
        if(disk){
            addElem();
            disk = false;
        }
    }
    let a = document.getElementById("buttoniza");
    a.onclick = function(){
        counter.innerText = "0";
        setTimeout(()=>document.getElementById("buttoniza").remove(),0);
        disk = true;
    };
};

