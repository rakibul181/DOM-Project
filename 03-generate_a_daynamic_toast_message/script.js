// --project requirment
// change the bg color by generating random hex color
// with a button to copy this color
// carate a daynamic toast message of copied hex color

// gloval variable

let div = null

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

        if(div!==null){
            div.remove()
            div = null
        }

        generateToastMgs(`${output.value} copied`)
        
    })
}

function generatorHexColor(){
    const red = Math.floor(Math.random()*255)
    const green = Math.floor(Math.random()*255)
    const blue = Math.floor(Math.random()*255)
    
    return  `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}

function generateToastMgs(text){
    div = document.createElement('div')
    div.innerText = text
    div.className =" toast-mgs toast-mgs-in"
    div.style.backgroundColor = output.value
    
    div.addEventListener('click', function(){
        div.classList.remove('toast-mgs-in')
        div.classList.add('toast-mgs-out')

        div.addEventListener('animationend',function(){
            div.remove()
            div = null
        })
    })
    document.body.appendChild(div)

}
