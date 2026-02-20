const startButton = document.querySelector('.StartButton');
const mainContent = document.getElementById('MainContent');
const welcomeScreen = document.getElementById('WelcomeScreen');
const homeBtn = document.getElementById('homeBtn');

startButton.addEventListener('click',() => {
    mainContent.classList.add('splash-reveal');

    setTimeout(() => {

        document.body.classList.add('allow-scroll');

        document.getElementById('WelcomeScreen').style.display = 'none';
    }, 1200)
});

homeBtn.addEventListener('click',(e) => {
    e.preventDefault();



    mainContent.classList.remove('splash-reveal');
    document.body.classList.remove('allow-scroll');
    welcomeScreen.style.display = 'flex';
})

