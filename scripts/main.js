const myHeading = document.querySelector("h1");
let strt = 0;
let kekse = -1;




/*document.querySelector("html").addEventListener("click", () => {
    alert("Ouch! Stop poking me!");
});
*/

const myImage = document.querySelector("img");

myImage.onclick = () => {
    if (strt === 2) {
        kekse +=1;
        myHeading.textContent = `${kekse} Kekse!`;
    } else {
        if (strt === 0) {
            myHeading.textContent = `Minecraft ${2}`;
            strt += 2;
        }
    }
};
//(`ich habe einen IQ von ${kekse}!`);
/*function alerte() {
    i=alert(`ich habe einen IQ von ${kekse}!`);
    setTimeout(function(){
        (-event);
    },10);
}
*/
img.onclick = () => {
    alerte();
}
let clicked=0

document.querySelector("html").addEventListener("click", () => {
    if (clicked === 0) {
        let check = prompt("Please enter the Number that i told you, to play the game!", '3.14');
        if (check == "Alessio" || check == "3.141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067") {
            strt = strt;
        } else {
            strt = strt-5;
        }
        clicked = 1;
    }
});


