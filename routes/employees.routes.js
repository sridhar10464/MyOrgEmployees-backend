// const { request, response } = require("express");
const Employees = require ("../models/employees.model");
const express = require ( "express");

const router = express.Router();

router.get ("/employees", (request, response) => {
    try{
        Employees.find((err, data) => {
            if(err) {
                return response.status(400).send({message: "Error while retriving employees. please check the data"})
            }
            response.status(200).send(data);
        })
    } catch (error) {
        response.status(500). send({
            message: "Internal server error"
        })
    }

});

router.get ("/employees/:empID", (request, response) => {
    try{
        Employees.findOne({_id: request.params.empID}, (err, data) => {
            if(err) {
                return response.status(400).send({message: "Error while retriving an employee. please check the data"})
            }
            response.status(200).send(data);
        })
    } catch (error) {
        response.status(500). send({
            message: "Internal server error"
        })
    }

});

router.post ("/employees", (request, response) => {
    try{
        const payload = request.body;
        const newEmployee = new Employees(payload);
        newEmployee.save((err, data) => {
            if(err){
                return response.status(400).send({message: "Error while adding new employee. Pls check the data"})
            }
            response.status(200).send({employeeID: data._id, message: "Employee has been added successfully"})
        })
    } catch (error) {
        response.status(500).send({
            message: "Internal server error"
        })
    }

});
 
router.put ("/employees/:empID", (request, response) => {
    try{
        Employees.findByIdAndUpdate({_id: request.params.empID}, {$set: request.body}, (err, data) => {
            if(err){
                return response.status(400).send({message: "Error while updating an existing employee. Pls check the data"})
            }
            response.status(201).send({employeeId: data._id, message: "Employee details have been updated successfully"})
        })

    } catch (error) {
        
    }

});

router.delete ("/employees/:empID", (request, response) => {
    try{
        Employees.deleteOne({_id: request.params.empID}, (err, data) => {
            if(err){
                return response.status(400).send("Error while deleting an employee. Please check the data")
            }
            response.status(200).send({message: `Employee with id ${request.params.empID} has been deleted successfully`})
        })
    } catch (error) {
        response.status(500).send({
            message: "Internal server error"
        })
    }

});

module.exports = router
