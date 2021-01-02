var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.querySelectorAll("li");

function inputLength(){
    return input.value.length;
}

function createListElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Delete!"));
    li.appendChild(btn);
    btn.addEventListener("click", removeParent);
}

function addListAfterClick(){
    if(inputLength() > 0){
        createListElement();
    }
}

function addListAfterKeypress(event){
    if(inputLength() > 0 && event.keyCode === 13){
        createListElement();
    }
}

button.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

function strikeThrough(event){
    var target = event.target;
    target.classList.toggle("done");
}

ul.addEventListener("click", strikeThrough);

function deleteBtn(){
    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Delete!"));
    listItems[i].appendChild(btn);
    btn.addEventListener("click", removeParent);
}

function removeParent(event){
    event.target.parentElement.remove();
}

for(var i=0;i<listItems.length;i++){
    deleteBtn();
}