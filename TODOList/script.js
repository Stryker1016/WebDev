window.onload = function(){
    let btn=document.getElementById('btn')
    let input=document.getElementById('input')
    let list=document.getElementById('list')

    btn.onclick = function(){
        let li=document.createElement('li')
        
        let xbtn=document.createElement('button')
        xbtn.innerText='X'
        xbtn.onclick=function(event){
            event.target.parentElement.remove()
        }
        let upbtn=document.createElement('button')
        upbtn.innerText='|'
        upbtn.onclick=function(event){
            event.target.parentElement.parentElement.insertBefore(
                event.target.parentElement,
                event.target.parentElement.previousElementSibling
            )
        }
        let dnbtn=document.createElement('button')
        dnbtn.innerText='?'
        dnbtn.onclick=function(event){
            event.target.parentElement.parentElement.insertBefore(
                event.target.parentElement.nextElementSibling,
                event.target.parentElement
            )
        }
        li.appendChild(xbtn)
        li.appendChild(upbtn)
        li.appendChild(dnbtn)
        let span=document.createElement('span')
        span.innerText=input.value
        li.appendChild(span)
        list.appendChild(li)
    }
}