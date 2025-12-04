const divs= document.getElementById('teste1')

const r = [9,6,200,7,15,12]

divs.innerHTML=r

const par = document.createElement('div')
divs.appendChild(par)
r.sort(function(a,b){
    
return a - b
}
)
par.innerHTML=r
console.log(r)

