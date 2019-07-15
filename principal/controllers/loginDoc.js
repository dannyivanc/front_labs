const fetch = require ('node-fetch')

async function login_docente(req,res){
    var loginDoc = {
        rudoc: req.body.rudoc,
        ci: req.body.ci
      };
      var metodo={
      method: 'POST',
      body: JSON.stringify(loginDoc),
      headers:{
        'Content-type' : "application/json"
       }
      };
      console.log('asd')
      console.log(metodo)
      fetch('http://localhost:5000/login', metodo)
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(data => {
        console.log(data);
        res.send(data);
      })
}
module.exports ={
    login_docente
}
