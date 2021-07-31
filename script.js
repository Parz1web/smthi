/*jshint esversion: 6*/
/*jshint strict: false */

const counter = document.getElementById("chisla"),
    button = document.getElementById("buttoniz"),
    buttons = document.querySelector(".buttons");
let disk = true;


function addElement(elemType, hisClass, smthInner, fromWhere){
    let ovvvee = document.createElement(elemType);
    ovvvee.className = hisClass;
    ovvvee.innerHTML = smthInner;
    fromWhere.append(ovvvee);
}



button.onclick = function(){
    counter.innerText = +counter.innerText + 1;
    if(+counter.innerText>0 && disk){
        addElement("div", "button", `<a href="#" id="buttoniza">Очистить</a>`, buttons );
        disk = false;
    }

    let a = document.getElementById("buttoniza");
    a.onclick = function(){
        counter.innerText = "0";
        setTimeout(()=>document.getElementById("buttoniza").remove(),0);
        disk = true;
    };
};

