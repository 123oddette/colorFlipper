const colorCode =[0, 1, 2, 3,4, ,5 ,6, 7,8, 9,'A' ,'B ', 'C', 'D', 'E', 'F'];
//selector
const button= document.querySelector('button');

const color= document.querySelector('.span-color');

//event
button.addEventListener('click', function(){
    let hexCode = '#';
    for (let i= 0; i<6; i++){
        const randomNumber = getRandomNumber();
        hexCode += colorCode[randomNumber];
    }
    document.body.style.
    backgroundColor = hexCode;
    color.innerText= hexCode;

})

//random number generate function
function getRandomNumber(){
    return Math.floor(Math.random() * colorCode.length)
}