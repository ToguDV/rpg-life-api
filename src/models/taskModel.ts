import { Schema, model, Document } from 'mongoose';


export interface ITask extends Document {
    name: string,
    description: string,
    createdAt: Date,
    startedAt: Date,
    checked: Boolean,
    skills: [Schema.Types.ObjectId, ref:'Skill' ]
}

const taskScheme = new Schema<ITask>({
    name: {type: String, required: true},
    description: {type: String, required:false},
    createdAt: {type: Date, required:true},
    startedAt: {type: Date, required:true},
    checked: {type: Boolean, required:true},
    skills: [{type: Schema.Types.ObjectId, ref:'Skill' }],

});

const Task = model<ITask>('Task', taskScheme);

export default Task;