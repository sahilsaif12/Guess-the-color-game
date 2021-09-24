let startingPage = document.getElementsByClassName('starting-page')[0]
let start = document.getElementsByClassName('start')[0]
start.addEventListener('click', () => {
    startingPage.style.opacity = "0"
    setTimeout(() => {
        startingPage.style.display = "none"
    }, 500);
})


var cell=6
var storeColor=[]
var pickedColor
let clickedColor
let scoreline=6
var mode=document.querySelectorAll(".mode")
var resetbtn=document.querySelector("#reset")
var msg=document.querySelector(".msg")
var boxes=document.querySelectorAll(".box")
var score=document.getElementsByClassName("score")[0]

init()
function init(){
    modeButtons()
    setBoxes()
    reset()
}

function modeButtons(){
    for (let i = 0; i < mode.length; i++) {
        mode[i].addEventListener('click',function(){
            mode[0].classList.remove("selected")
            mode[1].classList.remove("selected")
            mode[2].classList.remove("selected")
            this.classList.add("selected")
            if (i==0) {
                cell=3
                scoreline=3
            }
            else if (i==1) {
                cell=6
                scoreline=6
            }
            else if (i==2) {
                cell=9
                scoreline=9
            }
            reset()
        })
    }
}

function setBoxes(){
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('click',function(){
            clickedColor=this.style.background;
            console.log(clickedColor)
            if (clickedColor==pickedColor) {
                changeColor(clickedColor);
                // score.innerHTML=scoreline
                resetbtn.innerHTML="Play Again"
                msg.innerHTML=`<P>yeah! congrats</p> <div class='score'>${scoreline}</div>`
                // for (let i = 0; i < cell; i++) {
                //     boxes[i].style.pointerEvents="auto"
                //     boxes[i].style.background=clickedColor
                    
                // }
            }
            else{
                // this.style.opacity="0"
                this.style.background="transparent"
                this.style.boxShadow="none"
                this.style.pointerEvents="none"
                // score.innerHTML=scoreline
                scoreline--
                msg.classList.add('shake')
                msg.innerHTML="Wrong! Try Again "
                setTimeout(() => {
                    msg.classList.remove('shake')
                    msg.innerHTML=""
                }, 500);
            }
        })
        
    }
}
function reset(){
    storeColor=randomColors(cell)
    pickedColor=computer()
    msg.innerHTML=""
    resetbtn.innerHTML="Change Box colors"
    switch (cell) {
        case 3:
            scoreline=3
            break;
        case 6:
            scoreline=6
            break;
        case 9:
            scoreline=9
            break;
        default:
            break;
    }
    for (let i = 0; i < boxes.length; i++) {
        if (storeColor[i]) {
            boxes[i].style.display="block"
            boxes[i].style.background=storeColor[i]
        }
        else{
            boxes[i].style.display="none"
        }
        boxes[i].style.pointerEvents="auto"
    }
}

resetbtn.addEventListener("click",function(){
    modeButtons()
    reset();
})
function changeColor(correctColor){
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.pointerEvents="none"
        boxes[i].style.background=correctColor
    }
}
function computer(){
    var index
    index=Math.floor(Math.random() * storeColor.length)
    return storeColor[index]
}
function randomColors(num){
    var array=[]
    for (let i = 0; i < num; i++) {
        let r = Math.floor(Math.random() * 256)
        let g = Math.floor(Math.random() * 256)
        let b = Math.floor(Math.random() * 256)
        array[i] = "rgb(" + r + ", " + g + ", " + b + ")"
    }
    return array
}