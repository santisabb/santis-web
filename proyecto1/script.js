console.log('holis')

window.addEventListener('load', () => {
    const submitButton = document.querySelector('#submit')
submitButton.addEventListener('click', (event) =>{
    alert('click en enviar')
    event.preventDefault()
    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const message = document.querySelector('#comment').value

    console.log(name, email, message)
})
})
