// DOM Elements
const formData = document.querySelectorAll(".formData")
const closeBtn = document.querySelector(".mod2c__close")
const signUpBtn = document.querySelector(".signUpBtn")

// let nameOk = /^[A-Z][a-zàçéèëêîï]+(['\-\s][A-Z][a-zàçéèëêîï])?$/
let nameOk = /[A-Z][a-zàçéèëêîï]+(['\-\s][A-Z][a-zàçéèëêîï])?$/
let emailOk = /(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/
let msgOk = /\w/
let inputsOk = true

// add event listeners
closeBtn.addEventListener("click", closeModale2)
signUpBtn.addEventListener("submit", validate)

var param = getParams()
let photographers = JSON.parse(localStorage.getItem('pSet'))

for (let p of photographers) {
  if (p.id == param) {
    pSel = new Photographer(p)
    break
  }
}

var pName = document.getElementById('mod2c__title_n')
pName.textContent = pSel.name

// Fermeture de la fenêtre sur clic sur "X"
function closeModale2() {
  modale2.style.display = "none"
  modale1.style.display = "block"
}

// function validate called at form submit event
function validate() {
  inputsOk = true
  checkInputs()
  if (inputsOk == true) {
    alert("Merci pour ce message")
    closeModale2()
    return true
  } else {
    return false
  }
}

// checks the inputs and switch var inputsOk to false if not OK
function checkInputs() {
  let first = document.getElementById("mod2c__form_f")
  let last = document.getElementById("mod2c__form_l")
  let email = document.getElementById("mod2c__form_e")
  let message = document.getElementById("mod2c__form_m")

  if ((first.value.length < 3) || (!nameOk.test(first.value))) {
    formData[0].dataset.error = "Majuscule initiale puis lettres, espace, apostrophe et tiret sont valides"
    formData[0].dataset.errorVisible = "true"
    inputsOk = false
  } else {
    formData[0].dataset.error = ""
    formData[0].dataset.errorVisible = "false"
  }

  if ((last.value.length < 3) || (!nameOk.test(last.value))) {
    formData[1].dataset.error = "Majuscule initiale puis lettres, espace, apostrophe et tiret sont valides"
    formData[1].dataset.errorVisible = "true"
    inputsOk = false
  } else {
    formData[1].dataset.error = ""
    formData[1].dataset.errorVisible = "false"
  }

  if ((email.value.length < 3) || (!emailOk.test(email.value))) {
    formData[2].dataset.error = "Veuillez renseigner une adresse mail correcte"
    formData[2].dataset.errorVisible = "true"
    inputsOk = false
  } else {
    formData[2].dataset.error = ""
    formData[2].dataset.errorVisible = "false"
  }

  if ((message.value.length < 1) || (!msgOk.test(message.value))) {
    formData[3].dataset.error = "Veuillez me laisser un message S.V.P. !"
    formData[3].dataset.errorVisible = "true"
    inputsOk = false
  } else {
    formData[3].dataset.error = ""
    formData[3].dataset.errorVisible = "false"
  }
}

// affiche la modale2 : formulaire de contact du photographe sélectionné
function affModale2() {
  modale1.style.display = "none"
  modale2.style.display = "flex"
}