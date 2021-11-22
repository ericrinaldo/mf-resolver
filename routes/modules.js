import express from 'express';
import { getModule } from '../controllers/modules.js';


const router = express.Router();
router.get('/', getModule);


export default router;
