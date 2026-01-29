// on load, display dynamic content based on default selected nav item
document.addEventListener("DOMContentLoaded", (event) => {
    const emptyStars = document.getElementsByClassName("star-open");
    for (const star of emptyStars) {
        star.style.visibility = "hidden";
    }

    displayDynamicContent()
});

// open linked in profile in new tab
function visitLinkedIn() {
    window.open('https://www.linkedin.com/in/lindzey-coonradt-2530902b8', '_blank')
}

// open github profile in new tab
function visitGithub() {
    window.open('https://github.com/lindzc15', '_blank')
}

// displays open star next to nav item hovered on, unless it's the active nav item
function showOpenStar(e) {
    const classes = e.classList

    if (!classes.contains("active")) {
        const navStar = document.getElementById(`star-${e.id}`);

        navStar.classList.remove("star-filled");
        navStar.classList.add("star-open")
        navStar.style.visibility = "visible";
    }
}

// When mouse stops hovering nav item, hide open star icon, unless it's the active nav item
function hideOpenStar(e) {
    const classes = e.classList

    if (!classes.contains("active")) {
        const navStar = document.getElementById(`star-${e.id}`);

        navStar.style.visibility = "hidden";
    }
}

// change the active nav item, display correct star icon, and change dynamic content (header and body)
function setActiveNav(e) {
    const navItems = document.getElementsByClassName("nav-item");

    for (const nav of navItems) {
        nav.classList.remove("active");
        const navStar = document.getElementById(`star-${nav.id}`);
        navStar.classList.remove("star-open");
        navStar.classList.remove("star-filled");
        navStar.style.visibility = "hidden";
    }

    e.classList.add("active");
    const navStar = document.getElementById(`star-${e.id}`);
    navStar.classList.remove("star-open");
    navStar.classList.add("star-filled");
    navStar.style.visibility = "visible";
    
    const dynamicHeader = document.getElementById("dynamic-header");
    dynamicHeader.innerText = e.innerText;

    displayDynamicContent();
}


// displays the appropriate body content based on active nav item
function displayDynamicContent() {
    const active = document.getElementsByClassName("active")
    const dynamicHeader = document.getElementById("dynamic-header");
    dynamicHeader.innerText = active[0].innerText;

    const bodyContentElements = document.getElementsByClassName("body-content");
    for (const content of bodyContentElements) {
        if(content.id == `${active[0].id}-body`) {
            content.style.display = "block";
        }
        else {
            content.style.display = "none";
        }
    }
}