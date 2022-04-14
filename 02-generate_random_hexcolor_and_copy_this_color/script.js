// --project requirment
// change the bg color by generating random hex color
// with a button to copy this color


window.onload = () =>{
    main()
}

function main(){
    const root =document.getElementById('root')
    const  changeBtn  = document.getElementById('change-btn')
    const  CopyBtn  = document.getElementById('copy-btn')
    const output = document.getElementById('output')


    changeBtn.addEventListener('click', function(){
        const bgcolor = generatorHexColor()
        root.style.backgroundColor = bgcolor
        output.value = bgcolor

    
    })
    CopyBtn.addEventListener("click", function(){
        navigator.clipboard.writeText(output.value)
        alert (output.value +' is Copied')   
    })
}

function generatorHexColor(){
    const red = Math.floor(Math.random()*255)
    const green = Math.floor(Math.random()*255)
    const blue = Math.floor(Math.random()*255)
    
    return  `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}
