(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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



},{}]},{},[1]);
