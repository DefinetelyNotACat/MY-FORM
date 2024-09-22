let inputs = document.querySelectorAll('.input')
let clicked = 0

window.onload = removePlaceHolder
function removePlaceHolder(){
    inputs.forEach(input => {
        input.addEventListener("click",checkPlaceholder)
       // console.log(input)
        input.classList.add("removeplaceholder")
    });
}

function checkPlaceholder(){
    if(this.innerHTML == ""){
        this.classList.remove("removeplaceholder")
    }
    else {
        this.classList.add("removeplaceholder")
    }
}

