import { Request, Response } from "express";
import { UsersService } from "../services/UsersService";

class UsersController {
  async create(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    const usersServices = new UsersService();

    try {
      const user = await usersServices.create(email);

      return response.json(user);
    }
    catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }

  }
}

export { UsersController }