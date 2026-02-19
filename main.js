const startButton = document.querySelector('.StartButton');
const mainContent = document.getElementById('MainContent');

startButton.addEventListener('click',() => {
    mainContent.classList.add('splash-reveal');

    setTimeout(() => {

        document.body.classList.add('allow-scroll');

        document.getElementById('WelcomeScreen').style.display = 'none';
    }, 1200)
});

