import { CreateTaskDto } from '@/dtos/tasks.dto';
import { HttpException } from '@/exceptions/HttpException';
import { Task } from '@/interfaces/tasks.interface';
import taskModel from '@/models/tasks.model';
import { isEmpty } from '@/utils/util';

class TaskService {
  public async findAllTask(): Promise<Task[]> {
    const tasks: Task[] = await taskModel.find();

    return tasks;
  }

  public async findTaskById(taskId: string): Promise<Task> {
    if (isEmpty(taskId)) throw new HttpException(400, 'taskId is empty');

    const findTask: Task = await taskModel.findOne({ _id: taskId });
    if (!findTask) throw new HttpException(409, "Task doesn't exist");

    return findTask;
  }

  public async createTask(taskData: CreateTaskDto): Promise<Task> {
    if (isEmpty(taskData)) throw new HttpException(400, 'taskData is empty');

    const createTaskData: Task = await taskModel.create(taskData);

    return createTaskData;
  }

  public async updateTask(taskId: string, taskData: CreateTaskDto): Promise<Task> {
    if (isEmpty(taskData)) throw new HttpException(400, 'userData is empty');

    const updateTaskById: Task = await taskModel.findByIdAndUpdate(taskId, { taskData });
    if (!updateTaskById) throw new HttpException(409, "Task doesn't exist");

    return updateTaskById;
  }

  public async deleteTask(taskId: string): Promise<Task> {
    const deleteTaskById: Task = await taskModel.findByIdAndDelete(taskId);

    if (!deleteTaskById) throw new HttpException(409, "Task doesn't exist");

    return deleteTaskById;
  }
}

export default TaskService;
