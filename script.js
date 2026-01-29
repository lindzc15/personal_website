// on load, display dynamic content based on default selected nav item
document.addEventListener("DOMContentLoaded", (event) => {
    const emptyStars = document.getElementsByClassName("star-open");
    for (const star of emptyStars) {
        star.style.opacity = "0";
    }

    const params = new URLSearchParams(window.location.search);

    // if page is reloading due to form submission, stay on contact page, display success message
    if (params.get("submitted") === "true") {
        const contactNav = document.getElementById("contact")
        setActiveNav(contactNav);

        window.history.replaceState({}, document.title, window.location.pathname);

    }
    else {
        const aboutNav = document.getElementById("about")
        setActiveNav(aboutNav);
    }
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
        navStar.style.opacity = "1";
    }
}

// When mouse stops hovering nav item, hide open star icon, unless it's the active nav item
function hideOpenStar(e) {
    const classes = e.classList

    if (!classes.contains("active")) {
        const navStar = document.getElementById(`star-${e.id}`);

        navStar.style.opacity = "0";
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
        navStar.style.opacity = "0";
    }

    e.classList.add("active");
    const navStar = document.getElementById(`star-${e.id}`);
    navStar.classList.remove("star-open");
    navStar.classList.add("star-filled");
    navStar.style.opacity = "1";
    
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


function submitForm() {
    // if reloading from form submit, keep on contact page, display success message, and clear form inputs
    const params = new URLSearchParams(window.location.search);
    if (params.get("submitted")) {
        window.alert("yayy submit");
    }
}