const servidor = require('./servidor');

servidor.app.get('/',function(req,res){
   res.send('<h1>principal</h1>')
    



})
