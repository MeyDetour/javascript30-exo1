
let a = document.getElementById('a')
let b = document.getElementById('b')
let c = document.getElementById('c')
let d = document.getElementById('d')
let e = document.getElementById('e')
let f = document.getElementById('f')
let g = document.getElementById('g')
let h = document.getElementById('h')
let i = document.getElementById('i')
let j = document.getElementById('j')
let k = document.getElementById('k')
let l = document.getElementById('l')


window.addEventListener("keypress", function(k) {

    let carréChoisi = document.getElementById(k.key)
    carréChoisi.classList.add("playing")

})


window.addEventListener("keyup", function(k) {
    let carréDéselect = document.getElementById(k.key)
    carréDéselect.classList.remove("playing")

})

function clic(carre){
    carre.classList.add("playing")
    setTimeout(()=>{carre.classList.remove("playing")},2000)
    let audio = document.getElementById("son_"+ carre.id)
    console.log(audio)
    audio.play()
}

a.addEventListener('click', ()=>{clic(a)})
b.addEventListener('click', ()=>{clic(b)})
c.addEventListener('click', ()=>{clic(c)})
d.addEventListener('click', ()=>{clic(d)})
e.addEventListener('click', ()=>{clic(e)})
f.addEventListener('click', ()=>{clic(f)})
g.addEventListener('click', ()=>{clic(g)})
h.addEventListener('click', ()=>{clic(h)})
i.addEventListener('click', ()=>{clic(i)})
j.addEventListener('click', ()=>{clic(j)})
k.addEventListener('click', ()=>{clic(k)})
l.addEventListener('click', ()=>{clic(l)})