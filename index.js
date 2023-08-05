let display=""

let buttons=document.querySelectorAll(".btn")
// console.log(buttons)
Array.from(buttons).forEach((btn)=>{
          
btn.addEventListener('click',(e)=>{

    if (e.target.innerHTML == '='){
        display=eval(display)
        document.querySelector('input').value=display
    }
     else if(e.target.innerHTML == 'AC'){
        display=''
     document.querySelector('input').value=display
     }
     else if(e.target.innerHTML == 'De'){
        document.querySelector('input').value=display
       
       display=display.toString().slice(0,-1)
     }
     else{
        console.log(e.target)
        display= display + e.target.innerHTML
        document.querySelector('input').value=display
     }


})

})