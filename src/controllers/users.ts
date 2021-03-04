import { Request, Response } from "express";
import { getRepository } from "typeorm";
import User from '../models/user'

class UsersController {
  async save(req: Request, res: Response) {

    const { nome, email, password } = req.body

    const userRepository = getRepository(User)

    const userExists = await userRepository.findOne({where: { email: email }})

    if(userExists) return res.status(400).json({ error: 'User already exists'})

    const user = userRepository.create({ nome, email, password })
    await userRepository.save(user)

    return res.status(201).json({
      id: user.id,
      nome: user.nome,
      email: user.email

    })
    
  }
}

export { UsersController }