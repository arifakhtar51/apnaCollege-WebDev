const express=require('express');
const router=express.Router();

// import controller
const {createTodo}=require('../controllers/createTodo');

// difine api routes

router.post("/createTodo",createTodo);

module.exports=router;