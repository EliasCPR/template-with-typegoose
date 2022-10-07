import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose';

@modelOptions({ schemaOptions: { collection: 'tasks', timestamps: true } })
class Task {
  @prop({ type: String, required: true })
  public name: string;

  @prop({ type: String, required: true })
  public description: string;

  @prop({ type: Date })
  public endAt?: Date;

  @prop({ types: String })
  public userId?: string;

  public createdAt?: Date;

  public updatedAt?: Date;
}

const TaskModel = getModelForClass(Task);

export default TaskModel;
