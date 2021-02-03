const headerbtn = document.getElementById('h1color')
const myHeading = document.getElementById('heading')
const input =document.getElementById('input')

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
    secCol.style.color = "blue"
    
}