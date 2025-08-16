import {Router} from 'express';
import {listAction} from './controller.js';

const router = Router()

const data = [
    {id: 1, title: 'Iron Man', year: 2028},
    {id: 2, title: 'Iron Woman', year: 2020},
    {id: 3, title: 'Iron Men', year: 2021},
]

router.get('/', listAction);

export {router}