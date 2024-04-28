import express from "express";
import { create, deleteUser, getAll, getOne, updateUser } from "../Controllers/userController.js";

const route = express.Router();

route.post('/create', create);
route.get('/getall', getAll);
route.get('/getone/:id',getOne);
route.put('/update/:id', updateUser);
route.delete('/delete/:id', deleteUser);

export default route;