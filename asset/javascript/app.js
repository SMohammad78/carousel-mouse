const innerCrusel = document.querySelector('.inner-crusel');
const outerCrusel = document.querySelector('.outer-crusel');

document.addEventListener("mousemove", coverMouse);

function coverMouse(e) {
    let x = e.clientX;
    let y = e.clientY;

    innerCrusel.style.top = `${y}px`;
    innerCrusel.style.left = `${x}px`;

    outerCrusel.style.top = `${y}px`;
    outerCrusel.style.left = `${x}px`;
}

let links = Array.from(document.querySelectorAll("a"));

links.forEach((link) => {
    link.addEventListener("mouseover", () => {
        innerCrusel.classList.add("grow")
    })

    link.addEventListener("mouseleave", () => {
        innerCrusel.classList.remove("grow")
    })
}) 