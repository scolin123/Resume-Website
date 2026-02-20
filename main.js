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

    setTimeout(() => {
        mainContent.scrolltop = 0;
        window.scrollTo(0,0);
    document.body.classList.remove('allow-scroll');
    welcomeScreen.style.display = 'flex';
    },600);
});

particlesJS("particles-js",{
    "particles":{
        "number": {value:80,"density":{"enable":true,"value_area":800}},
        "color":{"value":"#007bff"},
        "shape":{"type":"circle"},
        "opacity":{"value":0.5},
        "size":{"value":3},
        "line_linked":{
            "enable":true,
            "distance":150,
            "color":"007bff",
            "opacity":0.4,
            "width":1

        },

        "move":{"enable":true,"speed":2}
    },
    
    "interactivity":{
        "events":{
            "onhover":{"enable":true,"mode":"grab"},
            "onclick":{"enable":true,"mode":"push"}
        }
    },

    "retina_detect":true
});

