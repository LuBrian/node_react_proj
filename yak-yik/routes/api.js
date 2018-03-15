var express = require('express')
var router = express.Router()
// var zoneControllers = require('../controller/zoneController')


var controllers = require('../controller')
router.get('/:resource',function(req,res,next){


	var resource = req.params.resource
	var controller = controllers[resource]

	if (controller == null){
		res.json({
			confirmation: 'fail',
			message:'Invalide resource request: ' + resource
		})
	}

	controller.find(req.query,function(err , results){
		if (err){
			res.json({
				confirmation:'fail',
				message: err
			})
			return 
		}
		res.json({
			confirmation:'success',
			message: results
		})
	})


})

router.get('/:resource/:id',function(req, res, next){
	var resource = req.params.resource
	var controller = controllers[resource]
	if (controller == null){
		res.json({
			confirmation: 'fail',
			message:'Invalide resource request: ' + resource
		})
	}
	var id = req.params.id
	controller.findById(id,function(err, result){
		if(err){
			res.json({
				confirmation:'fail',
				message:err
			})
			return 
		}
		res.json({
			confirmation:'success',
			message:result
		})
	})

})


router.post('/:resource',function(req,res,next){
	var resource = req.params.resource
	var controller = controllers[resource]
	if (controller == null){
		res.json({
			confirmation: 'fail',
			message:'Invalide resource request: ' + resource
		})
	}
	controller.create(req.body, function(err, result){
		if(err){
			console.log(err)
			res.json({
				confirmation: 'fail',
				message:'error'
			})
			return
		}
		res.json({
			confirmation:'success',
			message:result
		})
	})


})
module.exports = router