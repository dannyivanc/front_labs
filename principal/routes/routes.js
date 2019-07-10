const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
var bodyParser = require('body-parser');


/*desde windows */
/*desde ubuntu*/
router.get('/',(req, res) => {
 // const tasks = await Task.find();
  res.render('mostrar_guias');
});

router.get('/qwe',(req,res)=>{
  res.send('asd')
});

router.get('/f/mostrar_guias',(req, res, next)=>{
  
  fetch('http://localhost:3000/b/mostrar_guias')
  .then(resp => resp.json())
  .then(resp =>{
    console.log(resp)
    res.send(resp)
  });
});

 // añadir guias
 var data, a_guias;
 router.post('/f/a_guias', (req, res) => {
   var a_guias = {
    materia : req.body.materia,
    calificacion : req.body.calificacion,
    estado : req.body.estado
   };
   a_guias = a_guias;
       var esto={
       method: 'POST',
       body: JSON.stringify(a_guias),
       headers:{
         'Content-type' : "application/json"
       }
 
     };
     fetch('http://localhost:3000/b/a_guias',esto)
     .then(res => res.json())
     .catch(error => console.error('Error:', error))
     .then(data => {
       console.log(a_guias);
      res.send(a_guias)
     })
 });
 














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








router.get('/insertar', async (req, res) => {
  const tasks = await Task.find();
  res.render('insertar', {
    tasks
  });
});


router.post('/add', async (req, res, next) => {
  const task = new Task(req.body);
  await task.save();
  res.redirect('/');
});

router.get('/turn/:id', async (req, res, next) => {
  let { id } = req.params;
  const task = await Task.findById(id);
  task.status = !task.status;
  await task.save();
  res.redirect('/');
});


router.get('/edit/:id', async (req, res, next) => {
  const task = await Task.findById(req.params.id);
  console.log(task)
  res.render('edit', { task });
});

router.post('/edit/:id', async (req, res, next) => {
  const { id } = req.params;
  await Task.update({_id: id}, req.body);
  res.redirect('/');
});

router.get('/delete/:id', async (req, res, next) => {
  let { id } = req.params;
  await Task.remove({_id: id});
  res.redirect('/');
});


module.exports = router;
