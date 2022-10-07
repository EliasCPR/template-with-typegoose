import { Routes } from '@/interfaces/routes.interface';
import { Router } from 'express';
import UsersController from '@controllers/users.controller';

class TasksRoute implements Routes {
  public path = '/tasks';
  public router = Router();
  public tasksController = new UsersController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.tasksController.getUsers);
  }
}

export default TasksRoute;
