import { Router } from "express"

import {createUser, getAllUsers, getUser, updateUser, deleteUser} from "./../controllers/users"
import {validateResponse} from "./../middlewares/res.validator"

const routerInstance = Router()

routerInstance.route("/users/add").post(createUser, validateResponse)
routerInstance.route("/users/getall").get(getAllUsers, validateResponse)
routerInstance.route("/users/:id").get(getUser, validateResponse)
routerInstance.route("/users/:id").patch(updateUser, validateResponse)
routerInstance.route("/users/:id").delete(deleteUser, validateResponse)

export { routerInstance as userRoutes }