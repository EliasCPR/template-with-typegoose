import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose';

@modelOptions({ schemaOptions: { collection: 'tasks', timestamps: true } })
class Task {
  @prop({ type: String, required: true })
  public title: string;

  @prop({ type: String })
  public description: string;

  public createdAt?: Date;

  public updatedAt?: Date;
}

const taskModel = getModelForClass(Task);

export default taskModel;
