import { contact } from './contact'
import { download } from './download'
import '@babel/polyfill'

const contactForm = document.querySelector('.form--contact')



if(contactForm) {

  contactForm.addEventListener('submit', e => {

    e.preventDefault()
    document.querySelector('.input-btn').value = 'Send ...'
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const subject = document.getElementById('subject').value
contact(name, email, subject)
        //  setTimeout(() => {

          
        //  return document.querySelector('.input-btn').value = 'Send message'
        //  }, 3000 )
       
  })
}

// Handle Download file

// const downloadBtn = document.querySelector('.download__cv')

// if(downloadBtn) {

//   downloadBtn.addEventListener('click', (e) => {

//     window.location.replace('/download')
//     download()
//   })
// }