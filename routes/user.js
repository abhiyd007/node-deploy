const express = require("express");
const userController = require('../controller/user');
const router = express.Router();

//CRUD
router.get('/',userController.getAllUsers)
      .get('/:id',userController.getUser)
      .post('/',userController.createUser)
      .put('/:id',userController.replaceUser)
      .patch('/:id',userController.updateUser)
      .delete('/:id',userController.deleteUser);   
      
exports.router = router