const fetch = require ('node-fetch')

async function a_docente(req,res){
  var ado ={
      rudoc : req.body.rudoc,
      ci : req.body.ci,
      rol : req.body.rol
     };
     
         var metodo={
         method: 'POST',
         body: JSON.stringify(ado),
         headers:{
           'Content-type' : "application/json"
         }
       };
       fetch('http://localhost:5000/b/a_docente',metodo)
       .then(res => res.json())
       .catch(error => console.error('Error:', error))
       .then(data => {
         //console.log(ado)
         var qwerty= console.log('mandando desde frontend')
        res.send(ado)
        res.send(qwerty)
        
       })
}





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
        console.log(data)
        res.send(data)
        console.log(metodo)
      })
}
module.exports ={
  login_docente,
  a_docente
    
}
