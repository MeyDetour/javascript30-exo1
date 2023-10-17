

window.addEventListener("keydown", function(k) {
    console.log(typeof k.key)
    let carréChoisi = document.getElementById(k.key)
    carréChoisi.classList.add(".playing")

})