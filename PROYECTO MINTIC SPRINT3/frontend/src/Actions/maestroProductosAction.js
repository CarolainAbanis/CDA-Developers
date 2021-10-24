const axios = require('axios');

async function maestroProductosAction (){


var config = {
  method: 'get',
  url: 'http://localhost:4000/ProductosAll',
  headers: {
    'Content-Type': 'application/json',
    'accept': 'application/json'
  }
};

return axios(config)
.then(response=> {
  //window.alert(JSON.stringify(response.data));
  return (response.data);
})
.catch(error => {
  window.alert('error');
  return (error)
});

}

module.exports =  {
  maestroProductosAction
}