const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');
const cardText = document.getElementsByClassName('title');
const Card = document.getElementsByClassName('card');
const CardImg = document.querySelector('.card img');


//Dark Mode Styles
function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0/ 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255/ 50%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.remove('fa-sun');
    toggleIcon.children[1].classList.add('fa-moon');
    image1.src = './img/undraw_calculator_dark.svg';
    image2.src = 'img/undraw_youtube_tutorial_dark.svg';
    image3.src = 'img/undraw_task_list_dark.svg';
    cardText[0].style.color = 'white';
    cardText[0].style.backgroundColor = '#9641ff';
    const Card = document.getElementsByClassName('card');
    CardImg.style.background = 'linear-gradient(-45deg, #6c63ff, #39FF14, #9641ff, #03dac5)';
    Card[0].style.background = 'linear-gradient(to right bottom,rgba(255,255,255,0.7),rgba(255,255,255,0.3))';
}

function lightMode() {
    nav.style.backgroundColor = 'rgb(255 255 255/ 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0/ 50%)';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.remove('fa-moon');
    toggleIcon.children[1].classList.add('fa-sun');
    image1.src = './img/undraw_calculator_light.svg';
    image2.src = 'img/undraw_youtube_tutorial_light.svg';
    image3.src = 'img/undraw_task_list_light.svg';
    cardText[0].style.color = 'black';
    Card[0].style.background = 'white';
    cardText[0].style.backgroundColor = 'white';
    CardImg.style.background = 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)';
}

//Switch Theme Dynamically
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        darkMode();
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        lightMode();
    }
}

//Event listner
toggleSwitch.addEventListener('change', switchTheme);

