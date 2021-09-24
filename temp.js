
let startingPage = document.getElementsByClassName('starting-page')[0]
let start = document.getElementsByClassName('start')[0]
start.addEventListener('click', () => {
    startingPage.style.opacity = "0"
    setTimeout(() => {
        startingPage.style.display = "none"
    }, 500);
})
debugger
let storeColor = []
var correct;
var picked;
var cell = 6;
let easyMode = document.getElementById('easyMode')
let mediumMode = document.getElementById('mediumMode')
let hardMode = document.getElementById('hardMode')
let easy = document.querySelectorAll('.easy')
let medium = document.querySelectorAll('.medium')
let restore = document.querySelectorAll('.restore')
// let box_class=document.querySelector('.box')
let boxes = document.querySelectorAll('.box')


//# ------- difficulty level: easy---------
easyMode.addEventListener('click', () => {
    easyMode.style.background = "linear-gradient(to left, #25ff70, #81ff7a, #afff8a, #d0ffa0, #e9ffb9)"
    mediumMode.style.background = "none"
    hardMode.style.background = "none"
    for (let i = 0; i < easy.length; i++) {
        easy[i].style.display = "none"
    }
    cell = 3
    reset()
})

//# ------- difficulty level: medium---------
mediumMode.addEventListener('click', () => {
    mediumMode.style.background = "linear-gradient(to left, #25ff70, #81ff7a, #afff8a, #d0ffa0, #e9ffb9)"
    easyMode.style.background = "none"
    hardMode.style.background = "none"
    for (let i = 0; i < medium.length; i++) {
        medium[i].style.display = "none"
    }
    for (let i = 0; i < restore.length; i++) {
        restore[i].style.display = "block"
    }
    cell = 6
    reset()
})

//# ------- difficulty level: hard---------
hardMode.addEventListener('click', () => {
    hardMode.style.background = "linear-gradient(to left, #25ff70, #81ff7a, #afff8a, #d0ffa0, #e9ffb9)"
    mediumMode.style.background = "none"
    easyMode.style.background = "none"
    for (let i = 0; i < easy.length; i++) {
        easy[i].style.display = "block"
    }
    cell = 9
    reset()
})

//# ------ colors change button---------
let changeColor = document.getElementsByClassName('change-color')[0]
changeColor.addEventListener('click', () => {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    changeColor.style.color = "whitesmoke"
    changeColor.style.background = `rgba(${r},${g},${b},0.5)`
    colors(9)
})
//# --------box click----------
function pick() {
    for (let i = 0; i < cell; i++) {
        boxes[i].addEventListener('click', () => {
            return boxes[i].style.background
        })
    }

}

//# ------Random colors---------
function colors() {
    var array=[]
    for (let i = 0; i < boxes.length; i++) {
        let r = Math.floor(Math.random() * 256)
        let g = Math.floor(Math.random() * 256)
        let b = Math.floor(Math.random() * 256)
        // let a = Math.random()
        // storeColor[i]="rgba("+r+","+g+","+b+","+a+")"
        array[i] = "rgb(" + r + "," + g + "," + b + ")"
        boxes[i].style.background = array[i]
    }
    
    return array
}

//# ------computer chosen color---------
const computer = () => {
    let index
    index = Math.floor(Math.random() * cell)
    return storeColor[index]
}

const checking = () => {
    if (picked === correct) {
        for (let i = 0; i < cell; i++) {
            boxes[i].style.background = pickedColor
        }
    }
    else {
        picked= "transparent";
    }
}
reset()
function reset() {
    colors()
    correct = computer()
    picked =pick()
    checking()

}