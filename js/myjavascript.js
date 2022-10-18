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
function countdown(){
    let countDate = new Date('Dec 31, 2022, 23:59:59').getTime();
    let today = new Date().getTime();
    let distance = countDate - today;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    if(distance < 0) {
        clearInterval(timePass);
        document.getElementById('timer-container').innerHTML = `Time is out`;
    } else {
        let textDay = Math.floor(distance / day);
        let textHour = Math.floor((distance % day) / hour);
        let textMinute = Math.floor((distance % hour) / minute);
        let textSecond = Math.floor((distance % minute) / second);

        document.getElementById('timer-days').innerHTML= textDay;
        document.getElementById('timer-hours').innerHTML= textHour;
        document.getElementById('timer-minutes').innerHTML= textMinute;
        document.getElementById('timer-seconds').innerHTML= textSecond;
    }
}

let timePass = setInterval(countdown, 1000);



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

let accordion = document.getElementsByClassName('accordion');

for(let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
        this.classList.toggle('active');
    });
}



    

