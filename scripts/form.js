const button = document.querySelector('#submit-button')
const form = document.querySelector('#email-form')
const invlidText = document.querySelector('#invlid-text')

button.addEventListener('click', (e) => {
  if (form.checkValidity()) {
    e.preventDefault()
    invlidText.textContent = ""
    button.disabled = true

    setInterval(() => {
      button.className = "btn btn-success"
      button.innerHTML = "Sent!"
    }, 2000)
  }
  else {
    invlidText.textContent = "Invalid Submission"
  }
})