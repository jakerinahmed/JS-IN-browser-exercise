const h1ChangeColor = document.querySelector("h1")
const body = document.querySelector("body")
const h2 =document.querySelector("h2")
const newP = document.createElement("p")
const clickNav = document.querySelector("a")
const boldP = document.querySelector("p")


h1ChangeColor.addEventListener("click", () => {
    body.setAttribute("class", "bg-color2")
})

h1ChangeColor.addEventListener("mouseleave", () => {
    body.setAttribute("class", "bg-color")
})

h2.addEventListener("mouseenter", () => {
    h2.textContent = "Hello from J and Z"

    // h2.addEventListener("mouseleave", () => {
    //     h2.id = Original
    // })
})

newP.addEventListener("keydown", () => {
    newP.textContent = "Lorem jdfvhjfgv jdfg dgfhgsdfhgadff fh agf ahdf gal"
    body.append(newP)
})

clickNav.addEventListener("click", () => {
    boldP.setAttribute("class", "bold")

    clickNav.addEventListener("click", () => {
        boldP.setAttribute("class", "")
    })
})


