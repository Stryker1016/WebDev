window.onload=function(){
    let btn=this.document.getElementById('btn')
let num=this.document.getElementById('num')
let list=this.document.getElementById('list')

btn.onclick = function(){
    let N = parseInt(num.value)
    let listi='';
    for(let i=1;i<=N;i++)
    {
        listi+='<li>'+i+'</li>'
    }
    list.innerHTML=listi
}
}