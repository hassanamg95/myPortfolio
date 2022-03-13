import axios from "axios";


const msgFailed = document.getElementById('msg__failed')
const msgSuccess = document.getElementById('msg__success')

export const contact = async (name, email, subject) => {

    try {
        const res = await axios({
          
            method: 'POST',
            url: '',
            data: {

                name,
                email,
                subject
            }

        })
        if(res.status === 201) {

            // alert('')
            msgSuccess.style.display = 'block'
            msgSuccess.innerHTML = 'Email sent succesfullly !'
            msgFailed.style.display = 'none'
        }
    }
    catch(err) {

        msgFailed.style.display = 'block'
        msgFailed.innerHTML = `${err.response.data.msg}`
        msgSuccess.style.display = 'none'

        //    console.log('error : ', err.response.data.msg)
    }
   
}
