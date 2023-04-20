import express  from "express";

import { createUser, getAllUsers, getAllUserInfoById } from '../controllers/user.controller.js';

const router = express.Router();

router.route('/').get(getAllUsers);
router.route('/').post(createUser);
router.route('/:id').get(getAllUserInfoById);

export default router;