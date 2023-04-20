import express from "express";

import { createProperty, deleteProperty, getAllProperties, getPropertyDetail, updateProperty } from '../controllers/property.controller.js';

const router = express.router();

router.route('/').get(getAllProperties);
router.route('/:id').get(getPropertyDetail);
router.route('/').post(createProperty);
router.route('/:id').patch(updateProperty);
router.route('/').delete(deleteProperty);

export default router;