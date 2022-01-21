const axios = require('axios');

async function makeDeleteRequest(userNum) {

    let options = {
        method:"DELETE",
        headers: {
            "Content-type":"application/json;charset=utf-8"
        },
    }
    respuesta = await axios(`http://localhost:3000/users/${userNum}`,options),
    json = await respuesta.data;

    console.log(respuesta.status);
}

makeDeleteRequest(6);
