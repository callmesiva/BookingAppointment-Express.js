const db = require("../database");

exports.view = (req,res)=>{

   db.query("select * from bookapp" ,(err,resolve)=>
    { 
      if(!err){  
      res.render("home",{resolve});
    } 
   })
}

exports.save =(req,res)=>{

    const{fname,email,phone,date,time} = req.body;
    if(fname=="" || email=="" || phone=="" || date==""){
        db.query("select * from bookapp",(err,resolve)=>{
            if(!err){
                res.render("home",{resolve,msg:"Please Enter All Details..!!"})
            }
         })
    }
    else{
    db.query("insert into bookapp(name,email,phone,date,time) values(?,?,?,?,?)",[fname,email,phone,date,time],(err,resolve)=>{
        if(!err){
         db.query("select * from bookapp",(err,resolve)=>{
            if(!err){
                res.render("home",{resolve,msg:"Appointment Booked Successfully..!!"})
            }
         })
        }
    })
}
}



exports.editpage=(req,res)=>{
    const Id = req.params.id;
     db.query("select * from bookapp where id=?",[Id],(err,row)=>{
       if(!err){
           db.query("delete from bookapp where id=?",[Id],(err,done)=>{
           if(!err){
                 db.query("select * from bookapp",(err,resolve)=>{
                     if(!err){
                        res.render("editpage",{row,resolve});
                   }
               })
            }
        })
        }
    });
}

exports.delete =(req,res)=>{
    const Id = req.params.id;
    db.query("delete from bookapp where id=?",[Id],(err,resolve)=>{
        if(!err){
            res.redirect("/");
        }
    })

   
}