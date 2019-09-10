const express = require('express');
const router = express.Router();
const guiasCtrl = require('../controllers/guias')
const loginCtrl = require('../controllers/loginDoc')

router.get('/login',(req,res)=>{
  res.render('login')
})

router.post('/login',loginCtrl.login_docente
/*,(req,res)=>{
  res.render('login')
}*/
)

router.get('/qwe',guiasCtrl.renderisar_mostrar_guias);

router.get('/mostrar_guias',guiasCtrl.mostrar_guias)
router.post('/a_guias',guiasCtrl.añadir_guias)



router.post('/f/a_docente',loginCtrl.a_docente)





module.exports = router;
