const headerbtn = document.getElementById('h1color')
const myHeading = document.getElementById('heading')
const input =document.getElementById('input')
const addToBtn = document.getElementById('addToList')
const listItems = document.querySelectorAll("li:last-child")
let list2 = document.getElementById('fruits')
const remover = document.getElementById("remover")
myHeading.addEventListener('click', () =>{
    myHeading.style.color = "red";
});

headerbtn.addEventListener('click', ()=>{
    myHeading.style.color = input.value;
});
const list = document.getElementsByTagName("li")
console.log(list);
console.log(list.length);

for (const li of list) {
    li.style.color = "red";
    
}
const secondary = document.getElementsByClassName("secCol")
console.log(secondary)
for (const secCol of secondary) {
    secCol.style.color = "blue";
}
addToBtn.addEventListener('click', ()=>{
    let listItem = document.createElement("li")
    listItem.textContent = input2.value;
    list2.appendChild(listItem);
    input2.value = "";
})
remover.addEventListener('click', ()=>{
    let lastItem= document.querySelector('li:last-child')
    list2.removeChild(lastItem)
})