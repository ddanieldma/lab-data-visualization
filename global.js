// Const bool to tell if we are at home page
const ARE_WE_HOME = document.documentElement.classList.contains("home")

function $$ (selector, context = document) {
    return Array.from(context.querySelectorAll(selector));
}

// // Getting all the links in the current page
// let navLinks = $$("nav a");

// // Getting the link to the current page
// let currentLink = navLinks.find(a => a.host === location.host && a.pathname === location.pathname);

// // Adding "current" class to the a tag of the current page if the link is 
// // defined
// if (currentLink) { // or if (currentLink !== undefined)
//     currentLink.classList.add("current");
// }

// Adding navigation menu
// Creating structure to store the links to pages
let pages = [
    {url: "", title: "Home"},
    {url: "contact/", title: "Contact"},
    {url: "cv/", title: "Curriculum"},
    {url: "projects/", title: "Projects"},
    {url: "https://github.com/ddanieldma", title: "Projects"},
]

// Creates a nav tag 
let nav = document.createElement("nav")
// Appends our document in the beggining of the body
document.body.prepend(nav)

// Iterating over pages to add navbar to all
for (let page of pages) {
    let url = page.url
    let title = page.title

    // Adding ../ to the link if we aren't at home
    if (!ARE_WE_HOME && !url.startsWith("http")) {
        url = "../" + url
    }

    // Creating a tag
    let a = document.createElement("a")
    
    // Setting it up
    a.href = url
    a.textContent = title

    // Adding current class to the current page
    if (a.host === location.host && a.pathname === location.pathname) {
        a.classList.add("current")
    }

    // Adding target="_blank" to external links
    if(a.host !== location.host){
        a.target="_blank"
    }

    nav.append(a)   
}