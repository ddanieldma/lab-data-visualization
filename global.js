// console.log("IT’S ALIVE!");

function $$ (selector, context = document) {
    return Array.from(context.querySelectorAll(selector));
}

// Getting all the links in the current page
let navLinks = $$("nav a");

// Getting the link to the current page
let currentLink = navLinks.find(a => a.host === location.host && a.pathname === location.pathname);

// Adding "current" class to the a tag of the current page if the link is 
// defined
if (currentLink) { // or if (currentLink !== undefined)
    currentLink.classList.add("current");
}