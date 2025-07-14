import { routes } from "./js/routes.js"

let link1 = document.getElementById("link1")
let link2 = document.getElementById("link2")
let link3 = document.getElementById("link3")
let link4 = document.getElementById("link4")

let links = [link1,link2,link3,link4]

let div = document.getElementById("app")

links.forEach(element => {
    element.addEventListener("click", async  (e)=>{
        e.preventDefault()

        console.log(e.target)

        let llave = e.target.getAttribute("href")
        // history.pushState({},"",llave)

        // console.log(typeof routes[llave])
        


        if(typeof routes[llave] == "object"){
            render(routes[llave][0]())
            routes[llave][1]()
        } else {
            render(routes[llave]())
        }

        window.location.hash = llave

        // console.log(e.target.textContent)

        // // div.innerHTML = `<h1 class="text-light">Soy el link ${e.target.textContent}</h1>`
        // console.log(await viewPage(e.target.textContent))

        // render(await viewPage(e.target.textContent))

        
        

    })
})



//  async function viewPage(address){
//     let res = await fetch(`html/${address}.html`)
//     let resTxt = await res.text()
//     return resTxt
//  }

function render(codigo){
    div.innerHTML = codigo
}

window.addEventListener("hashchange",()=>{
    let path = window.location.hash;
    render(routes[path]());
})

document.addEventListener("DOMContentLoaded",()=>{
    let path = window.location.hash;
    render(routes[path]());
})