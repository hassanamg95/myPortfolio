import { contact } from './contact'

import '@babel/polyfill'

const contactForm = document.querySelector('.form--contact')



if(contactForm) {

  contactForm.addEventListener('submit', e => {

    e.preventDefault()
    document.querySelector('.input-btn').value = 'Send ...'
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const subject = document.getElementById('subject').value
   
    console.log(name, email, subject)

     
       
         setTimeout(() => {

          contact(name, email, subject)
         return document.querySelector('.input-btn').value = 'Send message'
         }, 3000 )
       
    
        
    
  })
}