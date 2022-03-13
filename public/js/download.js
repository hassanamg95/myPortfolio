import axios from "axios";

export const download = async () => {

   try {
        const res = await new axios({

        method: 'GET',
        url: '/download'
    })
    
    if(res.status === 200) {

        alert('Download Successfully !')
        console.log(res.status)
    }
   }
   catch(err) {
   
    console.log('Error: ',err.response.msg)
   }
}