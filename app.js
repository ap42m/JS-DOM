const headerbtn = document.getElementById('h1color')
const myHeading = document.getElementById('heading')
const input =document.getElementById('input')

myHeading.addEventListener('click', () =>{
    myHeading.style.color = "red";
});

headerbtn.addEventListener('click', ()=>{
    myHeading.style.color = input.value;
});