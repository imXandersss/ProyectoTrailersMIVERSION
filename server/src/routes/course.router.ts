import {Router} from 'express'
import {get, post, put, getOne, remove} from '../services/course.service'
import multer from '../config/multer.config'

const router = Router();
    router.get('/', get);
    router.get('/:id', get);
    router.post('/', multer.single('image'), post);
    router.put('/:id', put);
    router.get('/:id', getOne);
    router.delete('/:id', remove);

export default router;