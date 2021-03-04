import { Request, Response } from "express";
import { getRepository, Like } from "typeorm";
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

  async listTools(req: Request, res: Response) {
    const toolsRepository = getRepository(ToolsDb)

    const tools = await toolsRepository.find({order: {id: 'ASC'}, skip: 0, take: 30})
    console.log(tools)
    
    tools.map((tg) => {
      tg.tags = JSON.parse(tg.tags)
    })
    
    return res.json(tools)
  }

  async searchByTag(req: Request, res: Response) {
    const { tag } = req.params

    const toolsRepository = getRepository(ToolsDb)

    const tagsResearch = await toolsRepository.find({tags: Like(`%${tag}%`)})

    if(!tagsResearch) return res.status(404).json({tag: "Not found"})
    
    tagsResearch.map((tg) => {
      tg.tags = JSON.parse(tg.tags)
    })

    return res.status(200).json(
      tagsResearch
    )
  }

  async searchById(req: Request, res: Response) {

    const { id } = req.params
    
    const toolsRepository = getRepository(ToolsDb)

    const idResearch = await toolsRepository.find({where: {id: id}})

    if(idResearch.length === 0) return res.status(404).json({tag: "Id not found"})
    
    idResearch.map((tg) => {
      tg.tags = JSON.parse(tg.tags)
    })

    return res.status(200).json(
      idResearch
    )
  }

  async delete(req: Request, res: Response) {

    const { id } = req.params
    
    const toolsRepository = getRepository(ToolsDb)

    const idResearch = await toolsRepository.find({where: {id: id}})

    if(idResearch.length == 0) return res.status(404).json({tag: "Id not found"})

    await toolsRepository.remove(idResearch)
    
    return res.status(204).json()
  }
}
  
export { Tools }