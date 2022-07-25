// Hamburger section:
let menuBar = document.getElementById('menu-bar');
let headerContainer = document.getElementById('header-container');
let hamburgerMenu = document.getElementById('hamburger-menu-container');

menuBar.addEventListener('click', () => menuBarClick());

function menuBarClick() {
    if(hamburgerMenu.style.display === 'none') {
        hamburgerMenu.style.display = 'block';
        headerContainer.style.padding = '5px 15px 25px 15px';
    } else {
        hamburgerMenu.style.display = 'none';
        headerContainer.style.padding = '15px';
    }
}



// Timer section:
let timerDays = document.getElementById('timer-days');
let timerHours = document.getElementById('timer-hours');
let timerMinutes = document.getElementById('timer-minutes');
let timerSeconds = document.getElementById('timer-seconds');
let countDownDate = new Date('Aug 01, 2022 00:00:00').getTime();

let timePass = setInterval(function() {
        let today = new Date().getTime();
        let distance = countDownDate - today;
    if (distance < 0) {
        clearInterval(timePass);
        timer.innerHTML = `Time is out`;
    } else {     
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        timerDays.innerHTML = days;
        timerHours.innerHTML = hours;
        timerMinutes.innerHTML = minutes;
        timerSeconds.innerHTML = seconds;
    }
}, 1000);



// Anually-Monthly buttons section:
let annuallyButton = document.getElementById('annually');
let monthlyButton = document.getElementById('monthly');
let basicPrice = document.getElementById('basic-price');
let professionalPrice = document.getElementById('professional-price');
let masterPrice = document.getElementById('master-price');

annuallyButton.addEventListener('click', () => annuallySubscription());

function annuallySubscription() {
    annuallyButton.style.backgroundColor = 'hsl(257, 27%, 26%)';
    annuallyButton.style.color = 'white';
    monthlyButton.style.backgroundColor = 'white';
    monthlyButton.style.color = 'hsl(257, 27%, 26%)';
    basicPrice.innerHTML = '$199.99';
    professionalPrice.innerHTML = '$249.99';
    masterPrice.innerHTML = '$399.99';
}

monthlyButton.addEventListener('click', () => monthlySubscription());

function monthlySubscription() {
    monthlyButton.style.backgroundColor = 'hsl(257, 27%, 26%)';
    monthlyButton.style.color = 'white';
    annuallyButton.style.backgroundColor = 'white';
    annuallyButton.style.color = 'hsl(257, 27%, 26%)';
    basicPrice.innerHTML = '$19.99';
    professionalPrice.innerHTML = '$24.99';
    masterPrice.innerHTML = '$39.99';
}



// FAQ section:
let arrowUpOne = document.getElementById('arrow-up-1');
let arrowUpTwo = document.getElementById('arrow-up-2');
let arrowUpThree = document.getElementById('arrow-up-3');
let arrowUpFour = document.getElementById('arrow-up-4');
let arrowUpFive = document.getElementById('arrow-up-5');

let arrowDownOne = document.getElementById('arrow-down-1');
let arrowDownTwo = document.getElementById('arrow-down-2');
let arrowDownThree = document.getElementById('arrow-down-3');
let arrowDownFour = document.getElementById('arrow-down-4');
let arrowDownFive = document.getElementById('arrow-down-5');

let answerOne = document.getElementById('answer1');
let answerTwo = document.getElementById('answer2');
let answerThree = document.getElementById('answer3');
let answerFour = document.getElementById('answer4');
let answerFive = document.getElementById('answer5');

//for Question-Answer 1:
arrowDownOne.addEventListener('click', () => showAnswerOne());
arrowUpOne.addEventListener('click', () => hideAnswerOne());

function showAnswerOne() {
    answerOne.style.display = 'block';
    arrowUpOne.style.display = 'block';
    arrowDownOne.style.display = 'none';
}

function hideAnswerOne() {
    answerOne.style.display = 'none';
    arrowUpOne.style.display = 'none';
    arrowDownOne.style.display = 'block';
}

//for Question-Answer 2:
arrowDownTwo.addEventListener('click', () => showAnswerTwo());
arrowUpTwo.addEventListener('click', () => hideAnswerTwo());

function showAnswerTwo() {
    answerTwo.style.display = 'block';
    arrowUpTwo.style.display = 'block';
    arrowDownTwo.style.display = 'none';
}

function hideAnswerTwo() {
    answerTwo.style.display = 'none';
    arrowUpTwo.style.display = 'none';
    arrowDownTwo.style.display = 'block';
}

//for Question-Answer 3:
arrowDownThree.addEventListener('click', () => showAnswerThree());
arrowUpThree.addEventListener('click', () => hideAnswerThree());

function showAnswerThree() {
    answerThree.style.display = 'block';
    arrowUpThree.style.display = 'block';
    arrowDownThree.style.display = 'none';
}

function hideAnswerThree() {
    answerThree.style.display = 'none';
    arrowUpThree.style.display = 'none';
    arrowDownThree.style.display = 'block';
}

//for Question-Answer 4:
arrowDownFour.addEventListener('click', () => showAnswerFour());
arrowUpFour.addEventListener('click', () => hideAnswerFour());

function showAnswerFour() {
    answerFour.style.display = 'block';
    arrowUpFour.style.display = 'block';
    arrowDownFour.style.display = 'none';
}

function hideAnswerFour() {
    answerFour.style.display = 'none';
    arrowUpFour.style.display = 'none';
    arrowDownFour.style.display = 'block';
}

//for Question-Answer 5:
arrowDownFive.addEventListener('click', () => showAnswerFive());
arrowUpFive.addEventListener('click', () => hideAnswerFive());

function showAnswerFive() {
    answerFive.style.display = 'block';
    arrowUpFive.style.display = 'block';
    arrowDownFive.style.display = 'none';
}

function hideAnswerFive() {
    answerFive.style.display = 'none';
    arrowUpFive.style.display = 'none';
    arrowDownFive.style.display = 'block';
}


    

