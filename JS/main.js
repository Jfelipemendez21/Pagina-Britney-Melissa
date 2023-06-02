let imgGaleria = document.querySelectorAll(".imgGaleria").forEach((e) => {
    e.addEventListener("click", () => {
        let imgFull = document.querySelector(".img-full");
        imgFull.setAttribute("src", e.src);
        let contImgFull = document.querySelector(".cont-img-full");
        contImgFull.style.display = "flex";
        let x= document.createElement("span");
        contImgFull.appendChild(x)
        x.className="x";
        x.innerHTML="X";
        x.addEventListener("click", () => {
            contImgFull.style.display= "none"
            x.innerHTML="";
        })
    })
})

let menu= document.querySelector(".menu");

menu.addEventListener("click", ()=>{
    let navegacion= document.querySelector(".navegacion");
    navegacion.classList.toggle("navegacion-visible")
})