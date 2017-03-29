let User = require('../models/user');

module.exports ={
 singup:function(req,res){
   User.create({
     userName:req.body.userName,
     email:req.body.email,
     password:req.body.password,
     salt:req.body.salt
   },function(err,succ){
      if (err) {
        res.send(err);
      } else {
        res.send('insert success');
      }
   })
 },

 reads:function(req,res){
   User.find({

   },
   function(err,users){
     if (err) {
       res.send(err)
     } else {
       res.send(users)
     }
   })
 }


}
