// ++++++++++++++++ Logo List +++++++++++++++++++++
let logoList = document.getElementById('logoList')
let list = document.getElementById('list')

logoList.onclick = function () {
    document.querySelectorAll('#logoList span').forEach(span => {
        span.classList.toggle('span')
    })
    list.onclick = function () {
        list.classList.toggle('list')
        document.querySelectorAll('#logoList span').forEach(span => {
            span.classList.toggle('span')
        })
    }
    list.classList.toggle('list')
}

// +++++++++++++++++ header Change ++++++++++++++++++
let header = document.getElementById('header')
window.addEventListener('scroll' , function () {
    header.classList.toggle('header' , window.scrollY > 1)
    
})

// ++++++++++++++++ Form Message +++++++++++++++++++++

let inpName = document.getElementById('Sendname')
let inpEmail = document.getElementById('Sendemail')
let inpMes = document.getElementById('Sendmes')

let errName = document.getElementById('errName')
let errEmail = document.getElementById('errEmail')
let errMes = document.getElementById('errMes')
document.getElementById('formMes').onsubmit = function () {
    let name = false
    let email = false
    let mes = false

    if ( inpName.value == '' || inpName.value.length > 15) {
        errName.innerHTML = 'put a short and great name'
    } else {
        errName.innerHTML = 'Cool Name'
        name = true
    }

    let re = /\w+(\d+)?(\w+)?@\w+.(com|net|io|dev|web|app)/ig
    if (re.test(inpEmail.value)) {
        email = true;
    } else {
        errEmail.innerHTML = 'put a valid Email'
    }

    if (inpMes.value !== '') {
        mes = true 
    } else {
        errMes.innerHTML = 'right a cool message like you'
    }

    if (name === true && email === true && mes === true) {
        return true
    }

    return false
}