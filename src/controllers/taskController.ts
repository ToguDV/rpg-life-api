import { Request, Response} from 'express';
import Task from '../models/taskModel';

export const getAllTasks = async (req: Request, res: Response): Promise<void> => {
    try {
        const tasks = await Task.find();
        res.json(tasks)
    }
    catch (error) {
        res.status(500).json({ message: 'Errror when trying to get tasks'})
    }
}

export const createTask = async (req: Request, res: Response): Promise<void> => {
    try {
        const newTask = new Task(req.body);
        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    }
    catch (error) {
        res.status(400).json({message: 'Error when trying to create the task'});
    }
};