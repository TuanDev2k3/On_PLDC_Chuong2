let start_btn = document.querySelector('.start-btn')
let info_box = document.querySelector('.info-box')
let exitBtn = document.querySelector('.buttons .exit')
let continueBtn = document.querySelector('.buttons .continue')
let appQuiz = document.querySelector('.app')
let result = document.querySelector('.result-box')
let indexQuest = 0

start_btn.querySelector('#de_triet-1').addEventListener('click', function () {
    info_box.classList.remove('hide')
    indexQuest = 0;
})
start_btn.querySelector('#de_triet-2').addEventListener('click', function () {
    info_box.classList.remove('hide')
    indexQuest = 30;
})
start_btn.querySelector('#de_triet-3').addEventListener('click', function () {
    info_box.classList.remove('hide')
    indexQuest = 60;
})
start_btn.querySelector('#de_triet-4').addEventListener('click', function () {
    info_box.classList.remove('hide')
    indexQuest = 90;
})
start_btn.querySelector('#de_triet-5').addEventListener('click', function () {
    info_box.classList.remove('hide')
    indexQuest = 120;
})

exitBtn.addEventListener('click', function () {
    info_box.classList.add('hide')
})

continueBtn.addEventListener('click', function () {
    info_box.classList.add('hide')
    start_btn.classList.add('hide')
    startQuiz()
})

//========== ques_Triet ========


let question = document.querySelector('.question')
let btnAns = document.querySelectorAll('.btn')
let correct = 0
let score = 0
let isSelect = true

function startQuiz() {
    appQuiz.classList.remove('hide')
    score = 0
    loadQuest(indexQuest)
}

function loadQuest(index) {
    question.innerHTML = `${index + 1}. ` + ques_Triet[index].quest
    correct = ques_Triet[index].correct
    btnAns.forEach((item, i) => {
        item.innerHTML = `${i + 1}. ` + ques_Triet[index].answers[i]
        item.classList.remove('false', 'true')
    })
    isSelect = true
}

// Next Question
document.querySelector('#next-btn').addEventListener('click', () => {
    // isSelect = true la chua chon dap an ko dc next
    if (isSelect) return

    if (indexQuest < ques_Triet.length - 1 && (indexQuest+1)%30 != 0) {
        indexQuest++
        loadQuest(indexQuest)
    }
    // Hien diem so
    else {
        result.classList.remove('hide')
        appQuiz.classList.add('hide')
        document.querySelector('.score span').innerHTML = `${score}/30`
    }
})
//  back Question
document.querySelector('#back-btn').addEventListener('click', () => {
    if (indexQuest > 0 && indexQuest%30 != 0) {
        indexQuest--
        loadQuest(indexQuest)
        score--;
    }
    
})

// Check Answer true or false
btnAns.forEach((item, i) => {
    item.addEventListener('click', () => {
        if (isSelect) {
            btnAns[correct].classList.add('true')
            if (correct == i) {
                score++
            }
            else {
                item.classList.add('false')
            }
        }
        isSelect = false
    })
})

// Thao tac voi Result Box
document.querySelector('.result-btn .exit').addEventListener('click', () => {
    result.classList.add('hide')
    start_btn.classList.remove('hide')
})

document.querySelector('.result-btn .continue').addEventListener('click', () => {
    result.classList.add('hide')
    startQuiz()
})
