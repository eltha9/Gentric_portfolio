//button
let synerg = document.querySelector('.synerg-button')
let nodisk = document.querySelector('.nodisk-button')

// divs
let div_synerg = document.querySelector('.synerg')
let div_nodisk = document.querySelector('.no-disk')

synerg.addEventListener('click', ()=>{

    if(!synerg.classList.contains('selected'))
    {
        synerg.classList.toggle('selected')
        nodisk.classList.toggle('selected')
    
        div_synerg.classList.toggle('show')
        div_nodisk.classList.toggle('show')
    }

})

nodisk.addEventListener('click', ()=>{

    if(!nodisk.classList.contains('selected'))
    {
        synerg.classList.toggle('selected')
        nodisk.classList.toggle('selected')
    
        div_synerg.classList.toggle('show')
        div_nodisk.classList.toggle('show')
    }

})