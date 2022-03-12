import axios from "axios";

export const contact = async (name, email, subject) => {

    try {
        const res = await axios({
          
            method: 'POST',
            url: '/',
            data: {

                name,
                email,
                subject
            }

        })
        if(res.status === 201) {

            alert('Email sent succesfullly !')
        }

    }
    catch(err) {

           alert('Error : ', err.code)
    }
}
