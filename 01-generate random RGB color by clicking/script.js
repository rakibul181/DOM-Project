// --project requirment
// change the bg color by generating random RGB color
window.onload = () =>{
    main()
}

function main(){
    const root =document.getElementById('root')
    const  btn  = document.getElementById('btn')

    btn.addEventListener('click', function(){
        const bgcolor = generatorRGB()
        root.style.backgroundColor = bgcolor
    })
}

function generatorRGB(){
    const red = Math.floor(Math.random()*255)
    const green = Math.floor(Math.random()*255)
    const blue = Math.floor(Math.random()*255)
    
    return  `rgb(${red}, ${green}, ${blue}`
}