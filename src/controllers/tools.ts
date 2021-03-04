import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { ToolsDb } from "../models/tools";


class Tools {
  async save(req: Request, res: Response) {
    var { title, link, description, tags } = req.body;

    const toolsRepository = getRepository(ToolsDb)

    if(!title || !link || !description || !tags) {
      res.status(400).json({
        error: "The field can't be blank"
      })
    }
    tags = JSON.stringify(tags)

    const tool = toolsRepository.create({ title, link, description, tags })
    await toolsRepository.save(tool)

    return res.status(201).json({
      tool
    })
  }
  
}
export { Tools }