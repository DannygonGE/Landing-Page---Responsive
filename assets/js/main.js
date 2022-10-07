// responsive navbar //
const bar = document.querySelector(".burger")
const nav = document.querySelector(".nav-bar")

function navbar(){
    bar.addEventListener('click', ()=>{
        nav.classList.toggle("nav-active")
    })
}

navbar();

// animate text //

function Texto(){
    const Text = document.querySelector(".second-part")

    setTimeout(() => {
        Text.textContent = "Frontend Developer"
    }, 0)

    setTimeout(() => {
        Text.textContent = "Web Designer"
    }, 4000)

    setTimeout(() => {
        Text.textContent = "Javascript Developer"
    }, 8000)

    }

    setInterval(Texto, 12000);
    Texto();