const fetch = require('node-fetch');
var bodyParser = require('body-parser');

function mostrar_guias (req,res,next){
  fetch('http://localhost:3000/b/mostrar_guias')
  .then(resp => resp.json())
  .then(resp =>{
    console.log(resp)
    res.send(resp)
  });
}
function añadir_guias(req,res){
    var a_guias = {
        numero : req.body.numero,
        estudiante : req.body.estudiante,
        calificacion : req.body.calificacion,
        materia : req.body.materia,
        estado : req.body.estado
       };
       a_guias = a_guias;
           var metodo={
           method: 'POST',
           body: JSON.stringify(a_guias),
           headers:{
             'Content-type' : "application/json"
           }
         };
         fetch('http://localhost:3000/b/a_guias',metodo)
         .then(res => res.json())
         .catch(error => console.error('Error:', error))
         .then(data => {
           console.log(a_guias)
           var qwerty= console.log('mandando desde frontend')
          res.send(a_guias)
          res.send(qwerty)
          
         })
}

/*
router.get('/b/mostrar_guias',(req,res) =>{
  Guia.find({},(err,guias) =>{
    console.log(guias)
    if (err) res.status(500).send({message:`error al guardar: ${err}`})
    if(!guias) return res.status(404).send({message: `no existen productos ` })
    res.send(200, {guias})
  })
})
*/


module.exports ={
    mostrar_guias,
    añadir_guias
}