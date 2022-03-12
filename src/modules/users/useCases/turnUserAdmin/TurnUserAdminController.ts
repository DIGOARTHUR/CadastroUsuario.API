import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.params;
      const id = user_id.toString();

      const users = this.turnUserAdminUseCase.execute({ user_id: id });

      return response.status(200).json(users);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { TurnUserAdminController };
