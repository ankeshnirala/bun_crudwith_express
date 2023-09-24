import { Request, Response, NextFunction } from "express"
import {BadRequestError} from "./../../errors/bad.request"

let users: Object[] = []

const createUser = (req: Request, res: Response, next: NextFunction) => {
    const usr = req.body;

    if(!usr.id) {
        throw new BadRequestError("id is required")
    }

    if(users.filter((item: any) => item.id == usr.id).length > 0) {
        throw new BadRequestError(`user already exist with id ${usr.id}`)
    }

    users = [...users, usr]

    req.data = usr;
    req.status = 201

    return next()
}

const getAllUsers = (req: Request, res: Response, next: NextFunction) => {

    req.data = users
    req.status = 200

    return next()
}

const getUser = (req: Request, res: Response, next: NextFunction) => {

    const id = req.params.id

    req.data = users.filter((item: any) => item.id ==id)[0]
    req.status = 200

    return next()
}

const updateUser = (req: Request, res: Response, next: NextFunction) => {

    const id = req.params.id
    const usr = req.body

    const userById = users.filter((item: any) => item.id == id)[0]
    const newUser = {...userById, ...usr}
    users = [...users.filter((item: any) => item.id != id), newUser]

    req.data = newUser
    req.status = 200

    return next()
}


const deleteUser = (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id

    const userById = users.filter((item: any) => item.id == id)[0]
    users = [...users.filter((item: any) => item.id != id)]

    req.data = userById
    req.status = 200

    return next()
}


export { createUser, getAllUsers, getUser, updateUser, deleteUser }