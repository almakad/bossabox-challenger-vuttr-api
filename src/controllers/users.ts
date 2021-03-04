import * as EmailValidator from 'email-validator';
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import User from '../models/user'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { AppError } from '../errors/AppError';
const env = require('../main/config/env')

class UsersController {

  index(req: Request, res: Response) {
    return res.json({
      redirec: "Successfuly redirected",
      access_granted: req.userId})
  }

  async save(req: Request, res: Response) {

    const { nome, email, password } = req.body

    const isValidMail = EmailValidator.validate(email)

    if(!isValidMail) throw new AppError("This is an invalid email", 400)

    const userRepository = getRepository(User)

    const userExists = await userRepository.findOne({where: { email: email }})

    if(userExists) throw new AppError("User already exists", 409)

    const user = userRepository.create({ nome, email, password })
    await userRepository.save(user)

    return res.status(201).json({
      id: user.id,
      nome: user.nome,
      email: user.email

    })
  }

  async auth(req: Request, res: Response) {
    const { email, password } = req.body

    const isValidMail = EmailValidator.validate(email)

    if(!isValidMail) throw new AppError("This is an invalid email", 400)

    const userRepository = getRepository(User)

    const user = await userRepository.findOne({where: { email: email }})

    if(!user) {
      throw new AppError("Email or password doesn't match", 401)
    }

    const hashedPassword = await bcrypt.compare(password, user.password)

    if(!hashedPassword) {
      throw new AppError("Email or password doesn't match", 401)
    }

    const token = jwt.sign({ id: user.id }, env.jwtSecret, { expiresIn: '1h', algorithm: "HS256"} )

    return res.redirect(302, 'http://localhost:3000/api/index?authorization=' + token)
  }
}

export { UsersController }