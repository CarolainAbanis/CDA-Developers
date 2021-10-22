var axios = require('axios');

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
  window.alert(response.data)
})
.catch(error => {
  window.alert(error);
});

}

module.exports =  {
  maestroProductosAction
}