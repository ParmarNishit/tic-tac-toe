let boxes = document.querySelectorAll('.box')
let resetbutton = document.querySelector('.resetbtn')
let newgamebtn = document.querySelector('.newbtn')
let resetbtn = document.querySelector('.resetbtn')

let turnO = true

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O"
            turnO = false
        }
        else {
            box.innerText = "X"
            turnO = true
        }
        box.disabled = true
        checkWinner()
    })
})

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let position1Val = boxes[pattern[0]].innerText
        let position2Val = boxes[pattern[1]].innerText
        let position3Val = boxes[pattern[2]].innerText

        if (position1Val != "" && position2Val != "" && position3Val != "") {
            if (position1Val === position2Val && position2Val === position3Val) {
                document.getElementById('winnername').innerHTML = `Winner is ${position1Val}`
                disabledBoxes()
            }
        }
    }
}

const disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true
    }
}

const resetGame = () => {
    turnO = true
    enableBoxes()
    document.getElementById('winnername').innerHTML = ""
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false
        box.innerText = ""
        console.error();
    }
}
