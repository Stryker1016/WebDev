window.onload=function(){
    let btn=this.document.getElementById('btn')
let num=this.document.getElementById('num')
let list=this.document.getElementById('list')

btn.onclick=function(){
    let N=parseInt(num.value)
    for(let i=1;i<=N;i++)
    {
        let item=document.createElement('li')
        item.innerText=i
        list.appendChild(item)
    }
}
}