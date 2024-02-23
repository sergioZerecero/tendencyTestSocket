const axios = require('axios');
const BASE_URI = process.env.API_ENVIA;

const headers = {
  Authorization: `Bearer ${process.env.TOKEN_ENVIA}`
}

const postEnvia = (url, body) =>
  new Promise((res, rej) => {
    return axios.post(`${BASE_URI}${url}`, { ...body }, { headers })
      .then(data => res(data))
      .catch(err => rej(err));
  });

module.exports = { postEnvia }