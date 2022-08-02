import {Router} from "express";
import userController from '../controllers/user.controller.js'
const router = new Router()

router.post( '/users', userController.createUser)
router.get( '/users', userController.getUsers)
router.get( '/users/:id', userController.getOneUser)
router.put( '/users', userController.updateUsers)
router.delete( '/users/:id', userController.deleteUsers)


export default router