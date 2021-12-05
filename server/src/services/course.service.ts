import courseSchema from '../models/Course.model'
import { Request, Response } from 'express'
import { getNodeMajorVersion } from 'typescript';

export const get = async (req: Request, res: Response) => {
    try {
        const data = await courseSchema.find();
        return res.status(200).json(data);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ Message: 'Error' });
    }
};

export const post = async (req: Request, res: Response) => {
    try {
        const newCourse = new courseSchema({
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            director: req.body.director,
            actors: req.body.actors,
            year: req.body.year,
            link: req.body.link,
            image: req.file?.path,
            user: req.body.user
        })
        newCourse.save(() => res.status(200).json({ Message: 'Course created correctly' }))
    }

    catch (err) {
        console.log(err);
        return res.status(500).json({ Message: 'Error', Error: err })
    }
};

export const put = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const newCourse = {
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            director: req.body.director,
            actors: req.body.actors,
            year: req.body.year,
            link: req.body.link,
            image: req.file?.path,
            user: req.body.user
        }
        await courseSchema.findByIdAndUpdate(id, { set: newCourse }, { new: true });
        return res.status(200).json({ Message: 'Course updated succesfully' });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ Message: 'Error', Error: err })
    }
};

export const getOne = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const data = await courseSchema.findById(id);
        return res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ Message: 'Error' })
    }
};

export const remove = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await courseSchema.findByIdAndRemove(id);
        return res.status(200).json({ Message: 'Course removed succesfully' })
    } catch (err) {
        console.log(err);
        return res.status(500).json({ Message: 'Error', Error: err })
    }
};


