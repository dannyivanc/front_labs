const express = require('express');
const router = express.Router();
const guiasCtrl = require('../controllers/guias')
const loginCtrl = require('../controllers/loginDoc')


router.get('/login',(req,res)=>{
  res.render('login')
});

router.get('/qwe',(req,res)=>{
  res.render('mostrar_guias')
});

router.get('/f/mostrar_guias',guiasCtrl.mostrar_guias)
//router.post('/f/a_guias',guiasCtrl.añadir_guias)


//router.post('/login',loginCtrl.login_docente)
router.post('/f/a_docente',loginCtrl.a_docente)







module.exports = router;
