// Const bool to tell if we are at home page
const ARE_WE_HOME = document.documentElement.classList.contains("home")

function $$ (selector, context = document) {
    return Array.from(context.querySelectorAll(selector));
}

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

    a.classList.toggle("current", a.host === location.host && a.pathname === location.pathname) // toggles the class current if condition is met

    // Adding target="_blank" to external links
    if(a.host !== location.host){
        a.target="_blank"
    }

    nav.append(a)   
}