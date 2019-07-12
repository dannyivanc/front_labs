const express = require('express');
const router = express.Router();
const guiasCtrl = require('../controllers/guias')


router.get('/qwe',(req,res)=>{
  res.send('4000')
});

router.get('/f/mostrar_guias',guiasCtrl.mostrar_guias)
router.post('/f/a_guias',guiasCtrl.añadir_guias)


module.exports = router;
