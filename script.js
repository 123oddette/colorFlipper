/*const button =  document.querySelector('button');

button.addEventListener('click', function(event){
    console.log(event);
    //event.preventDefault();
    console.log('click me!!!');
})*/


const colors =['red', 'blue','rgb(133, 122, 200)', '#F15025'];
//selector
const button= document.querySelector('button');

const color= document.querySelector('.span-color');

//event
button.addEventListener('click', function(){
    const randomNumber = getRandomNumber();
    document.body.style.
    backgroundColor = colors[randomNumber];
    color.innerText= colors[randomNumber];

})

//random number generate function
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length)
}