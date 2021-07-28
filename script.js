/*jshint esversion: 6*/
/*jshint strict: false */
// let a = 12;
// let b = 11;
// let result;

// result = (a + b < 4) ? "Мало" : "Много";
// console.log(result);


// let login = 'Директор';

// let message = (login == 'Сотрудник') ? 'Привет' : (login == 'Директор') ? 'Здравствуйте' : (login == '') ? 'Нет логина' : '';
// console.log(message);

// let quest = confirm("Ты тут главный??");
// let test = (quest) ? 'Всем привет' : 'В другой раз';
// console.log(test);


// let login = prompt('Кто ты?', '');

// if(login!='Админ'){
//     alert('Я вас не знаю');
// }else if(login == ' ' || login == null){
//     alert('Отменено');
// }else{
//     let pass = prompt('Пароль?', '');
//     if(pass!='Пароль'){
//         alert("Неправильно");
//     }else if(pass == ' ' || pass == null){
//         alert("Отменено");
//     }
//     else alert('Здравствуйте');
// }
// let height;
// height = height ?? 100; // В компиляторе ошибка, но работает в брузере 
// console.log(height);

// let quest = +prompt('Введите число', '');
// switch(quest){
//     case 12: alert('Число 12');
//         break;
//     case 14: alert('Число 14');
//         break;
//     default: alert('Число не угадано');
//         break;
// }

// let browser = prompt('what is ur browser', '');

// if(browser=='Edge'){
//     alert('Y v got edge');
// }else if(browser == 'Chrome' || browser == 'Safari'|| browser == 'Opera'){
//     alert('Ok we got it!');
// }else{
//     alert('We hope u are all right');
// }


// function smth(name, text = "U forgot the text"){
//     alert(name + ': ' + text);
// }

// smth("anya");

// function multiply(a, b){
//     return a*b;
// }

// let reeees = multiply(1, 4);
// console.log(reeees);


// function checkAge(age){
//     if(age>18){
//         return true;
//     }else{
//         return confirm("А родители разрешали?");
//     }
// }

// let agee = prompt('Скок лет??', '');

// if(checkAge(agee)){
//     alert('Доступ получен');
// }else{
//     alert('Доступ закрыт');
// }





// function askme(question, answer, glore){
//     if(confirm(question)){
//         answer();
//     }else glore();
// }

// function showOk(){
//     alert('Вы согласны');
// }

// function showNo(){
//     alert('Вы против...');
// }

// askme('Хочешь к нам?', showOk, showNo);

// askme(                              
//     'Ты миллион7',
//     function(){alert('Ты дурик');},     //--->>>Пример колбека;
//     function(){alert('Ты педик');}
// );

// let marker = function(diop){              //--->>>Function express функциональное выражение
//     let mark = diop;
//     alert(mark);
// };
// marker('Gangggsss');


// let wesss = (a, b, c) => a*b/c;   //--->>>Стрелочная фунцкия

// alert(wesss(1,4,5));

// let vozr = +prompt('How olda ar u?','');

// let fins = (vozr<18) ?
//     () =>alert('Nice young') :
//     () =>alert('Oh old...');

// fins(vozr);

// let ask = (question, yes, no) => (confirm(question)) ? yes() : no();
  
//   ask(
//     "Вы согласны?",
//     () => { alert("Вы согласились."); },
//     () => { alert("Вы отменили выполнение."); }
//   );
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

