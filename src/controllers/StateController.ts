import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { StateRepository } from "../repositories/StateRepository";

class StateController {
  async create(request: Request, response: Response) {
    const { name, acronym, id } = request.body;

    const statesRepository = getCustomRepository(StateRepository);

    const state = statesRepository.create({
      name,
      acronym,
    });

    await statesRepository.save(state);

    return response.status(201).json(state);
  }

  async show (request: Request, response: Response) {
   const statesRepository = getCustomRepository(StateRepository);
   
   const all = await statesRepository.find();

   return response.json(all);
  }

  async update(request: Request, response: Response) {
   const statesRepository = getCustomRepository(StateRepository);
   
   const state = await statesRepository.findOne(
     request.params.id
   );

   statesRepository.merge(state, request.body);

   const save = await statesRepository.save(state);

   return response.send(save);
  }
}

export { StateController };
