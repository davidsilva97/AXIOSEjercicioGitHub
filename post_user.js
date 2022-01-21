const axios = require('axios');

async function makePostRequest() {
  
  let options = {
    method:"POST",
    headers: {
        "Content-type":"application/json;charset=utf-8"
    },

    data: JSON.stringify({
        id: 9,
        first_name: 'David',
        last_name: 'Silva',
        email: 'freddyb34@gmail.com'
      })
    }

      let res = await axios("http://localhost:3000/users",options),
      json = await res.data;

    console.log(res.params);
}

makePostRequest();


