// Function to handle entering the site
function enterSite() {
    const landingPage = document.getElementById('landing-page');
    const mainContent = document.getElementById('main-content');

    landingPage.style.top = '-100%';
    setTimeout(() => {
        landingPage.style.display = 'none';
        mainContent.style.display = 'flex';

        // Trigger reflow
        void mainContent.offsetWidth;

        mainContent.style.opacity = 1;
        localStorage.setItem('visitedLandingPage', 'true;);
        
        // Load the main content
        loadContent('main.html');
    }, 1000);
}


function loadContent(url) {
    const iframe = document.getElementById('content-iframe');
    iframe.style.opacity = 0;

    setTimeout(() => {
        iframe.src = url;
    }, 500);

    iframe.onload = () => {
        iframe.style.opacity = 1;
    };
}

function goToLandingPage() {
    const mainContent = document.getElementById('main-content');
    const landingPage = document.getElementById('landing-page');

    mainContent.style.opacity = 0;
    setTimeout(() => {
        mainContent.style.display = 'none';
        landingPage.style.display = 'flex';

        // Trigger reflow
        void landingPage.offsetWidth;

        landingPage.style.top = '0';
    }, 1000);
}

function checkLandingPage() {
    const landingPage = document.getElementById('landing-page');
    const mainContent = document.getElementById('main-content');

    if (localStorage.getItem('visitedLandingPage') === 'true') {
        landingPage.style.display = 'none';
        mainContent.style.display = 'flex';
        mainContent.style.opacity = 1;
        loadContent('main.html');
    } else {
        landingPage.style.display = 'flex';
        mainContent.style.display = 'none';
    }
}

window.onload = checkLandingPage;
