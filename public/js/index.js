import { contact } from './contact'

import '@babel/polyfill'

const contactForm = document.querySelector('.form--contact')



if(contactForm) {

  contactForm.addEventListener('submit', e => {

    e.preventDefault()
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const subject = document.getElementById('subject').value

    const msgFailed = document.getElementById('msg__failed')
    const msgSuccess = document.getElementById('msg__success')
    console.log(name, email, subject)

    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(!emailFormat.test(email) ) {

        console.log('not validate')
        msgFailed.style.display = 'block'
        msgSuccess.style.display = 'none'
    }
    else {

        msgSuccess.style.display = 'block'
            msgFailed.style.display = 'none'
            contact(name, email, subject)

    }
    
  })

}