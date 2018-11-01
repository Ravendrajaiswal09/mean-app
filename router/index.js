
var express = require('express');
var router = express.Router();
// for mLab
var mongojs = require('mongojs');
var ObjectId = require('mongodb').ObjectID;
//var db = mongojs('mongodb://ravendra:1234@ds111059.mlab.com:11059/my_task')
var db = mongojs('mongodb://localhost:27017/users')


router.get('/get_task', function(req, res, next){
     db.task.find(function(err, data){
        if(err) {
            res.send(err)
        } 
        res.json(data)
    })
  })

    //Get single Task
  router.get('/get_task/:id', function(req, res, next){
    db.task.findOne({_id: ObjectId(req.params.id)}, function(err, data){
        if(err) {
            res.send(err)
        }
        res.json(data)
    })
  })

    //Get single Task
  router.delete('/get_task/:id', function(req, res, next){
    db.task.remove({_id: ObjectId(req.params.id)}, function(err, data){
        if(err) {
            res.send(err)
        }
        res.json(data)
    })
  })

    //Post  Task
  router.post('/get_task', function(req, res, next){
      var task = req.body
       if (!task){
            return res.status(400).send("Bad Request");
        }
        db.task.save(task, function(err, data){
            if(err) {
                res.send(err)
            }
            res.json(data)
        })
  })

   //update task
  router.put('/get_task/:id', function(req, res, next){
    var task = req.body
    if(!task){
        return res.status(400).send("Bad Request");
    } else {
        db.task.update({_id: ObjectId(req.params.id)}, task, function(err, data){
            if(err) {
                res.send(err)
            }
            res.json(data)
        })
    }
  })

module.exports = router;